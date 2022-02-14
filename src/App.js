import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home"
import Page2 from "./Component/Page2"

export default function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
       
          <Route index path="/" element={<Home />} />
          <Route path="page2" element={<Page2 />} />
          
      </Routes>
    </BrowserRouter>
    </div>
  );
}
