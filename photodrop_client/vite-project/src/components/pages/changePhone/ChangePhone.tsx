import { useInput } from "@hooks/use-input";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import cities from "../../../assets/data/countryDb.json";
import { AppUrlsEnum, PHONE_REGEXP } from "@const";
import Logo from "@common/logo/Logo";
import ButtonBack from "@common/buttons/ButtonBack";
import Header from "@common/header/Header";
import {
  FormErrorMessage,
  FormInput,
  FormInputSmall,
  FormMain,
} from "@common/FormElements/FormElements";
import { FormDescriptionWrapper } from "@common/FormElements/FormElements";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import LanguageBtn from "@common/buttons/LanguageBtn";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { userSlice } from "@/components/store/reducers/userSlice";
import requestHandler from "@/api/api-requests";
import { useEffect } from "react";
import { isTokensNeedRefresh } from "@/components/helpers/functions";

const ChangePhone: React.FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const phoneCode = params.get("code") || "1";
  const countryCode = params.get("icon") || "US";
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const { refreshToken, expiresIn, phoneNumber, accessToken } = useAppSelector(
    (store) => store.userReducer
  );
  const { setPhone } = userSlice.actions;

  useEffect(() => {
    const checkToken = async () => {
      if (isTokensNeedRefresh(expiresIn || 0)) {
        dispatch(
          setNewTokens(await requestHandler.makeTokenRefresh({ refreshToken }))
        );
      }
    };
    checkToken();
  }, []);

  function SortArray(x: any, y: any) {
    return x.name.localeCompare(y.name);
  }
  const prep = cities.sort(SortArray);

  const {
    value: phone,
    error: phoneIsValid,
    changeHandler: phoneChangeHandler,
  } = useInput({
    regexp: PHONE_REGEXP,
    allowEmpty: false,
    mask: `+${phoneCode}(___)___-____`,
    maskType: "phone",
  });
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!phone) {
      console.error("Error: login or password not valid!");
      return;
    }
    try {
      const response = await requestHandler.putUserPhone({
        phone,
        accessToken,
      });
      if (response.status === 200) {
        navigate("../" + AppUrlsEnum.USER_PROFILE);
      }
      if (response.status === 409) {
        alert("A user with this phone number is previously registered");
      }
    } catch (err: any) {
      console.error(new Error(err));
      navigate(
        "../" + AppUrlsEnum.INFO + "?message=Error during request. Try again"
      );
    }
    dispatch(setPhone({ phone }));
    navigate("../" + AppUrlsEnum.CONFIRM);
    return;
  };
  return (
    <WrapperPage>
      <Logo />
      <ButtonBack />
      <Header
        label="Mobile number"
        font="18"
        largeFont="18"
        top="0"
        largeTop="0"
        bottom="0"
      />
      <FormMain
        formName="signupForm"
        onFormSubmit={(event) => formSubmitHandle(event)}
      >
        <FormDescriptionWrapper>
          Update your number and we’ll send a verification code to this number.
        </FormDescriptionWrapper>
        <StyledSignupPhone>
          <LanguageBtn country={countryCode} />
          <FormInputSmall
            inputName="phone"
            inputType="tel"
            inputIsValid={phoneIsValid}
            inputValue={phone}
            onChangeHandler={phoneChangeHandler}
            placeholder={`+${phoneCode}(555)555-5555`}
          />
        </StyledSignupPhone>

        {phoneIsValid ? (
          <FormErrorMessage text={""} />
        ) : phone.length === 0 ? (
          <FormErrorMessage text={"Field must not be empty"} />
        ) : (
          <></>
        )}
        <ButtonSubmit top="0" label="Next" />
      </FormMain>
    </WrapperPage>
  );
};

const StyledSignupPhone = styled.div`
  width: 345px;
  height: 40px;
  margin: 19px auto 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default ChangePhone;
