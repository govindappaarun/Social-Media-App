import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover > .tooltip {
    visibility: visible;
  }

  .tooltip {
    position: absolute;
    display: inline-block;
    color: white;
    background-color: black;
    padding: 5px;
    top: -5px;
    margin-left: 5px;
    min-width: 10rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    min-height: 1.5rem;
    visibility: hidden;

    &.right {
      left: 100%;
      right: 0;
      margin-left: 10px;
    }

    &.left {
      margin-right: 10px;
      left: -10px;
      transform: translateX(-100%);
    }

    &.bottom {
      top: 100%;
      bottom: 0;
      margin-top: 10px;
      margin-left: 0;
    }

    &.top {
      margin-left: 0;
      margin-top: -10px;
      top: 0;
      left: 0;
      transform: translate(0, -100%);
    }
  }
`;

export { TooltipWrapper };
