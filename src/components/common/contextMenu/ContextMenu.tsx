import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import { useNavigate } from "react-router-dom";
import libraryPNG from "@images/library.png";
import photoPNG from "@images/photo.png";
import filePNG from "@images/file.png";
import requestHandler from "@/api/api-api-requests";
import ButtonClose from "@common/buttons/ButtonClose";
import {
  StyledContextMenu,
  StyledItem,
  StyledWrapper,
  StyledContextMenuLarge,
  StyledContextHeader,
  StyledItemLarge,
} from "./ContextMenu.styles";
import { AppUrlsEnum } from "@const";
import { IAxiosPostSelfieResponse } from "@/api/api-requests.types";
import { userSlice } from "@/components/store/reducers/userSlice";
import requestHandlerUser from "@/api/api-user-requests";

export const ContextMenu: React.FC = () => {
  const { phoneNumber, accessToken } = useAppSelector(
    (store) => store.userReducer
  );
  const { setAvatar } = userSlice.actions;
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const screenWidth = window.screen.width;

  const libraryBtnHandler = () => {
    navigation("../" + AppUrlsEnum.INFO + "/You have not any photo");
  };

  const photoBtnHandler = () => {
    if (screenWidth <= 375) {
      navigation("../" + AppUrlsEnum.TAKE_SELFIE);
    } else {
      navigation(
        "../" + AppUrlsEnum.INFO + "/Only available for mobile devices"
      );
    }
  };

  const fileCoosenHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imagesTarget = event.target.files;
    const selfieFile = Array.from(imagesTarget!)[0];
    let formData = new FormData();
    formData.append("selfie", "selfie");
    formData.append("selfie", selfieFile);

    const response: IAxiosPostSelfieResponse =
      await requestHandlerUser.postSelfie({
        phoneNumber,
        formData,
        accessToken,
      });
    console.log("resp", response);
    if (response.status === 201) {
      dispatch(setAvatar({ avatar: response.data.selfie }));
      navigation("../" + AppUrlsEnum.DASHBOARD);
    } else {
      navigation("../" + AppUrlsEnum.INFO + "/photo not sent! Try again!");
    }
  };

  return (
    <>
      {screenWidth < 1439 ? (
        <StyledContextMenu>
          <StyledItem onClick={libraryBtnHandler}>
            Photo Library <img src={libraryPNG} alt="library.svg" />
          </StyledItem>
          <StyledItem onClick={photoBtnHandler}>
            Take Photo <img src={photoPNG} alt="take.svg" />
          </StyledItem>
          <StyledWrapper>
            <label htmlFor="myfile">
              Choose File <img src={filePNG} alt="file.svg" />
            </label>
            <input
              onChange={(e) => fileCoosenHandler(e)}
              type="file"
              id="myfile"
              accept="image/*"
            />
          </StyledWrapper>
        </StyledContextMenu>
      ) : (
        <StyledContextMenuLarge>
          <StyledContextHeader>
            <ButtonClose color={"black"} />
            Upload options
          </StyledContextHeader>

          <StyledWrapper>
            <label htmlFor="myfile">Upload a file</label>
            <input
              onChange={(e) => fileCoosenHandler(e)}
              type="file"
              id="myfile"
              accept="image/*"
            />
          </StyledWrapper>
          <StyledItemLarge onClick={photoBtnHandler}>
            Use camera
          </StyledItemLarge>
        </StyledContextMenuLarge>
      )}
    </>
  );
};
