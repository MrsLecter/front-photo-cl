import { IPhotoObject } from "@/components/types/commonTypes";
import { AppUrlsEnum } from "@const";
import { useNavigate } from "react-router-dom";
import {
  StyledCarousel,
  StyleCarouselPrev,
  StyleCarouselNext,
  StyledCarouselContainer,
  StyledCarouselHeader,
  StyledCarouselItem,
} from "./Carousel.types";

export const Carousel: React.FC<CarouselProps> = ({
  covers,
  album,
  isAdvertisment,
}) => {
  const prevHandler = () => {
    let carousel = document.getElementById("carousel");

    if (carousel) {
      let width = carousel.clientWidth;
      carousel.scrollLeft = carousel.scrollLeft - width / 2;
    }
  };

  const nextHandler = () => {
    let carousel = document.getElementById("carousel");

    if (carousel) {
      let width = carousel.clientWidth;
      carousel.scrollLeft = carousel.scrollLeft + width / 2;
    }
  };

  return (
    <StyledCarousel album>
      <StyleCarouselPrev onClick={prevHandler}>
        <p>&lt;</p>
      </StyleCarouselPrev>
      <StyleCarouselNext onClick={nextHandler}>
        <p>&gt;</p>
      </StyleCarouselNext>

      <StyledCarouselContainer id="carousel" album>
        {covers &&
          covers.map((item) => {
            return (
              <CarouselItem
                isAdvertisment={isAdvertisment ? true : false}
                name={item.album}
                key={item.id}
                album={album ? true : false}
                src={item.path}
              >
                <img src={item.path} alt="albumCover" />
                {album ? (
                  <StyledCarouselHeader>{item.album}</StyledCarouselHeader>
                ) : (
                  <></>
                )}
              </CarouselItem>
            );
          })}
      </StyledCarouselContainer>
    </StyledCarousel>
  );
};

interface CarouselProps {
  covers: IPhotoObject[];
  album?: boolean;
  isAdvertisment?: boolean;
}

export const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const navigation = useNavigate();
  return (
    <StyledCarouselItem
      isAdvertisment={props.isAdvertisment ? true : false}
      album={props.album ? true : false}
      onClick={() => {
        if (!!props.isAdvertisment) {
          navigation("../" + AppUrlsEnum.PHOTO_VIEW + `?photo=${props.src}`);
        } else {
          navigation("../" + AppUrlsEnum.ALBUM_VIEW + `/${props.name}`);
        }
      }}
    >
      {props.children}
    </StyledCarouselItem>
  );
};

interface CarouselItemProps {
  children: React.ReactNode;
  name: string;
  album: boolean;
  isAdvertisment?: boolean;
  src?: string;
}
