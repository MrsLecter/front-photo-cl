import styled from "styled-components";
import logoInfoSVG from "@images/logo-info.svg";

const LogoInfo = () => {
  return (
    <StyledLogoInfo>
      <img src={logoInfoSVG} alt="logoInfo.svg" />
    </StyledLogoInfo>
  );
};

const StyledLogoInfo = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 75px;
  margin-top: 5.33vw;
  margin-bottom: 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  img {
    width: 81.8px;
    height: 75px;
  }
`;

export default LogoInfo;
