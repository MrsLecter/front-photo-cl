import requestHandler from "@/api/api-api-requests";
import {
  getAlbumsCover,
  getMarkedPhotos,
  isTokensNeedRefresh,
} from "@/components/helpers/functions";
import { IPhotoObject } from "@/components/types/commonTypes";
import AvatarLink from "@common/avatarLink/AvatarLink";
import { Carousel } from "@common/carousel/Carousel";
import FrameInvite from "@common/frameInvite/FrameInvite";
import Header from "@common/header/Header";
import Logo from "@common/logo/Logo";
import { PhotosItem, PhotosBox } from "@common/photosBox/PhotosBox";
import { AppUrlsEnum, DASHBOARD_URL } from "@const";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import WrapperContent from "@wrappers/wrapperContent/wrapperContent";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";
import WrapperPage from "../../wrappers/wrapperPage/WrapperPage";
import LoadingBlock from "@common/loadingBlock/LoadingBlock";
import { userSlice } from "@/components/store/reducers/userSlice";
import { IAxiosAlbumsResponse } from "@/api/api-requests.types";
import requestHandlerUser from "@/api/api-user-requests";

const StyledBtnSubmit = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {
    accessToken,
    refreshToken,
    userName,
    userEmail,
    avatarLink,
    photoPrice,
    expiresIn,
  } = useAppSelector((store) => store.userReducer);
  const { setNewTokens } = userSlice.actions;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isActiveModal, toggleIsActiveModal] = useState<boolean>(false);
  const [albumsData, setAlbumsData] = useState<IPhotoObject[]>();
  const [screenWidth, setScreenWidth] = useState<number>(375);
  const [photosData, setPhotosData] = useState<IPhotoObject[]>();
  const [markedAmount, setMarkedAmount] = useState<Map<string, number>>();
  const [unlockIsActive, toggleUnlock] = useState<boolean>(true);

  useEffect(() => {
    try {
      if (!userName) {
        setIsLoading(true);
        navigate("../" + AppUrlsEnum.DET_USER);
      } else if (!userEmail) {
        setIsLoading(true);
        navigate("../" + AppUrlsEnum.DET_EMAIL);
      }
      const getPhotos = async () => {
        setIsLoading(true);

        if (isTokensNeedRefresh(expiresIn || 0)) {
          dispatch(
            setNewTokens(
              await requestHandlerUser.makeTokenRefresh({ refreshToken })
            )
          );
        }
        const photosResponse: IAxiosAlbumsResponse =
          await requestHandler.pageRequest({
            accessToken,
            pageEndpoint: DASHBOARD_URL,
          });

        if (!!photosResponse.message && photosResponse.message.length === 0) {
          navigate("../" + AppUrlsEnum.ALBUMS_EMPTY);
        } else {
          const albumsCovers = await getAlbumsCover(photosResponse.message);

          setAlbumsData(albumsCovers);
          const markedQuantity = getMarkedPhotos(photosResponse.message);
          setMarkedAmount(markedQuantity);
        }
        setIsLoading(false);
        setPhotosData(photosResponse.message);

        setScreenWidth(window.screen.width);
        return photosResponse.message;
      };
      getPhotos();
    } catch (err: unknown) {
      console.error("error", err);
    }
  }, [window.screen.width]);

  return (
    <WrapperPage>
      <Logo />
      <AvatarLink avatar={avatarLink} />
      {navigation.state === "loading" ? <LoadingBlock /> : <></>}
      {isLoading ? <LoadingBlock /> : <></>}
      <WrapperContent>
        <div>
          <Header
            font="14"
            largeFont="16"
            label="Albums"
            left={true}
            top="5"
            largeTop="26"
            bottom="-8"
            largeBottom="-4"
          />
          {albumsData && <Carousel covers={albumsData} album={true} />}
        </div>
        <Header
          font="14"
          largeFont="16"
          label="All photos"
          left={true}
          top="30"
          largeTop="80"
          bottom="-8"
        />
        {photosData ? (
          <PhotosBox>
            {photosData &&
              photosData.map((item, index) => {
                return (
                  <PhotosItem
                    marked={item.marked}
                    key={item.id}
                    id={item.id}
                    albumId={item.album}
                    src={item.path}
                    albumMarked={markedAmount?.get(item.album) || 0}
                  />
                );
              })}
          </PhotosBox>
        ) : (
          <></>
        )}
      </WrapperContent>
      <FrameInvite />
    </WrapperPage>
  );
};

export default Dashboard;
