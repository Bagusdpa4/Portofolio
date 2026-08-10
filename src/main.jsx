import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./routes/App";
import { ThemeProvider } from "./context/ThemeContext";

// CSS
import "./assets/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
