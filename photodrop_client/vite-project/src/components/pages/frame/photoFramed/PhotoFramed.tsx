import {
  StyledPhotoFramed,
  StyledPhotoContainer,
  StyledPhotoShadow,
} from "./PhotoFramed.style";
import exampleStubPNG from "../../../../assets/images/example_stub.png";

const PhotoFramed: React.FC<PhotoFramedProps> = (props) => {
  return (
    <StyledPhotoFramed
      style={{
        border: "25px solid" + props.color,
        height:
          ((parseFloat(props.height) * 100) / parseFloat(props.width)) *
            0.01 *
            284 +
          "px",
      }}
    >
      <StyledPhotoShadow
        style={{
          height:
            ((parseFloat(props.height) * 100) / parseFloat(props.width)) *
              0.01 *
              231 +
            "px",
          paddingBottom:
            ((parseFloat(props.height) * 100) / parseFloat(props.width) === 100
              ? 0
              : (parseFloat(props.height) * 100) / parseFloat(props.width)) *
              0.01 *
              14 +
            "px",
        }}
      >
        <StyledPhotoContainer>
          <img
            src={!!props.photoUrl.length ? props.photoUrl : exampleStubPNG}
            alt="userPhoto"
            style={{
              height:
                ((parseFloat(props.height) * 100) / parseFloat(props.width)) *
                  0.01 *
                  160 +
                "px",
            }}
          />
        </StyledPhotoContainer>
      </StyledPhotoShadow>
    </StyledPhotoFramed>
  );
};

interface PhotoFramedProps {
  width: string;
  height: string;
  color: string;
  type?: string;
  photoUrl: string;
}

export default PhotoFramed;
