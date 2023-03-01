import styled from "styled-components";

export const StyledTakeSelfie = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding-top: 50px;
  background-color: black;
`;
export const StyledTakeSelfieImg = styled.div`
  margin: 0px auto;
  width: 100vw;
  height: 60vh;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: 100%;
  }
`;

export const StyledTakeSelfieChoose = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: 0px;
  right: 0px;
  padding: 15px;
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.background.black};

  button {
    background-color: transparent;
    color: white;
    border: none;
  }
`;
