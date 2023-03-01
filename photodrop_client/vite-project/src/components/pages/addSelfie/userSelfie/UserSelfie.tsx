import avatarEmptyPNG from "@images/avatar_empty.png";
import avatatAddSVG from "@images/avatar_add.svg";
import {
  StyledUserSelfie,
  StyledUserAvatar,
  StyledUserBtn,
} from "./UserSelfie.module";

const UserSelfie: React.FC<UserSelfieProps> = ({
  userImage,
  handleAddButton,
}) => {
  return (
    <StyledUserSelfie>
      <StyledUserAvatar>
        {!userImage ? (
          <img src={avatarEmptyPNG} alt="avatar" />
        ) : (
          <img src={userImage} alt="avatar" />
        )}
      </StyledUserAvatar>

      <StyledUserBtn onClick={handleAddButton} type="button">
        <img src={avatatAddSVG} alt="add.svg" />
      </StyledUserBtn>
    </StyledUserSelfie>
  );
};

interface UserSelfieProps {
  userImage: string;
  handleAddButton: () => void;
}

export default UserSelfie;
