import styled from "styled-components";

export const Wrapper = styled.div`
  top: 7rem;
  position: sticky;
  flex-basis: 25%;

  min-width: 20rem;
  padding: 1rem;
  background-color: ${(p) => p.theme.base.main};
  color: ${(p) => p.theme.base.contrast};
  .links {
    border-bottom: 1px solid lightgray;
    padding: 2rem auto;
    padding-bottom: 3rem;
    a {
      padding: 1rem;
      font-size: 1.5rem;
      margin: 0.5rem 0;
      gap: 1rem;
    }
    a:hover {
      color: #e88c33;
      font-weight: 500;
    }
  }
`;
