import ButtonClose from "@common/buttons/ButtonClose";
import { PaymentModal } from "@common/paymentModal/PaymentModal";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import DownloadMenu from "./downloadMenu/DownloadMenu";
import PhotoPanel from "./photoPanel/PhotoPanel";
import ShareMenu from "./shareMenu/ShareMenu";
import { StyledPhotoView, StyledPhoto } from "./PhotoView.styled";
import photo from "@images/example_album_01_ph01.png";
import requestHandler from "@/api/api-requests";
import ButtonSubmit from "@common/buttons/ButtonSubmit";
import { Loading } from "@common/loadingBlock/LoadingBlock.styles";
import LoadingBlock from "@common/loadingBlock/LoadingBlock";
import WrapperModal from "@wrappers/wrapperModal/WrapperModal";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { userSlice } from "@/components/store/reducers/userSlice";
import { isTokensNeedRefresh } from "@/components/helpers/functions";

const PhotoView: React.FC = () => {
  const [params] = useSearchParams();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const photoURL = params.get("photo") || "1";
  const photoID = params.get("id") || "0";
  const photoAlbum = params.get("album") || "none";
  const photoMarked = params.get("marked") || "false";
  const markedAmount = params.get("markedamount") || "0";
  const [isDownloadMenuActive, seIsDownloadMenuActive] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const { photoPrice, refreshToken, expiresIn } = useAppSelector(
    (store) => store.userReducer
  );
  const [isShareActive, setisShareActive] = useState<boolean>(false);
  const [isPaymentActive, togglePaymentActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const toggleDownloadMenu = () => {
    seIsDownloadMenuActive(!isDownloadMenuActive);
    setisShareActive(false);
  };

  const toggleShareMenu = () => {
    setisShareActive(!isShareActive);
    seIsDownloadMenuActive(false);
  };
  return (
    <StyledPhotoView>
      {isLoading ? <LoadingBlock /> : <></>}
      {navigation.state === "loading" ? <LoadingBlock /> : <></>}
      <ButtonClose color={"white"} />

      <StyledPhoto>
        <img src={photoURL} alt="userPhoto.jpg" />
      </StyledPhoto>
      {isDownloadMenuActive && <DownloadMenu />}
      {isShareActive && <ShareMenu closeMenu={setisShareActive} />}
      {photoMarked === "true" ? (
        <ButtonSubmit
          payment={true}
          label="Unlock photo"
          top="-10"
          buttonHandler={() => togglePaymentActive(true)}
        />
      ) : (
        <PhotoPanel
          photoUrl={photoURL}
          toggleDownloadMenu={toggleDownloadMenu}
          toggleShareMenu={toggleShareMenu}
        />
      )}
      {photoMarked === "true" && isPaymentActive ? (
        <WrapperModal
          top={50}
          width={375}
          height={344}
          widthLarge={480}
          heightLarge={327}
          borderRadius={20}
          isAlbum={false}
          backClickHandler={() => togglePaymentActive(false)}
        >
          <PaymentModal
            photoId={+photoID}
            isAlbum={false}
            priceAlbum={+markedAmount * +photoPrice}
            pricePhoto={+photoPrice}
            markedPhoto={+markedAmount}
            albumName={photoAlbum}
          />
        </WrapperModal>
      ) : (
        <></>
      )}
    </StyledPhotoView>
  );
};

export default PhotoView;
