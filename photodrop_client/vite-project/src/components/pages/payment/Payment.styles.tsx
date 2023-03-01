import styled from "styled-components";

export const StyledPayment = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 375px;
  height: 100vh;
  font-family: "Futura";
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  button:nth-child(1) {
    position: absolute;
    top: 4px;
    left: 0px;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const StyledPaymentBtn = styled.button`
  width: 345px;
  height: 50px;
  position: absolute;
  bottom: 0px;
  left: 15px;
  background-color: #343245;
  border: none;
  color: #afacb5;
  border-radius: 10px;
`;

export const StyledEmailSvg = styled.img`
  width: 30px;
  height: 25px;
  position: absolute;
  top: 72px;
  right: 25px;
  z-index: 2;
`;
