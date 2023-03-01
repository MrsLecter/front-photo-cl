import styled from "styled-components";

export const SignupFormWrapper = styled.div`
  @media (min-width: 1440px) {
    width: 420px;
    margin-left: calc(50vw - 245px);
  }
`;

export const StyledSignup = styled.div`
  width: 345px;
  height: 40px;
  margin: 19px auto 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    width: 420px;

    form {
      margin-left: -40px;
      background-color: red;
    }
  }
`;
