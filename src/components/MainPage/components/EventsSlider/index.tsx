import { memo, useMemo, useState, useEffect, useRef } from "react";
import { mockData } from "../../../../data.mock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { StyledEventsSliderWrapper } from "./styles";
import { SliderNavigationItem, SliderSlideItem } from "./components";

interface EventsSliderProps {
  activePeriodId: number;
}

export const EventsSlider = memo(({ activePeriodId }: EventsSliderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPeriodId, setCurrentPeriodId] = useState(activePeriodId);
  const swiperRef = useRef<any>(null);
  const activePeriod = useMemo(
    () => mockData[currentPeriodId - 1],
    [currentPeriodId]
  );

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(0);
      }
      setCurrentPeriodId(activePeriodId);
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [activePeriodId]);

  return (
    <StyledEventsSliderWrapper $isVisible={isVisible}>
      <SliderNavigationItem position="prev" />
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".slider-navigation-next",
          prevEl: ".slider-navigation-prev",
        }}
        // @ts-ignore
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {activePeriod.events.map((event) => (
          <SwiperSlide key={event.id}>
            <SliderSlideItem {...event} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigationItem position="next" />
    </StyledEventsSliderWrapper>
  );
});
