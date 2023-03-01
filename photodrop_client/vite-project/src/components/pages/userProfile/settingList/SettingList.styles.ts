import styled from "styled-components";

export const StyledSettingList = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 345px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    width: 420px;
  }
`;

export const StyledBtn = styled.button`
  margin-bottom: 5px;
  border: 1px solid #ceccb5;
  border-radius: 10px;
  background-color: white;
  padding: 10px 15px;
  width: 345px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.95px;
  color: ${({ theme }) => theme.text.main};

  span {
    font-weight: 400;
  }

  img {
    width: 8px;
    height: 16px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.button.background_grey};
  }

  @media (min-width: 1440px) {
    width: 420px;
    height: 53px;
  }
`;

export const StyledBtnText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
