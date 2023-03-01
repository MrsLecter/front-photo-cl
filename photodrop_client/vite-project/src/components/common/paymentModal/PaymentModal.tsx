import ButtonClose from "@common/buttons/ButtonClose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import applePayPNG from "@images/payment__applePay.png";
import payPalPNG from "@images/payment_paypal.png";
import {
  StyledPaymentModal,
  StyledPaymentHeader,
  StyledPricePhoto,
  StyledPricePhotoRow,
  StyledButtonBox,
  StyledPayBtn,
  StyledAlbumRow,
} from "./PaymentModal.styles";
import { AppUrlsEnum } from "@const";

interface IPaymentInfo {
  pricePhoto: number;
  priceAlbum: number;
  markedPhoto: number;
  albumName: string;
  isAlbum: boolean;
  photoId?: number;
}

export const PaymentModal: React.FC<IPaymentInfo> = ({
  pricePhoto,
  priceAlbum,
  markedPhoto,
  albumName,
  isAlbum,
  photoId,
}) => {
  const navigate = useNavigate();
  const [photoChecked, togglePhotoChecked] = useState<boolean>(false);
  const [albumChecked, toggleAlbumChecked] = useState<boolean>(false);

  const handlePaymentClick = () => {
    if (isAlbum) {
      navigate(
        "../" +
          AppUrlsEnum.PAYMENT +
          `?type=album&price=${priceAlbum}&name=${albumName}`
      );
    }
    if (!isAlbum && albumChecked) {
      navigate(
        "../" +
          AppUrlsEnum.PAYMENT +
          `?type=album&price=${priceAlbum}&name=${albumName}`
      );
    }
    if (!isAlbum && photoChecked) {
      navigate(
        "../" +
          AppUrlsEnum.PAYMENT +
          `?type=photo&price=${pricePhoto}&id=${photoId}`
      );
    }
    if (!isAlbum && !albumChecked && !photoChecked) {
      alert("Select a payment option!");
    }
  };

  const toggleAlbumRadio = () => {
    togglePhotoChecked(false);
    toggleAlbumChecked(true);
  };

  const togglePhotoRadio = () => {
    togglePhotoChecked(true);
    toggleAlbumChecked(false);
  };

  return (
    <StyledPaymentModal>
      <StyledPaymentHeader isAlbum={isAlbum}>
        <ButtonClose color="black" />
        <span>Unlock your photos</span>
      </StyledPaymentHeader>
      <StyledPricePhoto isAlbum={isAlbum}>
        {isAlbum && (
          <StyledAlbumRow>
            <div>
              Get all the photos from <b>{albumName}</b> in hi-resolution with
              no watermark.
            </div>
            <div>${priceAlbum}</div>
          </StyledAlbumRow>
        )}
        {isAlbum ? (
          <></>
        ) : (
          "Download, view and share your photos in hi-resolution with no watermark."
        )}
        {isAlbum ? (
          <></>
        ) : (
          <StyledPricePhotoRow>
            <label>
              <input
                type="radio"
                name="radio"
                onChange={() => togglePhotoRadio()}
              />
              <span></span>
              <div>
                Current Photo <div>${pricePhoto}</div>
              </div>
            </label>
          </StyledPricePhotoRow>
        )}
        {isAlbum ? (
          <></>
        ) : (
          <StyledPricePhotoRow>
            <label>
              <input
                type="radio"
                name="radio"
                onChange={() => toggleAlbumRadio()}
              />
              <span></span>
              <div>
                All {markedPhoto} photos from {albumName}
                <div>${priceAlbum}</div>
              </div>
            </label>
          </StyledPricePhotoRow>
        )}
      </StyledPricePhoto>
      <StyledButtonBox isAlbum={isAlbum}>
        <StyledPayBtn payment="apple" onClick={handlePaymentClick}>
          <img src={applePayPNG} alt="pay.png" />
        </StyledPayBtn>
        <StyledPayBtn payment="checkout" onClick={handlePaymentClick}>
          Checkout
        </StyledPayBtn>
        <StyledPayBtn payment="paypal" onClick={handlePaymentClick}>
          <img src={payPalPNG} alt="payPal.png" />
        </StyledPayBtn>
      </StyledButtonBox>
    </StyledPaymentModal>
  );
};
