// react
import { createRoot } from "react-dom/client";

// redux
import { Provider } from "react-redux";
import { redux } from "./store.ts";

// App
import App from "./App.tsx";

// CSS
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={redux}>
    <App />
  </Provider>
);
