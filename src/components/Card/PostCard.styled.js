import styled, { css } from "styled-components";
import Box from "../Box";

const StyledWrapper = styled.section(({ theme }) => [
  css`
    max-width: 25rem;
    border: 1px solid ${theme.background.bg05};
    border-radius: 4px;
    padding: 5px 0px;
    display: inline-flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0px 2px 4px ${theme.background.bg10};
    .avatar {
      cursor: pointer;
    }
  `,
]);

const Header = styled.header(({ theme }) => [
  css`
    padding: 5px;
    .img-round {
      width: 4rem;
    }
  `,
]);

const Main = styled.main``;

const Footer = styled(Box)``;

const Icon = styled.span(() => [
  css`
    font-size: 1.5rem;
    &:hover,
    .active {
      color: ${(p) => p.theme.error.main};
    }
  `,
]);

export default StyledWrapper;
export { Header, Footer, Main, Icon };
