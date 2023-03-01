import styled from "styled-components";

export const StyledShareMenu = styled.div`
  position: absolute;
  top: 208px;
  left: calc(50vw - 187.5px);
  box-sizing: border-box;
  width: 375px;
  height: 120px;
  background-color: #f5f4f5;
  border-radius: 9px;
`;

export const StyledShareMenuHeader = styled.div`
  padding: 7px 10px 7px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dad8d9;
`;

export const StyledShareHeaderIcon = styled.img`
  width: 37px;
  height: 49px;
  object-fit: contain;
`;

export const StyledShareHeaderContent = styled.div`
  font-family: Helvetica, sans-serif;
  font-weight: 400;

  > div:nth-child(1) {
    font-size: 14px;
    line-height: 16.1px;
    color: black;
  }
  
  > div:nth-child(2) {
    font-size: 11px;
    line-height: 12.65px;
    color: #9c9ba1;
  }
`;

export const StyledShareSocial = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  > a {
    width: 50px;
    height: 50px;
  }
`;

// export const StyledShareSocialIcon = styled.

//   &__socialIcon {
//     width: 50px;
//     height: 50px;
//   }

export const StyledShareClose = styled.button`
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;

export const StyledShareCloseIcon = styled.img`
  width: 35px;
  height: 35px;
`;
