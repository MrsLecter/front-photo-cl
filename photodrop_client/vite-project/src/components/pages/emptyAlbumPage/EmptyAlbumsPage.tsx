import AvatarLink from "@common/avatarLink/AvatarLink";
import { Carousel } from "@common/carousel/Carousel";
import FrameInvite from "@common/frameInvite/FrameInvite";
import Header from "@common/header/Header";
import Logo from "@common/logo/Logo";
import { CAROUSEL_ITEMS } from "@const";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import ArtPins from "./artPins/ArtPins";
import EmptyAlbumInfo from "./emptyAlbumInfo/EmptyAlbumInfo";
import MessageNotification from "./messageNotification/MessageNotification";
import WrapperContent from "@wrappers/wrapperContent/wrapperContent";
import { useEffect } from "react";
import { userSlice } from "@/components/store/reducers/userSlice";
import { isTokensNeedRefresh } from "@/components/helpers/functions";
import requestHandler from "@/api/api-requests";

const EmptyAlbumsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const {
    refreshToken,
    expiresIn,
    accessToken,
    userName,
    userEmail,
    avatarLink,
  } = useAppSelector((store) => store.userReducer);
  const screenWidth = window.screen.width;

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
      <Logo />
      <AvatarLink avatar={avatarLink} />
      <MessageNotification />
      <Header
        label="Your photos will drop soon."
        font="16"
        largeFont="22"
        top="25"
        largeTop="50"
        bottom="0"
      />
      <EmptyAlbumInfo />
      <WrapperContent>
        {screenWidth > 1439 ? (
          <Header
            left={true}
            label="Browse Art Prints"
            font="16"
            largeFont="22"
            top="30"
            largeTop="30"
            bottom="0"
          />
        ) : (
          <Header
            left={true}
            label="Browse Art Prints"
            font="16"
            largeFont="24"
            top="25"
            largeTop="80"
            bottom="0"
          />
        )}

        <Carousel isAdvertisment={true} covers={CAROUSEL_ITEMS} album={false} />
      </WrapperContent>

      {screenWidth > 1439 ? <FrameInvite /> : <></>}
    </WrapperPage>
  );
};

export default EmptyAlbumsPage;
