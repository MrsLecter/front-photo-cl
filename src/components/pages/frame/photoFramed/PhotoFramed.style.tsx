import styled from "styled-components";

export const StyledPhotoFramed = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  top: 20px;
  left: calc(50vw - 142px);
  z-index: 2;
  width: 284px;
  background-color: #f7f6f4;
  box-shadow: 5px 5px 5px grey;
  overflow: hidden;
`;

export const StyledPhotoContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

export const StyledPhotoShadow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 231px;
  border-right: 3px solid grey;
  border-bottom: 3px solid grey;
`;
