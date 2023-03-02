import styled from "styled-components";

const SeparatorString: React.FC<SeparatorStringProps> = (props) => {
  return (
    <StyleSeparator letter={props.type === "letter"}>
      {props.label}
    </StyleSeparator>
  );
};

interface SeparatorStringProps {
  label: string;
  type: "string" | "letter";
}

const StyleSeparator = styled.div<{ letter: boolean }>`
  box-sizing: border-box;
  margin: 0 auto;
  padding-bottom: 5px;
  padding-left: 30px;
  padding-top: ${(props) => (props.letter ? "3px" : "20px")};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 375px;
  height: ${(props) => (props.letter ? "30px" : "40px")};
  vertical-align: middle;
  font-family: "Futura";
  font-size: ${(props) => (props.letter ? "12px" : "14px")};
  color: $text_language;
  background-color: #f5f4fb;
`;

export default SeparatorString;
