import requestHandler from "@/api/api-requests";
import { isTokensNeedRefresh } from "@/components/helpers/functions";
import { userSlice } from "@/components/store/reducers/userSlice";
import ButtonBack from "@common/buttons/ButtonBack";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import {
  FormErrorMessage,
  FormInput,
  FormMain,
} from "@common/FormElements/FormElements";
import Header from "@common/header/Header";
import LoadingBlock from "@common/loadingBlock/LoadingBlock";
import Logo from "@common/logo/Logo";
import { AppUrlsEnum, FULLNAME_REGEXP } from "@const";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { useInput } from "@hooks/use-input";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";

const StyledContent = styled.div`
  margin-top: 160px;
`;

const DeterminateUser: React.FC = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUserName, setNewTokens } = userSlice.actions;
  const { refreshToken, expiresIn, accessToken, userName, userEmail } =
    useAppSelector((store) => store.userReducer);
  const dispatch = useAppDispatch();

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

  const {
    value: fullname,
    error: fullnameIsValid,
    changeHandler: fullnameChangeHandler,
  } = useInput({ regexp: FULLNAME_REGEXP, allowEmpty: false });

  const onChangeFullname = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullnameIsValid || !fullname) {
      alert("Field must not be empty or invalid!");
      console.error("Empty or invalid fullname");
    }
    if (fullnameIsValid && fullname) {
      try {
        setIsLoading(true);
        dispatch(setUserName({ name: fullname }));
        const response = await requestHandler.putUserName({
          accessToken,
          userName: fullname,
        });

        if (response.status === 200) {
          setUserName({ name: fullname });

          if (!userEmail) {
            navigate("../" + AppUrlsEnum.DET_EMAIL);
          } else {
            navigate("../" + AppUrlsEnum.USER_PROFILE);
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
      {isLoading ? <LoadingBlock /> : <></>}
      {navigation.state === "loading" ? <LoadingBlock /> : <></>}
      <Logo />
      <ButtonBack />
      <StyledContent>
        {userName ? (
          <Header
            font="22"
            largeFont="30"
            top="80"
            largeTop="245"
            bottom="0"
            label="Your name"
          />
        ) : (
          <Header
            font="22"
            largeFont="30"
            top="80"
            largeTop="245"
            bottom="0"
            label="Let’s get to know you"
          />
        )}
        <WrapperContentUser>
          <FormMain formName="changeEmail" onFormSubmit={onChangeFullname}>
            <FormInput
              onChangeHandler={fullnameChangeHandler}
              inputType="text"
              inputName="email"
              inputIsValid={fullnameIsValid}
              inputValue={fullname}
              placeholder="What’s your name?"
            />
            {fullnameIsValid ? (
              <FormErrorMessage text={""} />
            ) : fullname.length === 0 ? (
              <FormErrorMessage text={"Field must not be empty"} />
            ) : (
              <FormErrorMessage text={"Error: invalid email"} />
            )}
            {userName ? (
              <ButtonSubmit
                payment={false}
                buttonHandler={() => console.log("submit")}
                label={"Save"}
                top="-6"
              />
            ) : (
              <ButtonSubmit
                payment={false}
                buttonHandler={() => console.log("submit")}
                label={"Next"}
                top="-6"
              />
            )}
          </FormMain>
        </WrapperContentUser>
      </StyledContent>
    </WrapperPage>
  );
};

const WrapperContentUser = styled.div`
  @media (min-width: 1440px) {
    width: 420px;
    margin-left: calc(50vw - 245px);

    & input:nth-child(1) {
      margin-top: -0px;
      margin-bottom: 24px;
    }
  }
`;

export default DeterminateUser;
