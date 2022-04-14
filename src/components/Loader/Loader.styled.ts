import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  border: 1rem solid #66b7f1;
  border-top: 1rem solid #9736e8;
  border-bottom: 1rem solid #9736e8;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: 1.5s ${rotate} infinite linear;
`;

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(p) => p.theme.background.bg05};
  cursor: wait;
`;
