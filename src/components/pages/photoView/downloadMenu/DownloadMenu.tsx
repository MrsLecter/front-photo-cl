import sharePNG from "@images/photo_download_share.png";
import addPNG from "@images/photo_download_add.png";
import copyPNG from "@images/photo_download_copy.png";
import { StyledDownloadMenu, StyledDownloadItem } from "./DownloadMenu.styled";

const DownloadMenu: React.FC = () => {
  return (
    <StyledDownloadMenu>
      <StyledDownloadItem>
        <div>Share...</div>
        <img src={sharePNG} alt="share.png" />
      </StyledDownloadItem>
      <StyledDownloadItem>
        <div>Add to Photos</div>
        <img src={addPNG} alt="add.png" />
      </StyledDownloadItem>
      <StyledDownloadItem>
        <div>Copy</div>
        <img src={copyPNG} alt="copy.png" />
      </StyledDownloadItem>
    </StyledDownloadMenu>
  );
};

export default DownloadMenu;
