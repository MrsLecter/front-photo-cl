import styled from "styled-components";

export const StyledPaymentComplete = styled.div`
  width: 345px;
  margin: 0 auto;

  img {
    margin: 0 auto;
    width: 345px;
    height: 200px;
    border-radius: 20px;
    margin-top: 16px;
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    width: 420px;

    img {
      margin-top: 20px;
      margin-bottom: 30px;
      width: 420px;
      height: 250px;
    }
  }
`;

export const StyledPaymentDescription = styled.div`
  width: 345px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 18px;
  line-height: 23.08px;

  p {
    padding-top: 0px;
    padding-bottom: 10px;
    margin: 0px;
  }

  span {
    font-weight: 700;
  }

  @media (min-width: 1440px) {
    width: 420px;
    font-size: 22px;
    line-height: 28.2px;
  }
`;
