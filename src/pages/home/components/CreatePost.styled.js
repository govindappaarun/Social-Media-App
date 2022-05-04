import styled, { css } from "styled-components";
import { Box } from "src/components";

const Wrapper = styled.section`
  border: 1px solid ${(p) => p.theme.background.bg05};
  border-radius: 4px;
  padding: 10px;
  display: inline-flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0px 2px 4px ${(p) => p.theme.background.bg10};
  min-width: 30rem;
  min-height: 15rem;

  .img-preview {
    max-height: 250px;
    width: 100%;
    object-fit: cover;
  }

  .hidden {
    visibility: hidden;
    height: 0;
  }
  .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

const Header = styled.header(({ theme }) => [
  css`
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
]);

const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 5px;
  border: 1px solid ${(p) => p.theme.background.bg20};
  max-height: 20rem;
  overflow-y: auto;
`;

const Footer = styled(Box)`
  padding: 0.5rem 2rem;
`;

export { Wrapper, Header, Footer, Main };
