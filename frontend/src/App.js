import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Top from "./twitter/pages/Top";
import Signup from "./twitter/pages/Signup";

const App = () => (
  <div>
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Top />} />
          <Route exact path="/home" element={<h1>home</h1>} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
