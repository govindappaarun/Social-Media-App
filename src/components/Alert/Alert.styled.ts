import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const StyledAlert = styled.div(({ color }) => [
  css`
    border-radius: 4px;
    margin: 0.5rem;
    padding: 1rem;
    position: relative;
    font-size: 1.2rem;
    color: white;
    display: inline-flex;
    align-items: start;
    width: 25rem;
    gap: 0.5rem;
    animation: ${appear} 0.5s linear;
    position: absolute;
    bottom: 20px;
    right: 0;
    .icon {
      flex-shrink: 0;
    }
  `,
  color === "primary" &&
    css`
      background-color: #1565c0;
    `,
  color === "secondary" &&
    css`
      background-color: #25b160;
    `,
  color === "warning" &&
    css`
      background-color: #1565c0;
    `,
  color === "success" &&
    css`
      background-color: #ff4238;
    `,
  color === "error" &&
    css`
      background-color: #1565c0;
    `,
]);
