import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import editPNG from "@images/avatar_edit.png";
import { AppUrlsEnum } from "@const";

const AvatarLink: React.FC<{ avatar: string }> = ({ avatar }) => {
  const navigate = useNavigate();
  return (
    <StyledAvatar onClick={() => navigate("../" + AppUrlsEnum.USER_PROFILE)}>
      <img src={avatar ? avatar : editPNG} alt="avatar" />
    </StyledAvatar>
  );
};

export const StyledAvatar = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 0px;
  margin-right: 10px;
  float: right;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  margin-top: -50px;
  z-index: 10;

  img {
    width: 35px;
    height: 35px;
  }
`;

export default AvatarLink;
