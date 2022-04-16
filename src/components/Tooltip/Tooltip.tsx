import { TooltipWrapper } from "./Tooltip.styled";
import clsx from "clsx";

export type TooltipProps = {
  children: React.ReactNode;
  title: string;
  right?: boolean;
  left?: boolean;
  bottom?: boolean;
  top?: boolean;
};

const Tooltip = ({
  children,
  title,
  right,
  left,
  top,
  bottom,
}: TooltipProps) => {
  return (
    <TooltipWrapper className="tip-container">
      {children}
      <span
        className={clsx("tooltip", {
          left: left,
          right: right,
          bottom: bottom,
          top: top,
        })}
      >
        {title}
      </span>
    </TooltipWrapper>
  );
};

export default Tooltip;
