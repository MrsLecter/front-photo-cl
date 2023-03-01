import styled from "styled-components";

export const StyledFeedbacButtonList = styled.div`
  margin: 0 auto;
  width: 345px;
  color: ${({ theme }) => theme.text.main};
  font-family: "Futura";

  button {
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid $setting_button_border;
    background-color: white;
    padding: 10px 15px 9px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 5px;
  }

  button:hover {
    cursor: pointer;
    background-color: $button_background_grey;
  }

  @media (min-width: 1440px) {
    width: 420px;
    box-sizing: border-box;

    button {
      width: 420px;
    }
  }
`;

export const StyledFeedbackContent = styled.div`
  margin: 0px 15px 0px 10px;
  width: 257px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 1440px) {
    width: 420px;
  }
`;

export const StyledFeedbackSign = styled.img`
  margin-top: 5px;
  width: 25px;
  height: 30px;
`;

export const StyledFeedbackArrow = styled.img`
  margin: 9px 0px;
  width: 8px;
  height: 16px;
`;

export const StyledFeedbackOption = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  span {
    color: #015b08;
  }
`;

export const StyledFeedbackData = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.95px;
`;
