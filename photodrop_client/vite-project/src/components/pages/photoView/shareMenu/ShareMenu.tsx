import {
  TwitterIcon,
  TwitterShareButton,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  ViberShareButton,
  ViberIcon,
} from "react-share";
import {
  StyledShareMenu,
  StyledShareMenuHeader,
  StyledShareHeaderIcon,
  StyledShareHeaderContent,
  StyledShareSocial,
  StyledShareClose,
  StyledShareCloseIcon,
} from "./ShareMenu.styled";

import { CURRENT_BASIC_ROOT } from "@const";
import closePNG from "@images/share_close.png";
import { useLocation, useSearchParams } from "react-router-dom";
import { useAppSelector } from "@hooks/reducers.hook";

interface ShareMenuProps {
  closeMenu: (isActive: boolean) => void;
}

const ShareMenu: React.FC<ShareMenuProps> = (props) => {
  const { avatarLink } = useAppSelector((store) => store.userReducer);
  const location = useLocation();
  const [params] = useSearchParams();
  const photoId = params.get("photo");
  const albumId = params.get("album");
  const shareUrl =
    CURRENT_BASIC_ROOT +
    location.pathname +
    `?photo=${photoId}&album=${albumId}`;
  const title = "share";

  return (
    <StyledShareMenu>
      <StyledShareMenuHeader>
        <StyledShareHeaderIcon src={avatarLink} alt="userPhoto" />
        <StyledShareHeaderContent>
          <div>image-file-name</div>
          <div>photodrop.me</div>
        </StyledShareHeaderContent>
        <StyledShareClose onClick={() => props.closeMenu(false)}>
          <StyledShareCloseIcon src={closePNG} alt="close.png" />
        </StyledShareClose>
      </StyledShareMenuHeader>
      <StyledShareSocial>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
        <TumblrShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TumblrIcon size={32} round />
        </TumblrShareButton>
        <ViberShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <ViberIcon size={32} round />
        </ViberShareButton>
        {/* </div> */}
      </StyledShareSocial>
    </StyledShareMenu>
  );
};

export default ShareMenu;
