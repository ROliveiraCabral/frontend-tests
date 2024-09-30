import { Routes, Route } from "react-router-dom";
import { Login } from "./Login/index";
import { Dashboard } from "./Dashboard";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
