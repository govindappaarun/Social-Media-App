import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "./auth.context";
import { ThemeProvider } from "./theme.context";
import IconProvider from "./icon.context";
import store from "../redux/store";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <IconProvider>{children}</IconProvider>
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};

export { Provider };
