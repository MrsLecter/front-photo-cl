import {
  convertDataFormat,
  ejectAlbumInfo,
  isTokensNeedRefresh,
} from "@/components/helpers/functions";
import { IAlbumInfo, IPhotoObject } from "@/components/types/commonTypes";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import { DASHBOARD_URL, GET_ACTUAL_PRICE_URL } from "@const";
import ButtonBack from "@common/buttons/ButtonBack";
import { PhotosBox, PhotosItem } from "@common/photosBox/PhotosBox";
import { PaymentModal } from "@common/paymentModal/PaymentModal";
import {
  StyledAlbumView,
  StyledAlbumHeader,
  StyledAlbumContent,
  StyledAlbumDescription,
  StyledAlbumButton,
} from "./AlbumView.styled";
import requestHandler from "@/api/api-requests";
import { ButtonSetting } from "../userProfile/settingList/SettingList";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import WrapperModal from "@wrappers/wrapperModal/WrapperModal";
import FrameInvite from "@common/frameInvite/FrameInvite";
import LoadingBlock from "@common/loadingBlock/LoadingBlock";
import { userSlice } from "@/components/store/reducers/userSlice";

const AlbumView: React.FC = () => {
  const navigation = useNavigation();
  let { albumName } = useParams();
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const { accessToken, photoPrice, expiresIn, refreshToken } = useAppSelector(
    (store) => store.userReducer
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [photosData, setPhotosData] = useState<IPhotoObject[]>();
  const [albumInfo, setAlbumInfo] = useState<IAlbumInfo>();
  const [isActiveModal, toggleIsActiveModal] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const checkToken = async () => {
      if (isTokensNeedRefresh(expiresIn || 0)) {
        dispatch(
          setNewTokens(await requestHandler.makeTokenRefresh({ refreshToken }))
        );
      }
    };
    checkToken();
    const getPhotosData = async () => {
      const photos = await requestHandler.pageRequest({
        accessToken,
        pageEndpoint: DASHBOARD_URL + `/${albumName}`,
      });
      setPhotosData(photos.message);
      const albumsInfo = ejectAlbumInfo(photos.message);
      setAlbumInfo(albumsInfo);
    };
    getPhotosData();
    setIsLoading(false);
  }, []);

  return (
    <WrapperPage>
      {isLoading ? <LoadingBlock /> : <></>}
      {navigation.state === "loading" ? <LoadingBlock /> : <></>}
      <StyledAlbumView>
        <StyledAlbumHeader>
          <ButtonBack height="small" />
          <StyledAlbumContent>
            <div>{albumInfo?.albumName}</div>
            <StyledAlbumDescription>
              {convertDataFormat(albumInfo?.albumDate || "")} &bull;
              <span>{albumInfo?.photoAmount} photos</span>
            </StyledAlbumDescription>
          </StyledAlbumContent>
        </StyledAlbumHeader>
        <PhotosBox>
          {photosData ? (
            photosData.map((item) => (
              <PhotosItem
                key={item.id}
                id={item.id}
                src={item.path}
                albumId={item.album}
                marked={item.marked}
                albumMarked={albumInfo?.marketCount}
              />
            ))
          ) : (
            <></>
          )}
        </PhotosBox>
        <StyledAlbumButton>
          {albumInfo && albumInfo?.hasMarked ? (
            <ButtonSubmit
              label="Unlock your photos"
              top="0"
              buttonHandler={() => toggleIsActiveModal(true)}
            />
          ) : (
            <></>
          )}
        </StyledAlbumButton>
        {!isActiveModal && <FrameInvite />}
        {isActiveModal && albumInfo && albumInfo.marketCount > 0 ? (
          <WrapperModal
            width={375}
            height={350}
            borderRadius={20}
            top={230}
            widthLarge={480}
            heightLarge={257}
            topLarge={230}
            isAlbum={true}
            backClickHandler={() => toggleIsActiveModal(false)}
          >
            <PaymentModal
              isAlbum={true}
              priceAlbum={
                albumInfo && photoPrice ? photoPrice * albumInfo.marketCount : 0
              }
              pricePhoto={0}
              albumName={albumInfo ? albumInfo.albumName : "notAssigned"}
              markedPhoto={albumInfo ? albumInfo.marketCount : 0}
            />
          </WrapperModal>
        ) : (
          <></>
        )}
      </StyledAlbumView>
    </WrapperPage>
  );
};

export default AlbumView;
