import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: ${({ theme }) => theme.button.background};
`;

export const HomePage = styled.div`
  width: 300px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

export const HomePageHeader = styled.div`
  width: 300px;
  font-family: "Termina";
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
`;

export const HomePageLogo = styled.div`
  width: 121px;
  height: 60px;
  margin: 87px auto 40px;

  img {
    width: 121px;
    height: 60px;
  }
`;

export const HomePageBtnList = styled.ul`
  width: 300px;
  margin-top: 20px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  list-style-type: none;
`;

export const HomePageGreeting = styled.div`
  width: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Futura";
  font-size: 22px;
  font-weight: 500;

  a {
    color: white;
  }
`;
