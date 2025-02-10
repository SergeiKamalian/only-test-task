import styled from "styled-components";

export const StyledEventsSliderWrapper = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  bottom: 2%;
  width: 100%;
  padding-inline: 50px;
  transition: opacity 0.5s ease, transform 0.5s ease-out;
  opacity: ${(p) => (p.$isVisible ? "1" : "0")};
  transform: ${(p) => (p.$isVisible ? "translateY(0px)" : "translateY(10px)")};
`;
