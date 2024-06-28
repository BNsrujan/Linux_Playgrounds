import React from "react";
import { Nav, Cards, Login, Terminals } from "./components";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="relative bg-sky-50">
        <ConditionalNav />
        <Routes>
          <Route path="/login" element={<Login className="  flex justify-center items-center" />} />
          <Route path="/" element={<Cards className="bg-primary" />} />
          <Route path="/terminal/:os" element={<Terminals />} />
        </Routes>
      </div>
    </Router>
  );
};

const ConditionalNav = () => {
  const location = useLocation();
  return location.pathname === '/' ? <Nav className="fixed z-10" /> : null;
};

export default App;
