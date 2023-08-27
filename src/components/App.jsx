import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard";
import Login from "./Login";

function App() {
useEffect(() => {
},[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
