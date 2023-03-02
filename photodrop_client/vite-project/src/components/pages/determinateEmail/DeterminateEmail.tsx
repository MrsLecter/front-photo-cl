import { userSlice } from "@/components/store/reducers/userSlice";
import ButtonBack from "@common/buttons/ButtonBack";
import Logo from "@common/logo/Logo";
import { AppUrlsEnum, EMAIL_REGEXP } from "@const";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { useInput } from "@hooks/use-input";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import Header from "@common/header/Header";
import {
  FormErrorMessage,
  FormInput,
  FormMain,
} from "@common/FormElements/FormElements";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import requestHandler from "@/api/api-api-requests";
import { isTokensNeedRefresh } from "@/components/helpers/functions";
import requestHandlerUser from "@/api/api-user-requests";
import { IAxiosInfoResponse } from "@/api/api-requests.types";

const StyledContent = styled.div`
  margin-top: 167px;
`;

const DeterminateEmail: React.FC = () => {
  const [params] = useSearchParams();
  const { setUserEmail, setNewTokens } = userSlice.actions;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { refreshToken, expiresIn, accessToken, userEmail, userName } =
    useAppSelector((store) => store.userReducer);

  useEffect(() => {
    const checkToken = async () => {
      if (isTokensNeedRefresh(expiresIn || 0)) {
        dispatch(
          setNewTokens(
            await requestHandlerUser.makeTokenRefresh({ refreshToken })
          )
        );
      }
    };
    checkToken();
  }, []);

  const {
    value: email,
    error: emailIsValid,
    changeHandler: emailChangeHandler,
  } = useInput({ regexp: EMAIL_REGEXP, allowEmpty: false });

  const onChangeEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailIsValid || !email) {
      alert("Field must not be empty or invalid!");
      console.error("Empty or invalid email");
    }
    if (emailIsValid && email) {
      try {
        setIsLoading(true);

        const response: IAxiosInfoResponse =
          await requestHandlerUser.putUserEmail({
            accessToken,
            userEmail: email,
          });

        if (response.status === 200) {
          dispatch(setUserEmail({ email }));
          if (userEmail) {
            navigate("../" + AppUrlsEnum.ACCOUNT_SETTING);
          } else {
            navigate("../" + AppUrlsEnum.DASHBOARD);
          }
        } else {
          navigate("../" + AppUrlsEnum.INFO + `/${response.data.message}`);
        }
      } catch (err: unknown) {
        console.error(new Error(err as string));
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <WrapperPage>
      <Logo />
      <ButtonBack />
      <StyledContent>
        {userEmail ? (
          <Header
            font="22"
            largeFont="30"
            top="70"
            largeTop="245"
            bottom="10"
            label={"Your email"}
          />
        ) : (
          <>
            <Header
              font="22"
              largeFont="30"
              top="70"
              largeTop="224"
              bottom="0"
              label={`Hey there,`}
            />
            <Header
              font="22"
              largeFont="30"
              top="0"
              largeTop="-20"
              bottom="14"
              label={`${userName}👋`}
            />
          </>
        )}
        <WrapperContentEmail>
          <FormMain formName="changeEmail" onFormSubmit={onChangeEmail}>
            <FormInput
              onChangeHandler={emailChangeHandler}
              inputType="text"
              inputName="email"
              inputIsValid={emailIsValid}
              inputValue={email}
              placeholder="the.real.jane.smith@gmail.com"
            />
            {emailIsValid ? (
              <FormErrorMessage text={""} />
            ) : email.length === 0 ? (
              <FormErrorMessage text={"Field must not be empty"} />
            ) : (
              <FormErrorMessage text={"Error: invalid email"} />
            )}
            <ButtonSubmit
              payment={false}
              top="-5"
              buttonHandler={() => console.log("submit")}
              label={userEmail ? "Save" : "See your photos!"}
            />
          </FormMain>
        </WrapperContentEmail>
      </StyledContent>
    </WrapperPage>
  );
};

const WrapperContentEmail = styled.div`
  margin-top: -20px;

  @media (min-width: 1440px) {
    width: 420px;
    margin-left: calc(50vw - 245px);

    & input:nth-child(1) {
      margin-top: 0px;
      margin-bottom: 24px;
    }
  }
`;

export default DeterminateEmail;
