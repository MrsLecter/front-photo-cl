import loadingSVG from "@images/loading-spinner.png";
import ReactDOM from "react-dom";
import { Loading, Message, BackdropBlock } from "./LoadingBlock.styles";

const portalElement: HTMLElement | null = document.getElementById("overlay");

const Backdrop: React.FC = () => {
  return <BackdropBlock />;
};

const LoadingContent: React.FC = () => {
  return (
    <Loading>
      <img src={loadingSVG} alt="loading.svg" />
      <Message>Almost there...</Message>
    </Loading>
  );
};

const LoadingBlock: React.FC = () => {
  if (portalElement === null) {
    throw new Error("Element with id='overlay' is missing!");
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<LoadingContent />, portalElement)}
    </>
  );
};

export default LoadingBlock;
