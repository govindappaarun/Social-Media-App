import { Card } from "src/components";
import styled from "styled-components";

export const Wrapper = styled.div`
  .camera {
    background-color: ${(p) => p.theme.primary.main};
    border-radius: 5px;
    padding: 5px;
  }
  .wallpaper {
    pointer-events: none;
    height: 15rem;
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    img {
      height: 15rem;
    }
    .camera {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
  .profile-pic {
    display: inline-block;
    position: relative;
    transform: translateY(-50%);

    .camera {
      position: absolute;
      left: 55%;
      bottom: 0;
    }
    img {
      max-width: 15rem;
      clip-path: circle(35%);
    }
  }
  .posts-section {
    margin-top: 2rem;
    .heading {
      margin: 2rem 0;
      padding-bottom: 10px;
      border-bottom: 1px solid;
    }
  }
  .hidden {
    visibility: hidden;
    height: 0;
  }
`;

export const ProfileCard = styled(Card)`
  aspect-ratio: 1;
  box-shadow: 2px 3px 2px ${(p) => p.theme.background.bg30};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(p) => p.theme.background.bg40};
  overflow: hidden;
`;
