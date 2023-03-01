import styled from "styled-components";

export const StyledFrameInvite = styled.div`
  position: sticky;
  top: 98vh;
  bottom: 0;
  width: 100%;
  height: 5px;
  z-index: 10;
  transition: 0.2s;
  overflow: hidden;
  box-sizing: border-box;
  padding: 60px 15px 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 20.51px;
  color: white;
  background-color: #262727;
  margin-top: 5px;

  &:hover {
    margin-top: 10px;
    height: 662px;
  }

  @media (min-width: 1440px) {
    position: sticky;
    margin-top: 10px;
    bottom: 0;
    height: 5px;

    &:hover {
      margin-top: 10px;
      bottom: 0px;
      height: 423px;
    }
  }
`;

export const StyledFrameHeader = styled.div`
  width: 345px;
  margin-bottom: 23px;
  font-family: "Termina";
  font-weight: 700;
  font-size: 17px;
  line-height: 21.6px;

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 26.4px;
  }
`;

export const StyledFrameLogo = styled.img`
  display: block;
  width: 150px;
  height: 24.41px;
  margin-top: 15px;

  @media (min-width: 1440px) {
    margin-top: 19px;
    margin-bottom: 20.9px;
    width: 185px;
    height: 30.1px;
  }
`;

export const StyledDescription = styled.div`
  margin-bottom: 39px;
  width: 346px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 20.51px;

  @media (min-width: 1440px) {
    width: 400px;
    font-size: 18px;
    line-height: 23.08px;
  }
`;

export const StyledBtnFrame = styled.button`
  width: 345px;
  height: 50px;
  border-radius: 50px;
  background-color: #262727;
  border: 1px solid white;
  color: white;
  font-family: "Futura";
  font-weight: 500;
  font-size: 18px;
  line-height: 23.08px;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #262727;
  }

  @media (min-width: 1440px) {
    width: 300px;
    font-size: 22px;
    line-height: 22px;
  }
`;

export const StyledFrameQuestions = styled.div`
  margin-top: 60px;
  margin-bottom: 30px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  @media (min-width: 1440px) {
    margin-top: 0px;
    font-size: 18px;
    line-height: 23.08px;
  }
`;

export const StyledFramedClimat = styled.img`
  width: 100px;
  height: 40px;

  @media (min-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
export const StyledFramedYear = styled.div`
  margin-top: 30px;
  margin-bottom: 19px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  @media (min-width: 1440px) {
    margin-top: 60px;
    font-size: 18px;
    line-height: 36px;
  }
`;

export const StyledBtnPolicy = styled.button`
  padding-left: 0px;
  border: none;
  background-color: transparent;
  color: white;
  width: 100px;
  margin: 20px auto 0px;
  text-align: start;
  margin-left: 0px;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1440px) {
    width: 100%;
    margin: 0px 0px 20px;
  }
`;

export const StyledFrameWrapper = styled.div`
  width: 400px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    padding-left: 30px;
    padding-right: 30px;
    float: left;
    display: inline;
    width: 430px;
  }
`;

export const StyledTwoColumn = styled.div`
  width: 860px;
  margin: 0 auto;
`;
