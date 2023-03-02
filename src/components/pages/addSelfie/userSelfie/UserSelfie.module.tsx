import styled from "styled-components";

export const StyledUserSelfie = styled.div`
  position: relative;
  margin: 22px auto 0px;
  width: 181px;
  height: 181px;

  @media (min-width: 1440px) {
    margin: 0px auto 0px;
  }
`;

export const StyledUserAvatar = styled.div`
  img {
    width: 181px;
    height: 181px;
  }
`;

export const StyledUserBtn = styled.button`
  position: absolute;
  bottom: 1px;
  right: 4px;
  width: 42px;
  height: 42px;
  border: none;
  background-color: white;
  z-index: 2;

  img {
    width: 42px;
    height: 42px;
  }

  &:hover {
    cursor: pointer;
  }

  
`;
