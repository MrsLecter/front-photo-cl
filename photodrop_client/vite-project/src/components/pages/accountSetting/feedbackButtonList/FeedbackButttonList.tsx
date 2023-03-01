import phonePNG from "@images/setting_phone.png";
import mailPNG from "@images/setting_mail.png";
import rightArrowSVG from "@images/arrow_right.svg";
import { useNavigate } from "react-router-dom";
import {
  StyledFeedbacButtonList,
  StyledFeedbackContent,
  StyledFeedbackSign,
  StyledFeedbackArrow,
  StyledFeedbackOption,
  StyledFeedbackData,
} from "./FeedbackButtonList.styles";
import { AppUrlsEnum } from "@const";

const FeedbackButtonList: React.FC<FeedbackButtonListProps> = ({
  phoneNumber,
  userEmail,
}) => {
  const navigation = useNavigate();

  return (
    <StyledFeedbacButtonList>
      <button
        onClick={() =>
          navigation("../" + AppUrlsEnum.CHANGE_PHONE + "?action=change")
        }
        type="button"
      >
        <StyledFeedbackSign src={phonePNG} alt="phone.svg" />
        <StyledFeedbackContent>
          <StyledFeedbackOption>
            Phone &#x2022; <span>Verified</span>
          </StyledFeedbackOption>
          <StyledFeedbackData>{phoneNumber}</StyledFeedbackData>
        </StyledFeedbackContent>
        <StyledFeedbackArrow src={rightArrowSVG} alt="right_arrow.svg" />
      </button>
      <button
        onClick={() => navigation("../" + AppUrlsEnum.DET_EMAIL)}
        type="button"
      >
        <StyledFeedbackSign src={mailPNG} alt="mail.svg" />
        <StyledFeedbackContent>
          <StyledFeedbackOption>Email</StyledFeedbackOption>
          <StyledFeedbackData>{userEmail}</StyledFeedbackData>
        </StyledFeedbackContent>
        <StyledFeedbackArrow src={rightArrowSVG} alt="right_arrow.svg" />
      </button>
    </StyledFeedbacButtonList>
  );
};

interface FeedbackButtonListProps {
  phoneNumber: string;
  userEmail: string;
}

export default FeedbackButtonList;
