import { useNavigate } from "react-router-dom";
import {
  StyledAvatarBox,
  StyledHeader,
  StyledAvatar,
  StyledEdit,
} from "./AvatarBox.styles";
import editPNG from "@images/avatar_edit.png";
import avatar from "@images/avatar_edit.png";
import { AppUrlsEnum } from "@const";

const AvatarBox: React.FC<{
  avatarLink: string;
  buttonHandler: () => void;
}> = ({ avatarLink, buttonHandler }) => {
  const navigation = useNavigate();

  return (
    <StyledAvatarBox>
      <StyledHeader>Your selfie</StyledHeader>
      <StyledAvatar>
        <img src={avatarLink ? avatarLink : avatar} alt="avatar" />
        <StyledEdit onClick={() => buttonHandler()}>
          <img src={editPNG} alt="edit.png" />
        </StyledEdit>
      </StyledAvatar>
    </StyledAvatarBox>
  );
};

export default AvatarBox;
