import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import AuthPages from "./pages/AuthPages";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      Ovo je App
      <div>
        <Outlet />
        <AuthPages />
      </div>
    </div>
  );
}
export default App;
