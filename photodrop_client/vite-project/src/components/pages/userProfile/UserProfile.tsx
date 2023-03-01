import ButtonBack from "@common/buttons/ButtonBack";
import { ContextMenu } from "@common/contextMenu/ContextMenu";
import Header from "@common/header/Header";
import LoadingBlock from "@common/loadingBlock/LoadingBlock";
import { AppUrlsEnum } from "@const";
import { useAppSelector } from "@hooks/reducers.hook";
import WrapperModal from "@wrappers/wrapperModal/WrapperModal";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/logo/Logo";
import AvatarBox from "./avatarBox/AvatarBox";
import { SettingList } from "./settingList/SettingList";

export const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { accessToken, userName, userEmail, avatarLink } = useAppSelector(
    (store) => store.userReducer
  );
  const [isActive, toggleIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userName) {
      setIsLoading(true);
      navigate("../" + AppUrlsEnum.DET_USER);
    } else if (!userEmail) {
      setIsLoading(true);
      navigate("../" + AppUrlsEnum.DET_EMAIL);
    }
  }, []);

  return (
    <WrapperPage>
      {isLoading ? <LoadingBlock /> : <></>}
      <Logo />
      <ButtonBack />
      <Header
        label={"Welcome, " + userName}
        font="18"
        largeFont="22"
        top="18"
        largeTop="60"
        bottom="0"
      />
      <AvatarBox
        avatarLink={avatarLink}
        buttonHandler={() => toggleIsActive(true)}
      />
      {isActive ? (
        <WrapperModal
          backClickHandler={() => toggleIsActive(false)}
          width={226}
          height={119}
          borderRadius={11}
          top={250}
          isAlbum={false}
        >
          <ContextMenu />
        </WrapperModal>
      ) : (
        <></>
      )}
      <SettingList />
    </WrapperPage>
  );
};
