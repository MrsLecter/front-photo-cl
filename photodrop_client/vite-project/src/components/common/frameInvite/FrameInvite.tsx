import { useNavigate } from "react-router-dom";
import {
  StyledFrameInvite,
  StyledFrameHeader,
  StyledFrameLogo,
  StyledDescription,
  StyledBtnFrame,
  StyledFrameQuestions,
  StyledFramedClimat,
  StyledBtnPolicy,
  StyledFramedYear,
  StyledFrameWrapper,
  StyledTwoColumn,
} from "./FrameInvite.styles";
import climateNeutralPNG from "@images/frameology_climateneutral.png";
import frameologyPNG from "../../../assets/images/frameology_logo.png";
import frameologyLogoPNG from "@images/frameology_logo.png";
import { AppUrlsEnum } from "@const";

const FrameInvite: React.FC = () => {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  return (
    <StyledFrameInvite>
      {screenWidth < 1439 ? (
        <StyledFrameWrapper>
          <StyledFrameHeader>
            PhotoDrop is brought to you by
            <StyledFrameLogo src={frameologyPNG} alt="logo" />
          </StyledFrameHeader>
          <StyledDescription>
            Our mission is to help people connect with their memories. If you
            framing some of the photos from your experience, please consider
            using Frameology. It supports the photographers and makes PhotoDrop
            possible.
          </StyledDescription>
          <StyledBtnFrame
            onClick={() => navigate("../" + AppUrlsEnum.FRAMED)}
            type="button"
          >
            Frame a photo
          </StyledBtnFrame>
          <StyledFrameQuestions>
            Questions? Get in touch - hello@photodrop.me
          </StyledFrameQuestions>
          <StyledFramedClimat src={climateNeutralPNG} alt="climate_neutral" />
          <StyledFramedYear>© 2022 FOM Online Inc</StyledFramedYear>

          <StyledBtnPolicy onClick={() => navigate("../" + AppUrlsEnum.POLICY)}>
            Terms
          </StyledBtnPolicy>
          <StyledBtnPolicy onClick={() => navigate("../" + AppUrlsEnum.TERMS)}>
            Privacy Party
          </StyledBtnPolicy>
        </StyledFrameWrapper>
      ) : (
        <StyledTwoColumn>
          <StyledFrameWrapper>
            <StyledFrameHeader>
              PhotoDrop is brought to you by
              <StyledFrameLogo src={frameologyLogoPNG} alt="logo" />
            </StyledFrameHeader>
            <StyledDescription>
              Our mission is to help people connect with their memories. If you
              framing some of the photos from your experience, please consider
              using Frameology. It supports the photographers and makes
              PhotoDrop possible.
            </StyledDescription>
            <StyledBtnFrame
              onClick={() => navigate("../" + AppUrlsEnum.FRAMED)}
              type="button"
            >
              Order photos
            </StyledBtnFrame>
            <StyledFramedYear>© 2022 FOM Online Inc</StyledFramedYear>
          </StyledFrameWrapper>
          <StyledFrameWrapper>
            <StyledFrameQuestions>
              Questions? Get in touch - hello@photodrop.me
            </StyledFrameQuestions>
            <StyledFramedClimat src={climateNeutralPNG} alt="climate_neutral" />
            <StyledBtnPolicy
              onClick={() => navigate("../" + AppUrlsEnum.POLICY)}
            >
              Terms of services
            </StyledBtnPolicy>
            <StyledBtnPolicy
              onClick={() => navigate("../" + AppUrlsEnum.TERMS)}
            >
              Privacy Party
            </StyledBtnPolicy>
          </StyledFrameWrapper>
        </StyledTwoColumn>
      )}
    </StyledFrameInvite>
  );
};

export default FrameInvite;
