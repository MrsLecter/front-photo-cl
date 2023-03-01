import ReactDOM from "react-dom";
import { Backdrop, ModalDiv } from "./WrapperModal.styles";
import {
  IBackScreenProps,
  IModalProps,
  IWrapperModalProps,
} from "./WrapperModal.types";

const backdrop = document.getElementById("backdrop");
const overlay = document.getElementById("overlay");

const BackScreen = ({ backClickHandler }: IBackScreenProps) => {
  return <Backdrop onClick={backClickHandler} />;
};

const ModalWindow: React.FC<IModalProps> = ({
  children,
  width,
  height,
  top,
  borderRadius,
  widthLarge,
  heightLarge,
  topLarge,
  isAlbum,
}) => {
  return (
    <ModalDiv
      width={width}
      height={height}
      top={top}
      borderRadius={borderRadius}
      widthLarge={widthLarge}
      heightLarge={heightLarge}
      topLarge={topLarge}
      isAlbum={isAlbum}
    >
      {children}
    </ModalDiv>
  );
};

if (!overlay || !backdrop || (!backdrop && !overlay)) {
  throw Error("Element 'overlay' or/and 'backdrop' not assigned in DOM");
}

const WrapperModal = ({
  children,
  backClickHandler,
  width,
  height,
  top,
  borderRadius,
  widthLarge,
  heightLarge,
  topLarge,
  isAlbum,
}: IWrapperModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackScreen backClickHandler={backClickHandler} />,
        backdrop
      )}
      {ReactDOM.createPortal(
        <ModalWindow
          isAlbum={isAlbum}
          width={width}
          height={height}
          top={top}
          children={children}
          borderRadius={borderRadius}
          widthLarge={widthLarge}
          heightLarge={heightLarge}
          topLarge={topLarge}
        />,
        overlay
      )}
    </>
  );
};

export default WrapperModal;
