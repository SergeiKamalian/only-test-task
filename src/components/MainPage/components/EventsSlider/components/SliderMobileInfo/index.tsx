import { memo } from "react";
import {
  StyledSliderMobileInfo,
  StyledSliderMoreInfoSlideTitle,
} from "./styles";

interface SliderMobileInfoProps {
  name: string;
}

export const SliderMobileInfo = memo(({ name }: SliderMobileInfoProps) => {
  return (
    <StyledSliderMobileInfo>
      <StyledSliderMoreInfoSlideTitle>{name}</StyledSliderMoreInfoSlideTitle>
    </StyledSliderMobileInfo>
  );
});
