import Router from "./Router";
import { RegisterContextProvider } from "./contexts/registerContext";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <RegisterContextProvider>
        <Router />
      </RegisterContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
