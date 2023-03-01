import styled from "styled-components";
import messagePNG from "../../../assets/images/message.png";

const EmptyAlbumInfo: React.FC = () => {
  return (
    <StyledEmptyAlbumInfo>
      You will get a text message when they are ready. It can take up to 48
      hours.
    </StyledEmptyAlbumInfo>
  );
};

export const StyledEmptyAlbumInfo = styled.div`
  margin: 0px auto 0px;
  padding-top: 4px;
  padding-bottom: 41px;
  border-bottom: 5px solid #f5f5f4;
  width: 345px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 18px;
  line-height: 23.08px;
  text-align: center;
  color: ${({ theme }) => theme.text.main};

  img {
    width: 81.8px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    margin: -20px auto 0px;
    width: 700px;
    font-size: 22px;
    line-height: 28.2px;
    border-bottom: none;
  }
`;

const StyledEmptyAlbumHeader = styled.div`
  width: 345px;
  margin-top: 21px;
  margin-bottom: 16px;
  text-align: center;
  font-family: "Futura";
  font-weight: 500;
  font-size: 22px;
  line-height: 28.2px;
  color: ${({ theme }) => theme.text.main};
`;

const StyledEmptyAlbumDescription = styled.div`
  width: 345px;
  text-align: center;
  font-family: "Futura";
  font-weight: 400;
  font-size: 18px;
  line-height: 23.08px;
  color: ${({ theme }) => theme.text.main};
`;

export default EmptyAlbumInfo;
