import ButtonBack from "@common/buttons/ButtonBack";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import { FormCheckbox, FormMain } from "@common/FormElements/FormElements";
import Header from "@common/header/Header";
import Logo from "@common/logo/Logo";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledNotificationContent } from "./NotificationSetting.styles";
import { FormDescriptionWrapper } from "@common/FormElements/FormElements";
import requestHandler from "@/api/api-api-requests";
import { userSlice } from "@/components/store/reducers/userSlice";
import { AppUrlsEnum } from "@const";
import { isTokensNeedRefresh } from "@/components/helpers/functions";
import requestHandlerApi from "@/api/api-api-requests";
import requestHandlerUser from "@/api/api-user-requests";
import { IAxiosInfoResponse } from "@/api/api-requests.types";

const NotificationSetting: React.FC = () => {
  const navigate = useNavigate();
  const { setNotification } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const { refreshToken, expiresIn, notificationSettings, accessToken } =
    useAppSelector((store) => store.userReducer);
  const [isMessagesEnable, toggleIsMessagesEnable] = useState<boolean>(false);
  const [isEmailEnable, toggleIsEmailEnable] = useState<boolean>(false);
  const [isUnsubscribeEnable, toggleIsUnsubscribeEnable] =
    useState<boolean>(false);

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
    toggleIsEmailEnable(!!notificationSettings.email);
    toggleIsMessagesEnable(!!notificationSettings.textMessages);
    toggleIsUnsubscribeEnable(!!notificationSettings.unsubscribe);
  }, []);

  const onChangeNotification = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  };

  const saveSettings = async () => {
    dispatch(
      setNotification({
        textMessages: +isMessagesEnable,
        email: +isEmailEnable,
        unsubscribe: +isEmailEnable,
      })
    );
    const response: IAxiosInfoResponse =
      await requestHandlerUser.putNotification({
        messageNotif: isMessagesEnable,
        emailNotif: isEmailEnable,
        unsubscribeNotif: isUnsubscribeEnable,
        accessToken,
      });
    console.log(">>>resp", response);
    navigate("../" + AppUrlsEnum.USER_PROFILE);
  };

  return (
    <WrapperPage>
      <Logo />
      <ButtonBack />
      <StyledNotificationContent>
        <Header
          font="18"
          largeFont="22"
          top="14"
          largeTop="40"
          label="Notification settings"
          bottom="12"
        />
        <FormMain formName="notification" onFormSubmit={onChangeNotification}>
          <FormCheckbox
            checked={isMessagesEnable}
            label="Text messages"
            value="enable_messages"
            checkboxChangeHandler={() =>
              toggleIsMessagesEnable(!isMessagesEnable)
            }
          />
          <FormCheckbox
            checked={isEmailEnable}
            label="Email"
            value="enable_email"
            checkboxChangeHandler={() => toggleIsEmailEnable(!isEmailEnable)}
          />
          <FormCheckbox
            checked={isUnsubscribeEnable}
            label="Unsubscribe"
            value="enable_unsubscribe"
            checkboxChangeHandler={() =>
              toggleIsUnsubscribeEnable(!isUnsubscribeEnable)
            }
          />
          <FormDescriptionWrapper width="small">
            Stop marketing notifications. You will still receive transactional
            notifications for purchases and when new photos are available.
          </FormDescriptionWrapper>
          <ButtonSubmit
            buttonHandler={() => saveSettings()}
            label={"Save"}
            top="0"
          />
        </FormMain>
      </StyledNotificationContent>
    </WrapperPage>
  );
};

export default NotificationSetting;
