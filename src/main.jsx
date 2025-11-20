import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./routes/App";

// CSS
import "./assets/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
