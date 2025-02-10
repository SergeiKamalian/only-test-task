import { memo } from "react";
import { StyledEventsSliderArrow } from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface SliderNavigationItemProps {
  position: "next" | "prev";
}

export const SliderNavigationItem = memo((props: SliderNavigationItemProps) => {
  const { position } = props;
  return (
    <StyledEventsSliderArrow
      $position={position}
      className={`slider-navigation-${position}`}
    >
      {position === "next" ? (
        <MdKeyboardArrowRight size={25} color="#3877EE" />
      ) : (
        <MdKeyboardArrowLeft size={25} color="#3877EE" />
      )}
    </StyledEventsSliderArrow>
  );
});
