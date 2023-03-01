import { AppUrlsEnum } from "@const";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CountryHeader: React.FC = () => {
  const navigate = useNavigate();

  const closePageHandler = () => {
    navigate("../" + AppUrlsEnum.SIGNUP);
  };

  return (
    <StyledCountry>
      <StyledCountryHeader>SelectCountry</StyledCountryHeader>
      <StyledBtn type="button" onClick={closePageHandler}>
        Close
      </StyledBtn>
    </StyledCountry>
  );
};

const StyledCountry = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0px 12px 0px 135px;
  width: 375px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  font-family: "Futura";
  color: ${({ theme }) => theme.text.language};
`;

const StyledCountryHeader = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 2px;
`;

const StyledBtn = styled.button`
  width: 55px;
  height: 40px;
  border: none;
  background-color: white;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 2px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default CountryHeader;
