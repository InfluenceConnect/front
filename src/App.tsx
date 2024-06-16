import Router from "./Router";
import { SessionContextProvider } from "./contexts/SessionContext";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <SessionContextProvider>
        <Router />
      </SessionContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
