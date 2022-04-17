import { AuthProvider } from "./auth.context";
import { ThemeProvider } from "./theme.context";
import IconProvider from "./icon.context";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <IconProvider>{children}</IconProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export { Provider };
