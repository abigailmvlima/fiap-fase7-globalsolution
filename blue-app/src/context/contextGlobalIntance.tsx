import ContextNavigationProvider from "@context/contextNavigation";
import ContextThemeProvider from "@context/contextTheme";

const ContextGlobalIntance = ({ children }: any) => {
  return (
    <ContextThemeProvider>
      <ContextNavigationProvider>{children}</ContextNavigationProvider>
    </ContextThemeProvider>
  );
};

export default ContextGlobalIntance;
