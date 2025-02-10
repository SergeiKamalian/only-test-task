import styled from "styled-components";

export const StyledCircleSliderYears = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 50px;

  @media (max-width: 991px) {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    gap: 30px;
    margin: 0 auto;
  }
`;
export const StyledPeriodYearFrom = styled.span`
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  color: #3877ee;

  @media (max-width: 991px) {
    font-size: 100px;
    line-height: normal;
  }
  @media (max-width: 568px) {
    font-size: 56px;
  }
`;

export const StyledPeriodYearTo = styled(StyledPeriodYearFrom)`
  color: #ef5da7;
`;
