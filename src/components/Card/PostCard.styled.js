import styled, { css } from "styled-components";
import Box from "../Box";

const StyledWrapper = styled.section(({ theme }) => [
  css`
    max-width: 35rem;
    border: 1px solid ${theme.background.bg05};
    border-radius: 4px;
    padding: 5px 0px;
    display: inline-flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0px 2px 4px ${theme.background.bg10};
    margin-bottom: 2rem;
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

const Main = styled.main`
  img {
    min-height: 15rem;
    max-height: 15rem;
  }
  .content {
    padding: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Footer = styled(Box)``;

const Icon = styled.span(() => [
  css`
    color: ${(p) => p.theme.base.contrast};
    font-size: 1.5rem;
    &:hover,
    .active {
      color: ${(p) => p.theme.error.main};
    }
  `,
]);

export default StyledWrapper;
export { Header, Footer, Main, Icon };
