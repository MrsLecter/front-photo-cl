import styled, { css } from "styled-components";

export const StyledPaymentModal = styled.div`
  background-color: white;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 15px;
  width: 375px;
  height: 350px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @media (min-width: 1440px) {
    width: 480px;
    height: 327px;
    border-radius: 20px;
    align-items: center;
    margin: 0px;
  }
`;

export const StyledPaymentHeader = styled.div<{ isAlbum: boolean }>`
  width: 375px;
  height: ${(props) => (props.isAlbum ? "30px" : "344px")};
  display: flex;
  flex-direction: row;
  font-family: "Termina";
  font-weight: 600;
  font-size: 18px;
  line-height: 21.6px;
  color: ${({ theme }) => theme.text.main};
  margin-bottom: ${(props) => (props.isAlbum ? "0px" : "10px")};

  button {
    margin: 0px;
    margin-top: -3px;
    margin-left: -7px;
    margin-right: 40px;
  }

  img {
    width: 15px;
    height: 15px;
  }

  @media (min-width: 1440px) {
    margin-top: -4px;
    width: 440px;
    font-weight: 700;
    font-size: 22px;
    line-height: 26.4px;

    button {
      margin-left: 20px;
    }

    span {
      margin-left: 90px;
    }
  }
`;

export const StyledPaymentAlbum = styled.div`
  width: 345px;
  height: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "Futura";
  font-size: 16px;
  font-weight: 400;
  line-height: 20.51px;
  color: ${({ theme }) => theme.text.main};

  div:nth-child(1) {
    width: 310px;

    span {
      font-weight: 700;
    }
  }

  div:nth-child(2) {
    width: 20px;
    font-weight: 500;
  }
`;

export const StyledButtonBox = styled.div<{ isAlbum: boolean }>`
  margin-top: ${(props) => (props.isAlbum ? "35px" : "6px")};
  width: 345px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1440px) {
    width: 440px;
  }
`;

export const StyledPayBtn = styled.button<{ payment: string }>`
  height: 50px;
  border-radius: 50px;
  font-family: "Futura";
  font-weight: 500;
  font-size: 22px;
  line-height: 26.2px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.payment === "checkout" &&
    css`
      margin-bottom: 15px;
      width: 168px;
      color: white;
      background-color: ${({ theme }) => theme.button.background};

      &:hover {
        opacity: 0.8;
        background-color: ${({ theme }) => theme.button.background};
        cursor: pointer;
      }

      @media (min-width: 1440px) {
        width: 214px;
      }
    `};

  ${(props) =>
    props.payment === "apple" &&
    css`
      margin-bottom: 15px;
      width: 345px;
      background-color: black;

      img {
        width: 66px;
        height: 28px;
      }

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }

      @media (min-width: 1440px) {
        width: 440px;
      }
    `};

  ${(props) =>
    props.payment === "paypal" &&
    css`
      width: 167px;
      background-color: ${({ theme }) => theme.button.background_yellow};

      img {
        width: 116px;
        height: 29px;
      }

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) =>
          theme.button.background_yellow_hovered};
      }

      @media (min-width: 1440px) {
        width: 215px;
      }
    `}
`;

export const StyledPricePhoto = styled.div<{ isAlbum: boolean }>`
  height: ${(props) => (props.isAlbum ? "36px" : "110px")};
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 20.51px;
  color: ${({ theme }) => theme.text.main};
  margin-bottom: ${(props) => (props.isAlbum ? "0px" : "20px")};

  & > div {
    margin-top: ${(props) => (props.isAlbum ? "5px" : "14px")};
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 23.08px;
  }
`;

export const StyledPricePhotoRow = styled.div`
  position: relative;
  width: 345px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: "Futura";
  font-size: 16px;
  font-weight: 500;
  line-height: 20.51px;
  color: ${({ theme }) => theme.text.main};
  margin-bottom: 20px;

  label {
    width: 345px;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: 1px;

    span {
      margin-top: 3px;
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;

      &:hover {
        border: 2px solid ${({ theme }) => theme.button.background};
      }

      &:before {
        flex-shrink: 0;
        content: "";
        background-color: #fff;
        width: 9px;
        height: 9px;
        margin-left: 1.5px;
        border-radius: 50%;
        margin-right: 12px;
      }
    }
  }

  input {
    position: absolute;
    left: -9999px;

    &:checked + span {
      background-color: white;
      border: 2px solid ${({ theme }) => theme.button.background};
      color: ${({ theme }) => theme.button.background};

      &:before {
        box-shadow: inset 0 0 0 11.67px
          ${({ theme }) => theme.button.background};
      }
    }

    &:checked ~ div {
      color: ${({ theme }) => theme.button.background};
    }
  }
  div:nth-child(3) {
    width: 307px;
    margin-left: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  span {
    position: absolute;
    top: -1px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.text.second};
    border-radius: 50%;
  }

  &::nth-child(1) {
    margin-top: 10px;
  }

  &:hover {
    color: ${({ theme }) => theme.button.background};
  }

  @media (min-width: 1440px) {
    width: 439px;
    font-size: 18px;
    line-height: 23.08px;

    label {
      width: 439px;
    }

    div:nth-child(3) {
      width: 400px;
      margin-left: 28px;
    }
  }
`;

export const StyledAlbumRow = styled.div`
  position: relative;
  width: 345px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-family: "Futura";
  font-size: 16px;
  font-weight: 500;
  line-height: 20.51px;
  color: ${({ theme }) => theme.text.main};
  margin-bottom: 20px;

  > div:nth-child(1) {
    width: 310px;
  }

  > div:nth-child(2) {
    width: 20px;
  }

  @media (min-width: 1440px) {
    width: 439px;
    font-size: 18px;
    line-height: 23.08px;
  }
`;
