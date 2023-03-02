import LogoInfo from "@common/logoInfo/LogoInfo";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import Header from "@common/header/Header";
import Logo from "@common/logo/Logo";
import WrapperPage from "@/components/wrappers/wrapperPage/WrapperPage";

import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AppUrlsEnum } from "@const";
import ButtonBack from "@common/buttons/ButtonBack";
import {
  getFormedAvatarData,
  setNewAvatar,
} from "@/components/helpers/functions";
import { useEffect } from "react";
import { useAppSelector } from "@hooks/reducers.hook";

const Info: React.FC = () => {
  const navigate = useNavigate();
  const { userName } = useAppSelector((store) => store.userReducer);
  const message = useParams().message || "message not found";
  console.log("message", message);

  //trick
  if (message === "Selfie uploaded successfully") {
    let fData = getFormedAvatarData(userName || "none");
    setNewAvatar(fData);
  }
  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <WrapperPage>
      <Logo />
      <ButtonBack />
      <LogoInfo />
      <Header
        label={"🤔 Something happened"}
        top="22"
        largeTop="22"
        font="22"
        largeFont="22"
        bottom="0"
      />

      <InfoPage>
        <InfoPageWrapper>
          <InfoPageMessage>
            {message
              ? message
              : "Oops! Unexpected error! Refresh page to continue"}
          </InfoPageMessage>
          <ButtonSubmit
            top="0"
            label={"Go back"}
            buttonHandler={goBackHandler}
          />
        </InfoPageWrapper>
      </InfoPage>
    </WrapperPage>
  );
};

const InfoPage = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 14px;
`;

const InfoPageWrapper = styled.div`
  width: 345px;
  margin: 0 auto;
`;

const InfoPageMessage = styled.div`
  width: 345px;
  height: 27px;
  margin-bottom: 100px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 23.08px;
  text-align: center;
  color: ${({ theme }) => theme.text.second};
`;

export default Info;
