import { LinkButton } from "src/components/Button";

export default function Welcome() {
  return (
    <div>
      <LinkButton color="secondary" to="/home">
        Home
      </LinkButton>
    </div>
  );
}
