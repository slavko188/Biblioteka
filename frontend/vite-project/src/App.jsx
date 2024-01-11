import React from "react";
import { Outlet } from "react-router-dom";
import ShowBook from "./pages/ShowBook";
import axios from "axios";
import Home from "./pages/Home";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <Home />
      <ShowBook />
      <Outlet />
    </div>
  );
}

export default App;
