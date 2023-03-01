import styled from "styled-components";

const ButtonResentCode: React.FC<{ codeResentHandler: () => void }> = ({
  codeResentHandler,
}) => {
  return (
    <StyledButtonResentCode type="button" onClick={codeResentHandler}>
      Resent code
    </StyledButtonResentCode>
  );
};

const StyledButtonResentCode = styled.button`
  margin-bottom: 19px;
  padding: 0px;
  width: 345px;
  height: 15px;
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.text.links};
  font-family: "Futura";
  font-weight: 400;
  font-size: 16px;
  line-height: 20.51px;
  text-align: start;

  &:hover {
    color: red;
  }
`;

export default ButtonResentCode;
