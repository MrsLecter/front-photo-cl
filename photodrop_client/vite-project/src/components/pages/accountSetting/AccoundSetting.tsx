import ButtonBack from "@common/buttons/ButtonBack";
import Logo from "@common/logo/Logo";
import styled from "styled-components";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import Header from "@common/header/Header";
import FeedbackButtonList from "./feedbackButtonList/FeedbackButttonList";
import LoadingBlock from "@common/loadingBlock/LoadingBlock";
import { useNavigation } from "react-router-dom";
import { useEffect } from "react";
import { isTokensNeedRefresh } from "@/components/helpers/functions";
import { userSlice } from "@/components/store/reducers/userSlice";
import requestHandler from "@/api/api-api-requests";

const AccountSettings: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const { refreshToken, expiresIn, phoneNumber, userEmail } = useAppSelector(
    (store) => store.userReducer
  );

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

  return (
    <WrapperPage>
      {navigation.state === "loading" ? <LoadingBlock /> : <></>}
      <Logo />
      <ButtonBack />
      <StyledAccountSetting>
        <Header
          largeFont="22"
          font="18"
          top="10"
          largeTop="30"
          bottom="25"
          label="Account settings"
        />
        <FeedbackButtonList
          phoneNumber={phoneNumber || ""}
          userEmail={userEmail || "undefined"}
        />
      </StyledAccountSetting>
    </WrapperPage>
  );
};

const StyledAccountSetting = styled.div`
  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`;

export default AccountSettings;
