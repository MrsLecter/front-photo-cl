import styled from "styled-components";

export const Loading = styled.div`
  box-sizing: border-box;
  position: fixed;
  left: calc(50vw - 150px);
  margin: 0 auto;
  margin-top: 245px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  z-index: 51;
  overflow: hidden;

  img {
    width: 75px;
    height: 75px;
    animation: jumping 2s infinite;
  }

  @keyframes jumping {
    50% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Message = styled.div`
  margin-top: 20px;
  font-family: "Futura";
  font-weight: 500;
  font-size: 18px;
  line-height: 23.08px;
  color: ${({ theme }) => theme.text.main}; ;
`;

export const BackdropBlock = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background-color: white;
  opacity: 0.9;
  overflow: hidden;
`;
