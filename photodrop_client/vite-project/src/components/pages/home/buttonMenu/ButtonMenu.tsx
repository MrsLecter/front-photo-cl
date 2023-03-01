import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppUrlsEnum } from "@const";

const ButtonMenu: React.FC<IButtonMenu> = ({ label, way }) => {
  const navigation = useNavigate();
  return (
    <BtnMenu type="button" onClick={() => navigation(way)}>
      <span>{label}</span>
    </BtnMenu>
  );
};

export default ButtonMenu;

const BtnMenu = styled.button`
  position: relative;
  width: 170px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: "Futura";
  font-size: 28px;
  font-weight: 500;
  line-height: 35.9px;
  border: none;
  background-color: transparent;
  transition: 0.8s;

  span {
    width: 170px;
    display: block;
    position: relative;
    transition: 0.8s;
    text-align: left;
  }

  span:after {
    content: url("./src/assets/images/left_arrow.png");
    position: absolute;
    display: block;
    opacity: 0;
    top: 0;
    right: 0px;
    width: 10px;
    height: 16px;
    margin-right: 5px;
    transition: 0.8s;

    img {
      width: 10px;
      height: 16px;
    }
  }

  &:hover,
  &:hover span {
    cursor: pointer;
    background-color: ${({ theme }) => theme.button.background_hovered_dark};
    text-shadow: -1px -1px 0 darken(${({ theme }) => theme.button.background}, 9.5%);
    width: 300px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;
interface IButtonMenu {
  label: string;
  way: string;
}
