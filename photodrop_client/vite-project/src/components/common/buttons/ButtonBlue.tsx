import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonBlue: React.FC<ButtonBlueProps> = ({
  width,
  largeWidth,
  way,
  label,
  handleClick,
}) => {
  const navigate = useNavigate();

  return (
    <StyledButtonBlue
      width={width}
      largeWidth={largeWidth}
      type="button"
      onClick={way ? () => navigate(way || "../") : () => handleClick}
    >
      {label}
    </StyledButtonBlue>
  );
};

interface ButtonBlueProps {
  width: string;
  largeWidth: string;
  way?: string;
  label: string;
  handleClick?: () => void;
}

const StyledButtonBlue = styled.button<{ width: string; largeWidth: string }>`
  width: ${(props) => props.width + "px"};
  height: 50px;
  border-radius: 50px;
  font-family: "Futura";
  font-weight: 500;
  font-size: 22px;
  line-height: 26.2px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.button.background};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.button.background_hovered_blue};
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.largeWidth + "px"};
  }
`;

export default ButtonBlue;
