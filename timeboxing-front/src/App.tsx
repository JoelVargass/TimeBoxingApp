// src/AppRoutes.tsx
import { Route, Routes } from "react-router-dom";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import Home from "./page/dashboard/home";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default AppRoutes;
