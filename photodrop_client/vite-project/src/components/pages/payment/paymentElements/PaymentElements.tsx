import { useState } from "react";
import {
  StyledPaymentCardDetails,
  StyledPaymentSelect,
  StyledPaymentArrow,
  StyledPaymentOffersBox,
  StyledPaymentDisplay,
  StyledPaymentLabel,
  StyledPaymentInput,
  StyledCardNumberImages,
  StyledCardImage,
  StyledInputNumber,
  StyledPaymentDetails,
} from "./PaymentElements.styled";
import {
  CityType,
  PaymentCardDetailsProps,
  PaymentInputProps,
} from "./PaymentElements.types";

import zipCodeJSON from "../../../../assets/data/zipCodes.json";
import upSVG from "@images/up-arrow.svg";
import downSVG from "@images/down-arrow.svg";
import visaPNG from "@images/visa.png";
import mastercardPNG from "@images/mastercard.png";
import amexPNG from "@images/amex.png";
import dcPNG from "@images/diners.png";
import cardPNG from "@images/card.png";

export const PaymentInput: React.FC<PaymentInputProps> = ({
  label,
  value,
  isValidPayment,
  changeInputHandler,
}) => {
  return (
    <StyledPaymentInput isValid={isValidPayment}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        onChange={changeInputHandler}
        value={value}
        maxlength="40"
      />
    </StyledPaymentInput>
  );
};

export const PaymentSelectZip: React.FC<{
  setZipCodeCallback: (zip: string) => void;
}> = ({ setZipCodeCallback }) => {
  const [inputValue, setInputValue] = useState<string>("United States");
  const [offers, setOffers] = useState<CityType[] | []>([]);
  const [isActive, setIsActive] = useState(false);
  const [inputTimer, setInputTimer] = useState<NodeJS.Timeout>();
  const [zip, setZip] = useState<string>("");

  const changeZipHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userCity = event.target.value.toLowerCase();
    setInputValue(event.target.value);
    setIsActive(false);
    if (inputTimer) {
      clearTimeout(inputTimer);
    }
    const timeout = setTimeout(() => {
      if (userCity.length > 3) {
        const filteredOffers = zipCodeJSON.filter((item) => {
          const city = item.city.toLowerCase();
          return city.startsWith(userCity);
        });
        setOffers(filteredOffers as CityType[]);
        setIsActive(true);
      }
    }, 2000);
    setInputTimer(timeout);
  };

  const setCountryHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const country = (event.target as HTMLButtonElement).innerText;
    setInputValue(country.split("-")[0].trim());
    setZip(country.split("-")[2].trim());
    setZipCodeCallback(country.split("-")[2].trim());
    setIsActive(false);
  };
  return (
    <StyledPaymentSelect>
      <label>Country or region</label>
      <input
        type="text"
        onChange={(e) => changeZipHandler(e)}
        value={inputValue}
      />
      {isActive ? (
        <StyledPaymentArrow src={upSVG} alt="up.svg" />
      ) : (
        <StyledPaymentArrow src={downSVG} alt="down.svg" />
      )}

      {isActive && (
        <StyledPaymentOffersBox>
          {offers.map((item: CityType) => (
            <button
              key={item.zipcode}
              type="button"
              onClick={(e) => setCountryHandler(e)}
            >
              {item.city} - {item.state} - {item.zipcode}
            </button>
          ))}
        </StyledPaymentOffersBox>
      )}
      <StyledPaymentDisplay>ZIP: {zip}</StyledPaymentDisplay>
    </StyledPaymentSelect>
  );
};

export const PaymentCardDetails: React.FC<PaymentCardDetailsProps> = ({
  label,
  numberValue,
  changeNumberHandler,
  expireValue,
  changeExpireHandler,
  cvcValue,
  changeCvcHandler,
  isValidNumber,
  isValidExpire,
  isValidCvc,
}) => {
  return (
    <StyledPaymentCardDetails isValidNumber={isValidNumber}>
      <label htmlFor="card-number">{label}</label>
      <StyledInputNumber
        type="text"
        id="card-number"
        onChange={changeNumberHandler}
        value={numberValue}
        placeholder={"1234 1234 1234 1234"}
        maxLength={19}
      />
      <StyledPaymentDetails
        isValidExpire={isValidExpire}
        isValidCvc={isValidCvc}
      >
        <input
          type="text"
          id="card-expire"
          onChange={changeExpireHandler}
          value={expireValue}
          placeholder={"MM/YY"}
          maxLength={5}
        />
        <input
          type="text"
          id="card-cvc"
          onChange={changeCvcHandler}
          value={cvcValue}
          placeholder={"CVC"}
          maxLength={4}
        />
      </StyledPaymentDetails>
      <StyledCardNumberImages>
        <img
          style={{ width: "25px", height: "25px" }}
          src={visaPNG}
          alt="visa.png"
        />
        <img src={mastercardPNG} alt="mastercard.png" />
        <img src={amexPNG} alt="amex.png" />
        <img src={dcPNG} alt="dc.png" />
      </StyledCardNumberImages>
      <StyledCardImage src={cardPNG} alt="card.png" />
    </StyledPaymentCardDetails>
  );
};
