import ButtonBordered from "@common/buttons/ButtonBordered";
import { AppUrlsEnum } from "@const";
import downloadPNG from "@images/photo_download.png";
import sharePNG from "@images/photo_share.png";
import styled from "styled-components";

const PhotoPanel: React.FC<PhotoPanelProps> = (props) => {
  return (
    <StyledPhotoPanel>
      <StyledPhotoBtn onClick={() => props.toggleDownloadMenu()}>
        <img src={downloadPNG} alt="downloadIcon.png" />
        Download
      </StyledPhotoBtn>
      <StyledPhotoBtn onClick={() => props.toggleShareMenu()}>
        <img src={sharePNG} alt="shsreIcon.png" />
        Share
      </StyledPhotoBtn>
      <ButtonBordered
        way={"../" + AppUrlsEnum.FRAMED + `?photo=${props.photoUrl}`}
        label={"See in a frame"}
        width={196}
      />
    </StyledPhotoPanel>
  );
};

interface PhotoPanelProps {
  toggleDownloadMenu: () => void;
  toggleShareMenu: () => void;
  photoUrl: string;
}

const StyledPhotoPanel = styled.div`
  width: 375px;
  height: 80px;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 30px 15px;
`;

const StyledPhotoBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Futura";
  font-size: 14px;
  font-weight: 400;
  line-height: 17.95px;
  color: white;
  border: none;
  background-color: transparent;

  img {
    width: 24px;
    height: 21px;
    margin-bottom: 5px;
  }

  &:hover {
    cursor: pointer;
    text-shadow: 1px 1px;
  }
`;

export default PhotoPanel;
