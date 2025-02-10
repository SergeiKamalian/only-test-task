import styled from "styled-components";

export const StyledSliderSlideItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledEventSlideYear = styled.span`
  font-family: "Bebas Neue", serif;
  font-size: 25px;
  font-weight: 400;
  color: #3877ee;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;
export const StyledEventSlideContent = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #42567a;

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;
