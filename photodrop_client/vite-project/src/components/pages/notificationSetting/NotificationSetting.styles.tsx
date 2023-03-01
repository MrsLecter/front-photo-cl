import styled from "styled-components";

export const StyledNotificationContent = styled.div`
  margin-top: 0px;

  form > div:nth-child(4) {
    margin-top: -4px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
`;
