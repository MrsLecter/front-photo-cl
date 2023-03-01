import { userSlice } from "@/components/store/reducers/userSlice";
import ButtonBack from "@common/buttons/ButtonBack";
import Logo from "@common/logo/Logo";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import Header from "@common/header/Header";
import {
  FormCodeInput,
  FormErrorMessage,
  FormLabelPhone,
  FormMain,
} from "@common/FormElements/FormElements";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import requestHandler from "@/api/api-requests";
import { AxiosLoginResponse, AxiosResponse } from "@/api/api-requests.types";
import styled from "styled-components";
import { AppUrlsEnum } from "@const";

const CodeConfirm: React.FC = () => {
  const { phoneNumber, avatarLink } = useAppSelector(
    (store) => store.userReducer
  );
  const { enroll } = userSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [confirmCode, setConfirmCode] = useState<string>("");
  const [isValidConfirmCode, setIsValidConfirmCode] = useState(true);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!confirmCode || (confirmCode.length !== 6 && !isValidConfirmCode)) {
      setIsValidConfirmCode(false);
      alert("Error: code not valid! The field must not be empty");
      console.error("Error: confirmation code not valid!");
      return;
    }
    if (isValidConfirmCode && confirmCode.length === 6) {
      try {
        const confirmCodeRequest: AxiosLoginResponse =
          await requestHandler.confirm({
            phone: "" + phoneNumber?.trim(),
            code: confirmCode,
          });

        const photoPriceRequest = await requestHandler.getPhotoPrice();

        if (confirmCodeRequest.status === 200) {
          dispatch(
            enroll({
              accessToken: confirmCodeRequest.data.accessToken,
              refreshToken: confirmCodeRequest.data.refreshToken,
              avatarLink: confirmCodeRequest.data.avatarLink || "",
              userName: confirmCodeRequest.data.userName,
              phoneNumber: confirmCodeRequest.data.phoneNumber,
              userEmail: confirmCodeRequest.data.userEmail,
              notificationSettings: {
                textMessages:
                  confirmCodeRequest.data.notificationSettings.textMessages,
                email: confirmCodeRequest.data.notificationSettings.email,
                unsubscribe:
                  confirmCodeRequest.data.notificationSettings.unsubscribe,
              },
              photoPrice: photoPriceRequest.message,
            })
          );

          if (!confirmCodeRequest.data.avatarLink) {
            navigate("../" + AppUrlsEnum.ADD_SELFIE);
          } else {
            navigate("../" + AppUrlsEnum.DASHBOARD);
          }
        } else if (confirmCodeRequest.status === 406) {
          alert(
            "Your code is expired! Write /resetCode https://t.me/framology_bot -> @framology_bot</a>"
          );
        } else {
          navigate(
            "../" +
              AppUrlsEnum.INFO +
              "/message=Incorrect confirmation code. Try again"
          );
        }
      } catch (err: any) {
        console.error(new Error(err));
      }
    }
  };

  return (
    <WrapperPage>
      <Logo />
      <ButtonBack />
      <Header
        label="What’s the code?"
        font="22"
        largeFont="30"
        top="100"
        largeTop="170"
        bottom="5"
      />
      <CodeConfirmFormWrapper>
        <FormMain onFormSubmit={onFormSubmit} formName="confirmationCode">
          <FormLabelPhone text={phoneNumber || ""} />
          <FormCodeInput
            inputChangeHandler={setConfirmCode}
            inputIsValid={isValidConfirmCode}
          />
          {isValidConfirmCode ? (
            <FormErrorMessage text={""} />
          ) : (
            <FormErrorMessage text={"Confirmation code not valid!"} />
          )}
          {/* <ButtonResentCode codeResentHandler={codeResentHandler} /> */}
          <ButtonSubmit top="25" label="Next" payment={false} />
        </FormMain>
      </CodeConfirmFormWrapper>
    </WrapperPage>
  );
};

const CodeConfirmFormWrapper = styled.div`
  @media (min-width: 1440px) {
    width: 420px;
    margin-left: calc(50vw - 245px);
  }
`;

export default CodeConfirm;
