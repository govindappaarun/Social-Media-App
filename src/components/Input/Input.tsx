import React from "react";
import { StyledInput } from "./Input.styled";

export type InputProps = {
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
  min?: number;
  max?: number;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, InputProps>(
  (
    { type, placeholder, children, min, max, name, onChange, value, ...rest },
    ref
  ) => {
    return (
      <StyledInput type={type} {...rest}>
        {children}
        <input
          ref={ref}
          type={type || "text"}
          placeholder={placeholder}
          min={min}
          max={max}
          name={name}
          onChange={onChange}
          value={value}
        />
      </StyledInput>
    );
  }
);

export default Input;
