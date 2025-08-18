import "./App.css";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="min-h-full h-full bg-[#0D1C27]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <
      <SideNav />
      <AdminDashboard /> */}
      {/* <Dashboard /> */}
      {/* <Home /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
