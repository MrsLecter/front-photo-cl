import requestHandler from "@/api/api-api-requests";
import requestHandlerUser from "@/api/api-user-requests";
import { isTokensNeedRefresh } from "@/components/helpers/functions";
import { userSlice } from "@/components/store/reducers/userSlice";
import ButtonBack from "@common/buttons/ButtonBack";
import { ContextMenu } from "@common/contextMenu/ContextMenu";
import { Description } from "@common/description/Description";
import Header from "@common/header/Header";
import Logo from "@common/logo/Logo";
import { AppUrlsEnum } from "@const";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import WrapperModal from "@wrappers/wrapperModal/WrapperModal";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSelfie from "./userSelfie/UserSelfie";

const AddSelfie: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const { refreshToken, expiresIn, avatarLink } = useAppSelector(
    (store) => store.userReducer
  );
  const [isActiveContext, toggleIsActiveContext] = useState<boolean>(false);
  const screenWidth = window.screen.width;

  useEffect(() => {
    if (avatarLink) {
      navigate("../" + AppUrlsEnum.DASHBOARD);
    }
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

  const toggleContextMenu = () => {
    toggleIsActiveContext(!isActiveContext);
  };
  return (
    <WrapperPage>
      <Logo />
      <ButtonBack />
      <Header
        label="Add a selfie"
        font="22"
        largeFont="30"
        top="50"
        largeTop="170"
        bottom="4"
        largeBottom="28"
      />
      <Description text="A selfie allows your photos to be synced with your account." />
      <UserSelfie
        userImage={avatarLink}
        handleAddButton={() => toggleContextMenu()}
      />
      {isActiveContext ? (
        <WrapperModal
          isAlbum={false}
          top={screenWidth > 1439 ? 420 : 370}
          width={screenWidth > 1439 ? 420 : 226}
          height={screenWidth > 1439 ? 185 : 119}
          borderRadius={screenWidth > 1439 ? 20 : 11}
          backClickHandler={() => toggleContextMenu()}
        >
          <ContextMenu />
        </WrapperModal>
      ) : (
        <></>
      )}
    </WrapperPage>
  );
};

export default AddSelfie;
