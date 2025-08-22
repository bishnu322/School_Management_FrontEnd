import "./App.css";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router";
import Students from "./pages/Students";
import ManagePayment from "./pages/ManagePayment";
import Attendance from "./pages/Attendance";

const App = () => {
  return (
    <div className="h-full bg-[#1E2938]">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/student" element={<Students />} />
          <Route path="/payment" element={<ManagePayment />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
