import styled from "styled-components";

export const StyledDownloadMenu = styled.div`
  position: absolute;
  top: 264px;
  left: calc(50vw - 113px);
  width: 226px;
  height: 119px;
  border-radius: 11px;
  background-color: #f5f4f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button:nth-child(1) {
    border-bottom: 0.5px solid #aeaeae;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
  }

  button:nth-child(3) {
    border-top: 0.5px solid #aeaeae;
    border-bottom-left-radius: 11px;
    border-bottom-right-radius: 11px;
  }

  button:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.button.background_dark};
  }
`;

export const StyledDownloadItem = styled.button`
  padding: 10px 18px 9px 14px;
  width: 226px;
  height: 40px;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;

  img {
    width: 13px;
    height: 17px;
  }
`;
