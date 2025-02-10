import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { memo, useMemo, useState, useEffect, useRef } from "react";
import { mockData } from "../../../../data.mock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { StyledEventsSliderWrapper, StyledWrapper } from "./styles";
import {
  SliderMobileInfo,
  SliderNavigationItem,
  SliderSlideItem,
} from "./components";
import { useWindowSize } from "react-use";

interface EventsSliderProps {
  activePeriodId: number;
}

export const EventsSlider = memo(({ activePeriodId }: EventsSliderProps) => {
  const { width } = useWindowSize();

  const [isVisible, setIsVisible] = useState(true);
  const [currentPeriodId, setCurrentPeriodId] = useState(activePeriodId);
  const swiperRef = useRef<any>(null);
  const activePeriod = useMemo(
    () => mockData[currentPeriodId - 1],
    [currentPeriodId]
  );

  const slidesPerView = useMemo(() => {
    if (width > 991) return 3;
    if (width > 568) return 2;
    return 1.5;
  }, [width]);

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
      <SliderMobileInfo name={activePeriod.name} />
      <StyledWrapper>
        <SliderNavigationItem position="prev" />
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: ".slider-navigation-next",
            prevEl: ".slider-navigation-prev",
          }}
          pagination={
            // width <= 991 && {
            //   clickable: true,
            //   type: "bullets",
            // }
            { clickable: true, type: "bullets" }
          }
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
      </StyledWrapper>
    </StyledEventsSliderWrapper>
  );
});
