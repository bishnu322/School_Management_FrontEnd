import ReactQueryClientProvider from "./QueryProvider/ReactQueryProvider.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ReactQueryClientProvider>
    <App />
  </ReactQueryClientProvider>
);
