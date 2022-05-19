import styled, { css } from "styled-components";

const StyledWrapper = styled.section`
  border: 1px solid ${(p) => p.theme.background.bg05};
  border-radius: 4px;
  padding: 5px 0px;
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0px 2px 4px ${(p) => p.theme.background.bg10};
  min-width: 35rem;
  max-width: 35rem;
  padding: 1rem;
`;

export { StyledWrapper as default };
