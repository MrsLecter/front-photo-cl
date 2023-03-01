import styled from "styled-components";

export const StyledPaymentSelect = styled.div`
  position: relative;
  width: 345px;
  height: 120px;
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: "Futura";
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  overflow: hidden;

  input {
    box-sizing: border-box;
    padding: 0px 10px;
    width: 345px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.border.payment};
    outline: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledPaymentArrow = styled.img`
  position: absolute;
  top: 28px;
  right: 15px;
  width: 20px;
  height: 10px;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledPaymentOffersBox = styled.div`
  position: absolute;
  top: 65px;
  padding: 0px;
  box-sizing: border-box;
  width: 345px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid ${({ theme }) => theme.border.payment};
  background-color: white;
  z-index: 5;

  button {
    width: 340px;
    height: 20px;
    margin: 10px 0px;
    background-color: white;
    border: none;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledPaymentDisplay = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0px 10px;
  width: 345px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.border.payment};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledPaymentLabel = styled.label`
  width: 345px;
  padding: 0px 10px;
  text-align: left;
  color: grey;
  margin-bottom: 5px;
`;

export const StyledPaymentInput = styled.div<{ isValid: boolean }>`
  box-sizing: border-box;
  width: 345px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  input {
    position: relative;
    box-sizing: border-box;
    padding: 0px 10px;
    width: 345px;
    height: 40px;
    border: 1px solid
      ${({ theme, isValid }) => (isValid ? theme.border.payment : "red")};
    border-radius: 10px;
    margin-bottom: 20px;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledCardNumberImages = styled.div`
  position: absolute;
  top: 35px;
  right: 1077px;
  width: 20px;
  height: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;

  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
`;

export const StyledCardImage = styled.img`
  position: absolute;
  top: 70px;
  right: 10px;
  width: 25px;
  height: 25px;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledPaymentCardDetails = styled.div<{
  isValidNumber: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  width: 345px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  input {
    box-sizing: border-box;
    padding: 0px 10px;
    height: 40px;
    margin-bottom: 20px;
    width: 345px;
  }

  input:nth-child(1) {
    border: 1px solid
      ${({ theme, isValidNumber }) =>
        isValidNumber ? theme.border.payment : "red"};
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledInputNumber = styled.input`
  border: 1px solid ${({ theme }) => theme.border.payment};
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const StyledPaymentDetails = styled.div<{
  isValidExpire: boolean;
  isValidCvc: boolean;
}>`
  width: 345px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & input:nth-child(1) {
    margin-top: -20px;
    border: 1px solid
      ${({ theme, isValidExpire }) =>
        isValidExpire ? theme.border.payment : "red"};
    border-bottom-left-radius: 10px;
  }

  & input:nth-child(2) {
    margin-top: -20px;
    border: 1px solid
      ${({ theme, isValidCvc }) => (isValidCvc ? theme.border.payment : "red")};
    border-bottom-right-radius: 10px;
  }
`;
