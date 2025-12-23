// react
import { createRoot } from "react-dom/client";

// redux
import { Provider } from "react-redux";
import { store } from "./store.ts";

// App
import App from "./App.tsx";

// CSS
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
