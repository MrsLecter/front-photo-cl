import styled from "styled-components";

export const StyledCountryString = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 375px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #f0f1f4;
  background-color: white;
  font-family: "Futura";
  color: ${({ theme }) => theme.text.language};

  &:hover {
    background-color: ${({ theme }) => theme.button.background_darkgrey};
    cursor: pointer;
  }
`;

export const StyledCountryFlag = styled.div`
  width: 30px;
  height: 22px;
  margin-right: 10px;
`;

export const StyledCountryName = styled.div`
  ont-family: "Futura";
  font-size: 16px;
`;
