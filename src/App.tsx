import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fiverr from "./pages/Fiverr/Fiverr";

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
