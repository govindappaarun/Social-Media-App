import { Box } from "src/components";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .img-round {
    width: 4rem;
  }
`;

const User = styled(Box)`
  display: inline-flex;
  background-color: ${(p) => p.theme.background.bg45};
  border-radius: 1rem;
  border: 1px solid ${(p) => p.theme.background.bg80};
  box-shadow: 0px 2px 4px ${(p) => p.theme.background.bg20};
  cursor: pointer;
  padding: 10px;
  .profile-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 10ch;
  }
`;

export { Wrapper as default, User };
