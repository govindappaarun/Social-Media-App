import styled, { css } from "styled-components";
import { AvatarProps } from "./Avatar";

export const StyledAvatar = styled.span<AvatarProps>`
  border-radius: 100%;
  border: 1px solid ${(p) => p.theme.primary.main};
  padding: 5px;
  flex-shrink: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 7.5rem;
    max-height: 7.5rem;
  }

  ${(p) =>
    p.type === "span" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      padding: 0;
    `}

  &:hover {
    box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.75);
  }

  &.sm {
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    line-height: 3.2rem;
  }

  &.md {
    font-size: 2.5rem;
    width: 5rem;
    height: 5rem;
    line-height: 5.2rem;
  }

  &.lg {
    font-size: 3rem;
    width: 7.5rem;
    height: 7.5rem;
    line-height: 7.5rem;
  }
`;
