import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import React, { Component } from "react";
import ImageCrop from "./avatarCrop/ImageCrop";
import {
  StyledApproveSelfie,
  StyledSelfieHeader,
  StyledSelfieText,
  StyledSelfieAvatar,
  StyledSelieFocus,
  StyledSelfieButtonPanel,
  StyledSelfieBtn,
} from "./ApproveSelfie.styles";
import WrapperModal from "@wrappers/wrapperModal/WrapperModal";
import { ContextMenu } from "@common/contextMenu/ContextMenu";
import closeSVG from "@images/close.svg";
import { AppUrlsEnum } from "@const";
import { Navigate, useNavigate } from "react-router-dom";
import ButtonClose from "@common/buttons/ButtonClose";
import requestHandler from "@/api/api-api-requests";
import {
  getFormedAvatarData,
  setNewAvatar,
} from "@/components/helpers/functions";
import { userSlice } from "@/components/store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";

interface ApproveSelfieProps {
  userProfilePic: string | null;
  editor: any;
  scaleValue: number;
  isActiveContext: boolean;
  redirect: boolean;
}

class ApproveSelfie extends Component<any, ApproveSelfieProps> {
  constructor(props: any) {
    super(props);
    this.onCrop = this.onCrop.bind(this);
    this.state = {
      userProfilePic: localStorage.getItem("avatar"),
      editor: null,
      scaleValue: 1,
      isActiveContext: false,
      redirect: false,
    };
  }

  setEditorRef = (editor: any) => this.setState({ editor });

  onCrop = async () => {
    const { editor } = this.state;
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      this.setState({ userProfilePic: url });
      localStorage.setItem("avatar", url);
      this.setState({ redirect: true });
    }
  };

  onScaleChange = (n: string) => {
    const scaleValue = parseFloat(n);
    this.setState({ scaleValue });
  };

  render() {
    let { redirect } = this.state;
    return (
      <WrapperPage>
        {redirect && (
          <Navigate
            to={"../" + AppUrlsEnum.INFO + "/Selfie uploaded successfully"}
            replace={true}
          />
        )}
        <StyledApproveSelfie>
          <StyledSelfieHeader>Take selfie</StyledSelfieHeader>
          <ButtonClose color="white" />

          <StyledSelfieText>Drag and zoom image to crop</StyledSelfieText>
          <StyledSelfieAvatar>
            <ImageCrop
              imageSrc={this.state.userProfilePic}
              setEditorRef={this.setEditorRef}
              onCrop={this.onCrop}
              scaleValue={this.state.scaleValue}
              onScaleChange={this.onScaleChange}
            />
          </StyledSelfieAvatar>

          <img
            style={{ height: "150px" }}
            src={this.state.userProfilePic || ""}
            alt="Profile"
          />

          <StyledSelfieButtonPanel>
            <RetakeBtn />
            <StyledSelfieBtn
              itFilled={true}
              onClick={this.onCrop}
              type="button"
            >
              Save
            </StyledSelfieBtn>
          </StyledSelfieButtonPanel>
        </StyledApproveSelfie>
      </WrapperPage>
    );
  }
}

const RetakeBtn = () => {
  const navigate = useNavigate();
  return (
    <StyledSelfieBtn
      onClick={() => navigate("../" + AppUrlsEnum.TAKE_SELFIE)}
      itFilled={false}
      type="button"
    >
      Retake
    </StyledSelfieBtn>
  );
};

export default ApproveSelfie;
