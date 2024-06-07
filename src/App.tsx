import Router from "./Router";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
}

export default App;
