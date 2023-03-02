import styled from "styled-components";

interface IWrapperContentProps {
  children: React.ReactNode;
}

const StyledContentPage = styled.div`
  box-sizing: border-box;
  width: 100vw;
  margin: 0 auto;
  overflow-x: hidden;

  @media (min-width: 1440px) {
    padding-left: 120px;
    padding-right: 120px;
  }
`;

const WrapperContent: React.FC<IWrapperContentProps> = ({ children }) => {
  return <StyledContentPage>{children}</StyledContentPage>;
};

export default WrapperContent;
