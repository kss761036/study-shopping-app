import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link } from "react-router-dom";
import App from "./App";
import "./index.css";
import logo from "./assets/img/logo.svg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="font-pre mt-20">
        <header className="header h-20 fixed top-0 left-0 z-50 w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/">
              <img className="h-16" src={logo} alt="로고" />
            </Link>
          </div>
          <div className="max-w-7xl w-full mx-auto h-full flex items-center justify-end">
            <Link
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(43,123,255,1)] cursor-pointer text-white"
              to="/create">
              +
            </Link>
          </div>
        </header>
        <div className="max-w-7xl w-full mx-auto">
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
