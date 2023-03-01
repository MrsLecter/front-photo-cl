import styled from "styled-components";
import closeSVG from "@images/close.svg";
import closeBlackSVG from "@images/close-black.svg";
import { useNavigate } from "react-router-dom";

const ButtonClose: React.FC<{ color: string }> = ({ color }) => {
  const navigate = useNavigate();
  const closeModalHandler = () => {
    navigate(-1);
  };
  return (
    <StyledButtonClose
      onClick={closeModalHandler}
      type="button"
      btnColor={color}
    >
      {color === "black" ? (
        <img src={closeBlackSVG} alt="closeBlack.svg" />
      ) : (
        <img src={closeSVG} alt="close.svg" />
      )}
    </StyledButtonClose>
  );
};

const StyledButtonClose = styled.button<{ btnColor: string }>`
  margin-left: 15px;
  align-self: flex-start;
  margin-top: 15.5px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: ${({ btnColor }) => (btnColor === "black" ? "#262626" : "#262626")};

  img {
    width: 25px;
    height: 25px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.text.main};
  }

  @media (min-width: 1440px) {
    position: absolute;
    left: 0px;
    margin-top: 0px;
    
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

export default ButtonClose;
