import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import backSVG from "@images/back.svg";

const ButtonBack: React.FC<{ height?: string }> = ({ height }) => {
  const navigate = useNavigate();
  const backToAlbumHandler = () => {
    navigate(-1);
  };
  
  return (
    <StyledButtonBack onClick={backToAlbumHandler} type="button" small={true}>
      <img src={backSVG} alt="back.svg" />
    </StyledButtonBack>
  );
};

const StyledButtonBack = styled.button<{ small: boolean }>`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.small ? "-48px" : "-48px")};
  margin-left: ${(props) => (props.small ? "0px" : "20px")};
  width: 40px;
  height: 41px;
  border: none;
  border-radius: 6px;
  background-color: white;
  color: ${({ theme }) => theme.text.main};
  font-family: "Futura";
  font-weight: 600;
  font-size: 18px;
  line-height: 23.08px;
  object-fit: cover;

  img {
    width: ${(props) => (props.small ? "20px" : "30px")};
    height: ${(props) => (props.small ? "20px" : "30px")};
  }
`;

export default ButtonBack;
