import requestHandler from "@/api/api-requests";
import { AppUrlsEnum } from "@const";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const PhotosBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledPhotosBox>{children}</StyledPhotosBox>;
};

export const PhotosItem: React.FC<PostItemProps> = ({
  src,
  id,
  albumId,
  marked,
  albumName,
  albumMarked,
}) => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<string>("");

  useEffect(() => {
    const getMarkedPhoto = async () => {
      const resp = await requestHandler.photoRequest({ photoEndpoint: src });
      const imgSrc = URL.createObjectURL(resp);
      setPhoto(imgSrc);
    };
    if (!!marked) {
      getMarkedPhoto();
    }
  }, []);

  const handlePhotoView = () => {
    if (!!marked) {
      navigate(
        "../" +
          AppUrlsEnum.PHOTO_VIEW +
          `?photo=${photo}&album=${albumId}&marked=${marked}&markedamount=${albumMarked}&id=${id}`
      );
    } else {
      navigate(
        "../" +
          AppUrlsEnum.PHOTO_VIEW +
          `?photo=${src}&album=${albumId}&marked=${marked}&id=${id}`
      );
    }
  };

  return (
    <>
      {!!marked ? (
        <img
          id={String(id)}
          onClick={() => handlePhotoView()}
          src={photo}
          alt="photoItem.jpg"
        />
      ) : (
        <img
          id={String(id)}
          onClick={() => handlePhotoView()}
          src={src}
          alt="photoItem.jpg"
        />
      )}
    </>
  );
};

interface PostItemProps {
  src: string;
  id: number;
  albumId: string;
  marked?: boolean;
  albumName?: string;
  albumMarked?: number;
}

const StyledPhotosBox = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: flex-start;

  > img {
    width: 125px;
    height: 125px;
    object-fit: contain;
  }

  @media (min-width: 1440px) {
    > img {
      width: 400px;
      height: 400px;
      object-fit: contain;
    }
  }
`;
