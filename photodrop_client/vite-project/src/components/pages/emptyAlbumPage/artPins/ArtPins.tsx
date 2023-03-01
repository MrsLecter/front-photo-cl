import styled from "styled-components";

const ArtPins: React.FC<{ imagesList: string[] }> = (props) => {
  return (
    <StyledArtPins>
      <StyledArtHeader>Browse Art Prints</StyledArtHeader>
    </StyledArtPins>
  );
};

export const StyledArtPins = styled.div`
  width: 100vw;
  padding: 41px 15px 60px 15px;
  border-top: 5px solid #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledArtHeader = styled.div`
  font-family: "Futura";
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  text-align: start;
  margin-bottom: 21px;
`;

export default ArtPins;
