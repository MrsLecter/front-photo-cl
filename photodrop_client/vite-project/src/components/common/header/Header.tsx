import { Property } from "csstype";
import styled from "styled-components";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader
      font={props.font}
      largeFont={props.largeFont}
      top={props.top}
      bottom={props.bottom}
      largeBottom={props.largeBottom}
      leftAlign={!!props.left}
      largeTop={props.largeTop}
    >
      {props.label}
      <span>{props.span}</span>
    </StyledHeader>
  );
};

interface HeaderProps {
  label: string;
  font: string;
  largeFont: string;
  textAlign?: Property.TextAlign | undefined;
  span?: string;
  top?: string;
  bottom: string;
  left?: boolean;
  largeTop: string;
  largeBottom?: string;
}

const StyledHeader = styled.div<{
  bottom: string;
  font: string;
  largeFont: string;
  top?: string;
  leftAlign: boolean;
  largeTop?: string;
  largeBottom?: string;
}>`
  margin-top: ${(props) => (props.top ? props.top + "px" : "20px")};
  margin-bottom: ${(props) => (props.bottom ? props.bottom + "px" : "0px")};
  width: 100vw;
  height: 27px;
  font-family: "Termina";
  font-weight: 700;
  font-size: ${(props) => (props.font ? props.font + "px" : "12px")};
  line-height: 26.4px;
  text-align: ${(props) => (props.leftAlign ? "left" : "center")};
  color: ${({ theme }) => theme.text.main};
  padding: 0px 15px;

  span {
    font-family: "Futura";
  }

  @media (min-width: 1440px) {
    margin-top: ${(props) => (props.largeTop ? props.largeTop + "px" : "20px")};
    font-size: ${(props) =>
      props.largeFont ? props.largeFont + "px" : "14px"};
    line-height: 36px;
    margin-bottom: ${(props) =>
      props.largeBottom ? props.largeBottom + "px" : "30px"};
    text-align: ${(props) => (props.leftAlign ? "left" : "center")};
  }
`;

export default Header;
