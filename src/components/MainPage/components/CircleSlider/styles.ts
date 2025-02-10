import styled from "styled-components";

export const StyledCircleSliderWrapper = styled.div<{ $zoomScale: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  zoom: ${(p) => p.$zoomScale};
`;

export const StyledCircleSlider = styled.div<{ $rotate: number }>`
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid #42567a20;
  position: relative;
  rotate: ${(p) => `${-p.$rotate}deg`};
  transition: 0.7s ease-in-out;
`;

export const StyledSliderPoint = styled.div<{
  $angle: string;
  $btnRotate: number;
}>`
  width: 56px;
  height: 56px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.$angle})
    translateX(265px);

  > button {
    rotate: ${(p) => `${p.$btnRotate}deg`};
    transition: rotate 0.7s;
  }
`;
