import { memo } from "react";
import { MockDataItemEvent } from "../../../../../../types";
import {
  StyledEventSlideContent,
  StyledEventSlideYear,
  StyledSliderSlideItem,
} from "./styles";
type SliderSlideItemProps = MockDataItemEvent;

export const SliderSlideItem = memo((props: SliderSlideItemProps) => {
  const { value, year } = props;
  return (
    <StyledSliderSlideItem>
      <StyledEventSlideYear>{year}</StyledEventSlideYear>
      <StyledEventSlideContent>{value}</StyledEventSlideContent>
    </StyledSliderSlideItem>
  );
});
