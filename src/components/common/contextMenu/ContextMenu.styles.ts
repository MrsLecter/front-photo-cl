import styled from "styled-components";

export const StyledContextHeader = styled.div`
  position: relative;
  margin-top: -8px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Futura";
  font-weight: 500;
  font-size: 22px;
  line-height: 28.2px;
`;

export const StyledContextMenuLarge = styled.div`
  margin: 0 auto;
  width: 420px;
  height: 185px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #2245e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  div:nth-child(2) {
    margin-bottom: 10px;
  }
`;

export const StyledItemLarge = styled.button`
  margin: 0 auto;
  width: 380px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #2245e3;
  background: white;
  font-family: "Futura";
  font-weight: 500;
  font-size: 22px;
  line-height: 28.2px;
  color: #3300cc;
`;

export const StyledContextMenu = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 228px;
  height: 120px;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.background.light};
  z-index: 10;

  img {
    width: 33px;
    height: 27px;
  }

  button:nth-child(1) {
    border-top-right-radius: 11px;
    border-top-left-radius: 11px;
  }

  button:hover {
    background-color: ${({ theme }) => theme.button.background_dark};
    cursor: pointer;
  }
`;

export const StyledItem = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 40px;
  border-bottom: 0.5px solid #aeaeae;
  color: black;
  padding-left: 14px;
  padding-right: 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;

export const StyledWrapper = styled.div`
  box-sizing: border-box;
  padding-left: 14px;
  padding-right: 9px;
  height: 40px;
  border-bottom-right-radius: 11px;
  border-bottom-left-radius: 11px;

  input {
    visibility: hidden;
  }

  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 205px;
    height: 40px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.button.background_dark};
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    width: 380px;
    height: 50px;
    border: 1px solid #2245e3;
    border-radius: 50px;

    label {
      margin: 0 auto;
      padding-top: 8px;
      padding-left: 40px;
      font-family: "Futura";
      font-weight: 500;
      font-size: 22px;
      line-height: 28.2px;
      color: #3300cc;
    }
  }
`;
