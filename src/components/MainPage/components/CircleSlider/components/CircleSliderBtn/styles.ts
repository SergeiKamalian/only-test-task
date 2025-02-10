import styled from "styled-components";

export const StyledCircleSliderBtnItem = styled.button<{
  $name: string;
  $isActive: boolean;
}>`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;

  &::after {
    max-width: ${(p) => (p.$isActive ? "fit-content" : "0px")};
    overflow: hidden;
    text-align: start;
    content: ${(p) => `'${p.$name}'`};
    position: absolute;
    left: calc(100% + 20px);
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    height: fit-content;
    background: none;
    font-size: 20px;
    font-weight: 30px;
    font-weight: 700;
    color: #42567a;
    transition: opacity 0.5s ease 0.8s;
    opacity: ${(p) => (p.$isActive ? 1 : 0)};
  }

  &:hover {
    > div {
      width: 100%;
      height: 100%;
      background: white;
      border: 1px solid #42567a50;
      > span {
        opacity: 1;
      }
    }
  }
`;
export const StyledInnerContent = styled.div<{ $isActive: boolean }>`
  width: ${(p) => (p.$isActive ? "100%" : "6px")};
  min-width: ${(p) => (p.$isActive ? "100%" : "6px")};
  height: ${(p) => (p.$isActive ? "100%" : "6px")};
  min-height: ${(p) => (p.$isActive ? "100%" : "6px")};
  background: ${(p) => (p.$isActive ? "white" : "#42567a")};
  border: 1px solid ${(p) => (p.$isActive ? "#42567a50" : "white")};
  transition: 300ms ease-in-out;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  > span {
    transition: 350ms ease-in-out;
    color: #42567a;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    opacity: ${(p) => (p.$isActive ? 1 : 0)};
  }
`;
