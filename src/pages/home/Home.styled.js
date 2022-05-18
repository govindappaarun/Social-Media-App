import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  .container {
    padding: 0 1.5rem;
    align-items: start;
  }
  .header {
    position: sticky;
    top: 0;
    z-index: 9;
  }
`;

export const Main = styled.main`
  flex-basis: 49%;
`;
