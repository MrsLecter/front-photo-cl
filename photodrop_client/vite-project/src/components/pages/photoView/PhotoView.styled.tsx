import styled from "styled-components";

export const StyledPhotoView = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledPhoto = styled.div`
  margin: 72px auto 0px;
  width: 345px;
  height: 461px;
  display: flex;
  jusify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
