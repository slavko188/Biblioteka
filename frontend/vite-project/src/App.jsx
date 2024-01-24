import React from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
//pages
// import ShowBook from "./pages/ShowBook";
import Home from "./pages/Home";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
