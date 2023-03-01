import { getFlagUnicode } from "@/components/helpers/functions";
import { useNavigate } from "react-router-dom";
import {
  StyledCountryString,
  StyledCountryFlag,
  StyledCountryName,
} from "./CountryString.styles";

const CountryString: React.FC<CountryStringProps> = (props) => {
  const { countryCode, countryName, phoneCode } = props;
  const navigator = useNavigate();

  const sendPhoneCodeHandler = () => {
    navigator(`../signup?icon=${countryCode}&code=${phoneCode}`);
  };

  return (
    <StyledCountryString onClick={sendPhoneCodeHandler}>
      <StyledCountryFlag>{getFlagUnicode(countryCode)}</StyledCountryFlag>
      <StyledCountryName>{countryName}</StyledCountryName>
    </StyledCountryString>
  );
};

interface CountryStringProps {
  countryCode: string;
  countryName: string;
  phoneCode: string;
}

export default CountryString;
