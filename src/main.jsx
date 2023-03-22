import React from "react";
import ReactDOM from "react-dom/client";
import searchImages from "./Api";
import App from "./App";
import "./index.css";

searchImages();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
