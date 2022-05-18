import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Fiverr from "./pages/Fiverr";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/fiverr" element={<Fiverr />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
