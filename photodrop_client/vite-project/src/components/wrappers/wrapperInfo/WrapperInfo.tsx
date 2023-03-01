import styled from "styled-components";

interface IWrapperInfoProps {
  children: React.ReactNode;
}

const StyledWrapperInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  margin: 0px;
  text-align: justify;
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 20.51px;
  color: ${({ theme }) => theme.text.main};
  overflow: hidden;

  h4 {
    font-weight: 700;
  }

  b {
    font-weight: 700;
  }

  div {
    margin: 20px 0px 16px;
    text-align: center;
    font-family: "Termina";
    font-weight: 700;
    font-size: 18px;
    line-height: 21.6px;
  }
`;

const WrapperInfo: React.FC<IWrapperInfoProps> = ({ children }) => {
  return <StyledWrapperInfo>{children}</StyledWrapperInfo>;
};

export default WrapperInfo;
