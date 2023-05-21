import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
