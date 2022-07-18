import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { MediaProvider } from "./Context/MediaQueryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaProvider>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </MediaProvider>
  </React.StrictMode>
);
