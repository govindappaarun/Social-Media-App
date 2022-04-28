import styled from "styled-components";
import { Size } from "./types";
import { BoxProps } from "./Box";

export const StyledBox = styled.div<BoxProps>`
  position: relative;
  display: ${(p) => p.display || "block"};
  position: ${(p) => p.position || "relative"};
  flex-direction: ${(p) => p.direction || "row"};
  flex-wrap: ${(p) => p.wrap || "no-wrap"};

  gap: ${(p) => (p.gap ? Size[p.gap] : 0)};
  justify-content: ${(p) => p.justifyContent || "start"};
  align-items: ${(p) => p.alignItems || "strech"};
  align-self: ${(p) => p.alignSelf || "auto"};

  flex-grow: ${(p) => p.grow || 0};
  flex-shrink: ${(p) => p.shrink || 0};
  order: ${(p) => p.order || 0};
`;
