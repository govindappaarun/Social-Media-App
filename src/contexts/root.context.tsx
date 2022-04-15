import { AuthProvider } from "./auth.context";
import { ThemeProvider } from "./theme.context";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export { Provider };
