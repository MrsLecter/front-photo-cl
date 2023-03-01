import { FormEvent, useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentInput,
  PaymentCardDetails,
  PaymentSelectZip,
} from "./paymentElements/PaymentElements";
import { EMAIL_REGEXP, FULLNAME_REGEXP } from "@const";
import { useInput } from "@hooks/use-input";
import emailPNG from "@images/address-card.png";
import {
  StyledPayment,
  StyledPaymentBtn,
  StyledEmailSvg,
} from "./Payment.styles";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import requestHandler from "@/api/api-requests";
import { useAppSelector } from "@hooks/reducers.hook";
import Header from "@common/header/Header";
import ButtonClose from "@common/buttons/ButtonClose";

const Payment = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const elements = useElements();
  const navigate = useNavigate();
  const stripe = useStripe();
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const { accessToken, photoPrice, userEmail, userName } = useAppSelector(
    (state) => state.userReducer
  );
  const albumName = params.get("name") || "none";
  const entityType = params.get("type") || "none";
  const entityPrice = params.get("price") || "none";
  const photoID = params.get("id") || "none";

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
  } = useInput({
    regexp: EMAIL_REGEXP,
    allowEmpty: false,
  });

  const {
    value: fullname,
    error: fullnameIsValid,
    changeHandler: fullnameChangeHandler,
  } = useInput({
    regexp: FULLNAME_REGEXP,
    allowEmpty: false,
  });

  const {
    value: cardNumber,
    error: cardNumberIsValid,
    changeHandler: cardNumberChangeHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
    mask: "1234 1234 1234 1234",
    maskType: "cardnumber",
  });

  const {
    value: cardExpire,
    error: cardExpireIsValid,
    changeHandler: cardExpireChangeHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
    mask: "mm/yy",
    maskType: "mmyy",
  });

  const {
    value: cardCvc,
    error: cardCvcIsValid,
    changeHandler: cardCvcChangeHandler,
  } = useInput({
    regexp: "none",
    allowEmpty: false,
    mask: "123",
    maskType: "cvc",
  });

  const paymentSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!emailIsValid) {
      alert("Email not valid!");
    }
    if (
      emailIsValid &&
      fullnameIsValid &&
      cardNumberIsValid &&
      cardExpireIsValid
    ) {
      if (params.get("type") === "album") {
        const response = await requestHandler.makePaymentForAlbum({
          accessToken,
          albumName: albumName || "notAssigned",
          card: cardNumber || "",
          carddate: cardExpire,
          cvs: cardCvc,
          price: params.get("price") || "",
        });

        if (response.status === 200) {
          navigate(`../payment_complete?album=${albumName}`);
        } else {
          console.error("Err", response);
        }
      } else if (params.get("type") === "photo") {
        const response = await requestHandler.makePaymentForPhoto({
          accessToken,
          photoid: photoID,
          card: cardNumber || "",
          carddate: cardExpire,
          cvs: cardCvc,
          price: params.get("price") || "",
        });

        if (response.status === 200) {
          navigate(`../payment_complete?photoid=${photoID}`);
        } else {
          console.error("Err", response);
        }
      }
    } else {
      alert("Form has invalid field(-s)!");
    }

    const cardCvcElement = elements?.getElement(CardCvcElement);
    const cardNumberElement = elements?.getElement(CardNumberElement);
    const cardExpiryElement = elements?.getElement(CardExpiryElement);
  };
  return (
    <StyledPayment>
      <Header
        label="Pay with card"
        top="20"
        largeFont="18"
        font="18"
        bottom="0"
        largeTop="20"
      />
      <div>
        <ButtonClose color="black" />
        <form onSubmit={paymentSubmitHandler}>
          <StyledEmailSvg src={emailPNG} alt="email.svg" />
          <PaymentInput
            isValidPayment={emailIsValid}
            value={email ? email : String(userEmail)}
            label="Email"
            changeInputHandler={emailChangeHandler}
          />
          <PaymentCardDetails
            isValidNumber={cardNumberIsValid}
            isValidExpire={cardExpireIsValid}
            isValidCvc={cardCvcIsValid}
            numberValue={cardNumber}
            label="Debit/Credit Card information"
            changeNumberHandler={cardNumberChangeHandler}
            expireValue={cardExpire}
            changeExpireHandler={cardExpireChangeHandler}
            cvcValue={cardCvc}
            changeCvcHandler={cardCvcChangeHandler}
          />
          <PaymentInput
            isValidPayment={fullnameIsValid}
            value={fullname ? fullname : String(userName)}
            label="Name of card"
            changeInputHandler={fullnameChangeHandler}
          />
          <PaymentSelectZip setZipCodeCallback={() => setZipCode} />
          <StyledPaymentBtn type="submit" disabled={!stripe}>
            Pay
          </StyledPaymentBtn>
        </form>
      </div>
    </StyledPayment>
  );
};

export default Payment;
