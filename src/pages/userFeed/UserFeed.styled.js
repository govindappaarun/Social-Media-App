import { Box } from "src/components";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  a {
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    .sort-action-btn > a {
      font-size: 1rem;
    }
  }
`;
