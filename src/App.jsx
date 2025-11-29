import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
