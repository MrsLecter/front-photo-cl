import { compile } from "sass";
import styled from "styled-components";

const ButtonSubmit: React.FC<ButtonSubmitProps> = (props) => {
  return (
    <StyledButtonSubmit
      complete={props.completePayment || false}
      payment={!!props.payment ? true : false}
      top={props.top}
      onClick={() => (props.buttonHandler ? props.buttonHandler() : undefined)}
      type="submit"
    >
      {props.label}
    </StyledButtonSubmit>
  );
};

interface ButtonSubmitProps {
  label: string;
  top: string;
  payment?: boolean;
  completePayment?: boolean;
  buttonHandler?: () => void;
}

const StyledButtonSubmit = styled.button<{
  top: string;
  payment: boolean;
  complete: boolean;
}>`
  width: 345px;
  height: 50px;
  margin: ${(props) => props.top + "px"} auto 0px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme, payment }) =>
    payment ? "white" : theme.button.background};
  color: ${({ payment }) => (payment ? "#262626" : "#ffffff")};
  font-family: "Futura";
  font-weight: 600;
  font-size: 18px;
  line-height: 23.08px;

  &:hover {
    cursor: pointer;
    opacity: ${({ payment }) => (payment ? "1" : "0.5")};
    background-color: ${({ payment }) => (payment ? "white" : "#3300cc")};
    color: ${({ payment }) => (payment ? "black" : "white")};
    border: 1px solid ${({ payment }) => (payment ? "white" : "#262626")};
  }

  @media (min-width: 1440px) {
    width: ${(props) => (props.complete ? "350px" : "420px")};
    margin-left: ${(props) => (props.complete ? "30px" : "0px")};
  }
`;

export default ButtonSubmit;
