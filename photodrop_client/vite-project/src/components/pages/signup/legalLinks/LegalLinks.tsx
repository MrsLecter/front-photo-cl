import { AppUrlsEnum } from "@const";
import styled from "styled-components";

const LegalLinks: React.FC = () => {
  return (
    <StyledLegalWrapper>
      <StyledLegalLinks>
        <StyledLinksTop>
          By proceeding, you consent to get WhatsApp or SMS messages, from
          PhotoDrop and its affiliates to the number provided. Text “STOP” to
          89203 to opt out.
        </StyledLinksTop>
        <div>
          By continuing, you indicate that you have read and agree to our
          <a href={"../" + AppUrlsEnum.TERMS}>Terms of Use</a> &
          <a href={"../" + AppUrlsEnum.POLICY}>Privacy Policy</a>
        </div>
      </StyledLegalLinks>
    </StyledLegalWrapper>
  );
};

const StyledLegalWrapper = styled.div`
  margin: 0 auto;

  @media (min-width: 1440px) {
    margin-left: -40px;
  }
`;

const StyledLegalLinks = styled.div`
  position: sticky;
  width: 340px;
  bottom: 0px;
  margin: 18px auto 20px;
  text-align: start;
  font-family: "Futura";
  font-weight: 400;
  font-size: 14px;
  line-height: 17.95px;
  color: ${({ theme }) => theme.text.second};

  a:active {
    color: ${({ theme }) => theme.text.second};
  }

  a:hover {
    color: ${({ theme }) => theme.text.main};
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 20.51px;
    width: 450px;
    margin-left: calc(50vw - 170px);

    & > div:nth-child(2) {
      display: none;
    }
  }
`;

const StyledLinksTop = styled.div`
  height: 46px;
  margin-bottom: 38px;
`;

export default LegalLinks;
