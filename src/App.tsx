import "./App.css";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import Students from "./pages/Students";
import ManagePayment from "./pages/ManagePayment";
import Attendance from "./pages/Attendance";

const App = () => {
  return (
    <div className="h-full bg-[#0D1C27]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<Students />} />
          <Route path="/payment" element={<ManagePayment />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
