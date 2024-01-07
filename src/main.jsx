import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthenContextProvider from "./context/AuthenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthenContextProvider>
    <App />
  </AuthenContextProvider>
);
