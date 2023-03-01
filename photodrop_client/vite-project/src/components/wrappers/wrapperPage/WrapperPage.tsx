import styled from "styled-components";

interface IWrapperPageProps {
  children: React.ReactNode;
}

const StyledWrapperPage = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
`;

const WrapperPage: React.FC<IWrapperPageProps> = ({ children }) => {
  return <StyledWrapperPage>{children}</StyledWrapperPage>;
};

export default WrapperPage;
