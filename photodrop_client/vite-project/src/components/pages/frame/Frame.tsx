import requestHandlerUser from "@/api/api-user-requests";
import { isTokensNeedRefresh } from "@/components/helpers/functions";
import { userSlice } from "@/components/store/reducers/userSlice";
import { PHOTO_FORMATS, FRAME_COLORS } from "@const";
import { useAppDispatch, useAppSelector } from "@hooks/reducers.hook";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { StyledFrame } from "./Frame.style";
import FramePanel from "./framePanel/FramePanel";
import PhotoFramed from "./photoFramed/PhotoFramed";

const Frame: React.FC = () => {
  const [params] = useSearchParams();
  const dispatch = useAppDispatch();
  const { setNewTokens } = userSlice.actions;
  const { refreshToken, expiresIn } = useAppSelector(
    (store) => store.userReducer
  );
  const photoURL = params.get("photo") || "";
  const [color, setColor] = useState(FRAME_COLORS[0]);
  const [dimentions, setDimentions] = useState(PHOTO_FORMATS[0]);

  useEffect(() => {
    const checkToken = async () => {
      if (isTokensNeedRefresh(expiresIn || 0)) {
        dispatch(
          setNewTokens(
            await requestHandlerUser.makeTokenRefresh({ refreshToken })
          )
        );
      }
    };
    checkToken();
  }, []);

  return (
    <WrapperPage>
      <StyledFrame>
        <PhotoFramed
          photoUrl={photoURL}
          color={color.color}
          width={dimentions.width}
          height={dimentions.height}
        />
        <FramePanel
          cost={"49"}
          activeColor={color}
          activeDimentions={dimentions}
          changeColorHandler={setColor}
          changeDimentionsHandler={setDimentions}
          name="Wythe"
          rate={3}
          reviews={855}
          colors={FRAME_COLORS}
          dimentions={PHOTO_FORMATS}
        />
      </StyledFrame>
    </WrapperPage>
  );
};

export default Frame;
