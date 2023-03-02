import enabledStarSVG from "@images/rate_star_active.svg";
import disabledStarSVG from "@images/rate_star_disable.svg";
import editorCutPNG from "@images/editor_cut.png";
import {
  StyledFramePanelProperty,
  StyledColorCircleBorder,
  StyledFrameColorCircle,
  StyledFrameColors,
  StyledFrameInfo,
  StyledFrameRate,
  StyledFramePanel,
  StyledFrameName,
  StyledFrameHeader,
  StyledFramedEditorCut,
  StyledFrameContent,
  StyledFrameDimentions,
} from "./FramePanel.style";
import { FramePanelProps } from "./FramePanel.types";
import ButtonSubmit from "@common/buttons/ButtonSubmit";

const FramePanel: React.FC<FramePanelProps> = (props) => {
  return (
    <StyledFramePanel>
      <StyledFrameHeader>
        <div>See in a room</div>
        <StyledFramedEditorCut>
          <img src={editorCutPNG} alt="cut.png" />
        </StyledFramedEditorCut>
      </StyledFrameHeader>

      <StyledFrameContent>
        <StyledFrameName>{props.name}</StyledFrameName>
        <StyledFrameRate>
          <div>
            {new Array(5).fill(0).map((item, index) => {
              if (index > props.rate - 1) {
                return (
                  <img
                    key={index}
                    src={disabledStarSVG}
                    alt="disabledStar.svg"
                  />
                );
              }
              if (index <= props.rate - 1) {
                return (
                  <img key={index} src={enabledStarSVG} alt="enabledStar.svg" />
                );
              }
            })}
          </div>
          <span>{props.reviews}</span>&nbsp;
          <span>Reviews</span>
        </StyledFrameRate>
        <StyledFrameInfo>
          <span>{props.activeColor.name}</span>&bull;
          <span>{props.activeDimentions.label}</span>
          &bull;
          <span>5x7 Print</span>
        </StyledFrameInfo>
        <StyledFrameColors>
          {Object.values(props.colors).map((item) => {
            return (
              <StyledColorCircleBorder
                active={item.id === props.activeColor.id}
                key={item.id + 200}
              >
                <StyledFrameColorCircle
                  onClick={() => props.changeColorHandler(item)}
                  style={{ backgroundColor: item.color }}
                  key={item.id + 250}
                />
              </StyledColorCircleBorder>
            );
          })}
        </StyledFrameColors>
        <StyledFrameDimentions>
          {Object.values(props.dimentions).map((item) => {
            return (
              <StyledFramePanelProperty
                actual={item.id === props.activeDimentions.id}
                onClick={() => props.changeDimentionsHandler(item)}
                key={item.id + 100}
              >
                <span>{item.label}</span>
                <span>{item.type}</span>
              </StyledFramePanelProperty>
            );
          })}
        </StyledFrameDimentions>
        <ButtonSubmit top="0" label={`Add to cart - $${props.cost}`} />
      </StyledFrameContent>
    </StyledFramePanel>
  );
};

export default FramePanel;
