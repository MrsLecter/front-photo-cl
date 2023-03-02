import styled from "styled-components";

export const StyledFramePanel = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 320px;
  bottom: 0px;
  width: 375px;
  background-color: white;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const StyledFrameHeader = styled.div`
  color: ${({ theme }) => theme.frame.window_element};
  border-bottom: 1px solid #e2e0d9;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: "Futura";
  font-weight: 400;
  font-size: 18px;
  line-height: 20.51px;
  color: ${({ theme }) => theme.frame.window_element};
  padding: 0px 20px;
  margin-bottom: 15px;
`;

export const StyledFramedEditorCut = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 104px;
  padding: 0;
  border: none;
  background-color: transparent;
  margin-bottom: 9px;

  img {
    width: 100%;
    height: 20px;
  }
`;

export const StyledFrameContent = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledFrameName = styled.div`
  font-family: "Termina";
  font-weight: 700;
  font-size: 22px;
  line-height: 26.4px;
  color: ${({ theme }) => theme.text.main};
  margin-bottom: 13px;
`;

export const StyledFrameRate = styled.div`
  font-family: "Futura";
  font-weight: 500;
  font-size: 14px;
  line-height: 17.95px;
  color: ${({ theme }) => theme.text.main};
  display: flex;
  flex-direction: row;

  > div {
    width: 84px;
    height: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 14px;

    > img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const StyledFrameInfo = styled.div`
  font-family: "Futura";
  font-weight: 400;
  font-size: 14px;
  line-height: 17.95px;
  color: ${({ theme }) => theme.text.main};
  text-transform: capitalize;
  margin-bottom: 19px;
`;

export const StyledFrameColors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 19px;
`;

export const StyledFrameColorCircle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #cfcdb5;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StyledColorCircleBorder = styled.div<{ active: boolean }>`
  display: block;
  padding-top: 3px;
  padding-left: 3px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.frame.window_element : "white")};

  &:hover {
    border: 1px solid ${({ theme }) => theme.frame.window_element};
  }
`;

export const StyledFrameDimentions = styled.div`
  width: 345px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledFramePanelProperty = styled.button<{ actual: boolean }>`
  padding: 12px 5px;
  margin-right: 10px;
  margin-bottom: 20px;
  font-family: "Futura";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid
    ${({ theme, actual }) =>
      actual ? theme.frame.window_element : theme.frame.border};
  color: ${({ theme, actual }) =>
    actual ? theme.frame.window_element : theme.text.main};
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    font-weight: 500;
    color: ${({ theme }) => theme.frame.window_element};
    border: 1px solid ${({ theme }) => theme.frame.window_element};
  }
`;
