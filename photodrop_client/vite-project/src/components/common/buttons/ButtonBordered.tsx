import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonBordered: React.FC<ButtonBorderedProps> = ({
  label,
  width,
  way,
}) => {
  const navigation = useNavigate();

  return (
    <StyledButtonBordered
      onClick={() => navigation(way)}
      type="button"
      style={{ width: width + "px" }}
    >
      {label}
    </StyledButtonBordered>
  );
};

interface ButtonBorderedProps {
  label: string;
  width: number;
  way: string;
}

const StyledButtonBordered = styled.button`
  height: 50px;
  background-color: ${({ theme }) => theme.background.grey};
  border: 1px solid white;
  border-radius: 50px;
  color: white;
  font-family: "Futura";
  font-weight: 500;
  font-size: 18px;
  line-height: 23.08px;

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.text.main};
  }
`;

export default ButtonBordered;
