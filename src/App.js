import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./page/Users";
import Error404 from "./page/Error404";
import './styles.css';


function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element= {<Users />} />
        <Route path="error404" element= {<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
