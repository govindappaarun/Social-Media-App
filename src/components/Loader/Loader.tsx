import React from "react";
import { StyledLoader, StyledWrapper } from "./Loader.styled";

export type Props = {
  show: boolean;
};

function Loader({ show }: Props) {
  return show ? (
    <>
      <StyledWrapper />
      <StyledLoader />
    </>
  ) : null;
}

export default Loader;
