import styled from "styled-components";

export const StyledEventsSliderArrow = styled.button<{
  $position: "next" | "prev";
}>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 0 15px #3877ee4a;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: ${(p) => (p.$position === "prev" ? "5px" : "unset")};
  right: ${(p) => (p.$position !== "prev" ? "5px" : "unset")};
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:disabled {
    display: none;
  }
`;
