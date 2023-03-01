import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalDiv = styled.div<{
  width: number;
  height: number;
  top: number;
  borderRadius: number;
  widthLarge?: number;
  heightLarge?: number;
  topLarge?: number;
  isAlbum: boolean;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${(props) => props.top + "px"};
  left: calc(50vw - (${(props) => props.width + "px"} / 2));
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  z-index: 6;
  overflow: hidden;
  background-color: transparent;
  border-radius: ${(props) => props.borderRadius + "px"};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  @media (min-width: 1440px) {
    width: ${(props) =>
      !!props.widthLarge ? props.widthLarge + "px" : props.width + "px"};
    height: ${(props) =>
      !!props.heightLarge ? props.heightLarge + "px" : props.height + "px"};
    top: ${(props) =>
      !!props.topLarge ? props.topLarge + "px" : props.top + "px"};
    margin-left: ${(props) => (props.isAlbum ? "-1vw" : "-3vw")};
  }
`;
