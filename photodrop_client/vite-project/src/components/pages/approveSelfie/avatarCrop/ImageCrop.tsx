import React, { useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import styled from "styled-components";

const StyledAvatarWrapper = styled.div`
  background-color: #262727;
`;

const ImageCrop: React.FC<ImageCropProps> = ({
  imageSrc,
  onCrop,
  setEditorRef,
  scaleValue,
  onScaleChange,
}) => {
  return (
    <StyledAvatarWrapper
      onWheel={(event) => {
        onScaleChange(scaleValue + event.deltaY * 0.001);
      }}
    >
      <AvatarEditor
        width={285}
        height={285}
        image={imageSrc || ""}
        border={1}
        borderRadius={142.5}
        scale={scaleValue}
        rotate={0}
        ref={setEditorRef}
        backgroundColor={"transparent"}
        color={[38, 39, 39]}
      />
    </StyledAvatarWrapper>
  );
};

interface ImageCropProps {
  imageSrc: string | null;
  setEditorRef: React.LegacyRef<AvatarEditor> | undefined;
  onCrop: React.MouseEventHandler<HTMLButtonElement>;
  scaleValue: number;
  onScaleChange: Function;
}

export default ImageCrop;
