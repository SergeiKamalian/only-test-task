import styled from "styled-components";

export const StyledSliderMobileInfo = styled.div`
  display: none;
  flex-direction: column;
  border-bottom: 1px solid #c7cdd9;
  margin-bottom: 25px;
  padding-bottom: 25px;

  @media (max-width: 991px) {
    display: flex;
  }
`;
export const StyledSliderMoreInfoSlideTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #42567a;
`;
