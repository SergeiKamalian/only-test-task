import { memo, ReactNode } from "react";
import { StyledContainer } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

export const Container = memo((props: ContainerProps) => {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
});
