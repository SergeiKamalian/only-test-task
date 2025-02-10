import styled from "styled-components";

export const StyledCircleSliderArrows = styled.div`
  position: absolute;
  left: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  bottom: 0;
  /* bottom: -25px; */
`;
export const StyledLabel = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #42567a;
`;
export const StyledArrowsRow = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledCircleSliderArrow = styled.button`
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #42567a80;
  background: none;
  cursor: pointer;
  transition: all 0.3s;
  * {
    transition: all 0.3s;
  }

  &:hover {
    background: #42567a05;
  }

  &:disabled {
    cursor: unset;
    border-color: #42567a50;
    &:hover {
      background: none;
    }
  }
`;
