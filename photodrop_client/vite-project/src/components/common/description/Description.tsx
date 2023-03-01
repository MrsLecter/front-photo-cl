import styled from "styled-components";

export const Description: React.FC<{ text: string }> = ({ text }) => {
  return <StyledDescription>{text}</StyledDescription>;
};

const StyledDescription = styled.div`
  margin: 0 auto;
  width: 345px;
  height: 50px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 18px;
  line-height: 23.08px;
  color: ${({ theme }) => theme.text.main};
  text-align: center;

  @media (min-width: 1440px) {
    width: 420px;
  }
`;
