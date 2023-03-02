import styled from "styled-components";

export const StyledCarouselHeader = styled.div`
  position: absolute;
  bottom: 14px;
  width: 110px;
  font-family: "Futura";
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: white;
  z-index: 5;
`;

export const StyledCarouselItem = styled.div<{
  album: boolean;
  isAdvertisment: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  object-fit: fill;
  min-width: ${(props) =>
    props.album ? "110px" : props.isAdvertisment ? "168px" : "168px"};
  max-width: ${(props) =>
    props.album ? "110px" : props.isAdvertisment ? "168px" : "168px"};
  height: ${(props) =>
    props.album ? "140px" : props.isAdvertisment ? "216px" : "216px"};
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: transparent;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }

  @media (min-width: 1440px) {
    min-width: ${(props) =>
      props.album ? "200px" : props.isAdvertisment ? "200px" : "168px"};
    max-width: ${(props) =>
      props.album ? "200px" : props.isAdvertisment ? "200px" : "168px"};
    height: ${(props) =>
      props.album ? "258px" : props.isAdvertisment ? "254.55px" : "216px"};
  }
`;

export const StyledCarousel = styled.div<{ album: boolean }>`
  position: relative;
  overflow: hidden;
  padding: 5px;
  margin: ${(props) => (props.album ? "20px auto 0px" : "10px auto 0px")};
`;

export const StyledCarouselContainer = styled.div<{ album: boolean }>`
  padding: ${(props) => (props.album ? "0 6px" : "0 10px")};
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media (min-width: 1440px) {
    padding: ${(props) => (props.album ? "0px 0px" : "0 10px")};
  }
`;

export const StyleCarouselPrev = styled.button`
  border: none;
  width: 10px;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  p {
    font-size: 20px;
    color: ${({ theme }) => theme.text.main};
  }
`;

export const StyleCarouselNext = styled.button`
  border: none;
  width: 10px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  p {
    font-size: 20px;
    color: ${({ theme }) => theme.text.main};
  }
`;
