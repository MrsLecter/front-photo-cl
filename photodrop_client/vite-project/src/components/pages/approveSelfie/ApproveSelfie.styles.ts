import styled from "styled-components";

export const StyledSelfieWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0px;
  overflow: hidden;
  min-height: 100vh;
  overflow-y: hidden;
`;

export const StyledSelfieContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 290px;
  width: 290px;
  overflow: hidden;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    cursor: grab;
  }

  img {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledApproveSelfie = styled.div`
  position: absolute;
  top: 0px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;

  button {
    margin-top: -15px;
    z-index: 3;
  }
`;

export const StyledSelfieHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-top: 16px;
  height: 13px;
  font-family: "Futura";
  font-weight: 500;
  font-size: 18px;
  line-height: 23.08px;
  text-align: center;
  color: white;
  z-index: 3;
  }
`;

export const StyledSelfieText = styled.div`
  color: white;
  text-align: center;
  margin-top: 94px;
  margin-bottom: 42px;
  width: 100%;
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 20.51px;
  z-index: 3;
`;

export const StyledSelfieAvatar = styled.div`
  margin-top: -8px;
  width: 285px;
  height: 285px;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 99999px rgba(38, 39, 39, 1);
  z-index: 2;

  canvas {
    z-index: 1;
  }
`;

export const StyledSelieFocus = styled.div`
  width: 285px;
  height: 285px;
  background-color: transparent;
  opacity: 0;
  z-index: 55555;
`;

export const StyledSelfieMenu = styled.div`
  width: 345px;
  position: absolute;
  bottom: 109px;
  z-index: 4;

  > div {
    float: left;
  }
`;

export const StyledSelfieButtonPanel = styled.div`
  position: absolute;
  bottom: 60px;
  width: 360px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 3;
`;

export const StyledSelfieBtn = styled.button<{ itFilled: boolean }>`
  border-radius: 58px;
  border: 1px solid #ffffff;
  width: 170px;
  height: 50px;
  font-family: "Futura";
  font-weight: 500;
  font-size: 18px;
  line-height: 23.08px;
  background-color: ${(props) => (props.itFilled ? "#fffefe" : "#262727")};
  color: ${(props) => (props.itFilled ? "#262626" : "white")};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.itFilled ? "#262727" : "white")};
    color: ${(props) => (props.itFilled ? "#fffefe" : "#262626")};
  }
`;
