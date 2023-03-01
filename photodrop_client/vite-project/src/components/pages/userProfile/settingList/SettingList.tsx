import { SETTING_BUTTONS_LIST } from "@const";
import { useNavigate } from "react-router-dom";
import {
  StyledSettingList,
  StyledBtnText,
  StyledBtn,
} from "./SettingList.styles";
import arrowSVG from "../../../../assets/images/arrow_right.svg";

interface ButtonSettingProps {
  header: string;
  description: string;
  way: string;
}

export const ButtonSetting: React.FC<ButtonSettingProps> = (props) => {
  const navigation = useNavigate();
  return (
    <StyledBtn onClick={() => navigation(props.way)}>
      <StyledBtnText>
        {props.header}
        <span>{props.description}</span>
      </StyledBtnText>
      <img src={arrowSVG} alt="arrowRight.svg" />
    </StyledBtn>
  );
};

export const SettingList: React.FC = () => {
  return (
    <StyledSettingList>
      {SETTING_BUTTONS_LIST &&
        SETTING_BUTTONS_LIST.map((item) => (
          <ButtonSetting
            key={item.id}
            header={item.header}
            description={item.description}
            way={item.way}
          />
        ))}
    </StyledSettingList>
  );
};
