import styled from "styled-components";

export const StyledMainPageWrapper = styled.main`
  width: 100%;
  min-height: 100svh;
  max-height: 100svh;
  border-inline: 1px solid #42567a20;
  position: relative;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background: #42567a20;

    @media (max-width: 991px) {
      display: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 1px;
    height: 100%;
    background: #42567a20;

    @media (max-width: 991px) {
      display: none;
    }
  }
`;
export const StyledMainPageH1 = styled.h1`
  margin: 0;
  color: #42567a;
  font-weight: 700;
  font-size: 56px;
  line-height: #42567a;
  width: fit-content;
  padding-left: 50px;
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  z-index: 1;

  @media (max-width: 991px) {
    position: relative;
    top: unset;
    transform: none;
    padding: 0;
    font-size: 36px;
  }
  @media (max-width: 568px) {
    font-size: 20px;
  }

  &:before {
    content: "";
    position: absolute;
    left: -1px;
    top: 12%;
    width: 5px;
    height: 81%;
    background: linear-gradient(
      180deg,
      rgba(56, 119, 238, 1) 21%,
      rgba(239, 93, 168, 1) 84%
    );
    @media (max-width: 991px) {
      display: none;
    }
  }
`;
