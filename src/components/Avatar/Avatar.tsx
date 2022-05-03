import { StyledAvatar } from "./Avatar.styled";
import clsx from "clsx";

export type AvatarProps = {
  size?: "sm" | "md" | "lg";
  text?: string;
  type: "img" | "span";
  src?: string;
  alt?: string;
  className?: string;
};

export default function Avatar({
  text,
  type,
  size,
  className,
  src,
  alt,
  ...rest
}: AvatarProps) {
  return (
    <StyledAvatar type={type} className={clsx(size, className)} {...rest}>
      {type === "span" ? text : <img src={src} alt={alt} />}
    </StyledAvatar>
  );
}
