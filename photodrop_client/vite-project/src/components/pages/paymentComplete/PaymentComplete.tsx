import AvatarLink from "@common/avatarLink/AvatarLink";
import Logo from "@common/logo/Logo";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import exampleAvatar from "@images/example_avatar.png";
import moneyGIF from "@images/money.gif";
import Header from "@common/header/Header";
import {
  StyledPaymentComplete,
  StyledPaymentDescription,
} from "./PaymentComplete.styles";
import ButtonBlue from "@common/buttons/ButtonBlue";
import { useAppSelector } from "@hooks/reducers.hook";
import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonSubmit from "@common/buttons/ButtonSubmit";

const PaymentComplete: React.FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const photoId = params.get("photoid") || "none";
  const albumName = params.get("album") || "none";
  const { avatarLink } = useAppSelector((store) => store.userReducer);
  
  return (
    <WrapperPage>
      <Logo />
      <AvatarLink avatar={avatarLink ? avatarLink : exampleAvatar} />
      <Header
        font="18"
        largeFont="30"
        label={"Thank you"}
        span={"!"}
        top="10"
        bottom="6"
        largeBottom="20"
        largeTop="30"
      />
      <StyledPaymentComplete>
        <StyledPaymentDescription>
          {albumName !== "none" ? (
            <p>
              The album <span>{albumName}</span> is now unlocked.
            </p>
          ) : (
            <></>
          )}
          {photoId !== "none" ? (
            <p>
              The photo with id=<span>{photoId}</span> is now unlocked.
            </p>
          ) : (
            <></>
          )}
          <p>
            You can now download, share, post, and print your hi-res,
            watermark-free, glorious memories.
          </p>
        </StyledPaymentDescription>
        <img src={moneyGIF} alt="money.gif" />
        <ButtonSubmit
          completePayment={true}
          payment={false}
          top="0"
          label="See photos"
          buttonHandler={() => navigate("../dashboard")}
        />
      </StyledPaymentComplete>
    </WrapperPage>
  );
};

export default PaymentComplete;
