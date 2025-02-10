import styled from "styled-components";

export const StyledEventsSliderWrapper = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  bottom: 2%;
  width: 100%;
  padding-inline: 50px;
  transition: opacity 0.5s ease, transform 0.5s ease-out;
  opacity: ${(p) => (p.$isVisible ? "1" : "0")};
  transform: ${(p) => (p.$isVisible ? "translateY(0px)" : "translateY(10px)")};

  @media (max-width: 991px) {
    position: relative;
    bottom: unset;
    padding: 0;
  }
`;
export const StyledWrapper = styled.div`
  width: 100%;
  .swiper {
    @media (max-width: 991px) {
      overflow: unset;
    }
  }
  .swiper-pagination {
    bottom: -60px;
    .swiper-pagination-bullet {
      background: #42567a;
      margin: 0 5px;
    }
    .swiper-pagination-bullet-active {
      background: #42567a;
    }
  }
`;
