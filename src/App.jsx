import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"
// import Home from "./pages/Home";
// import AdminLogin from "./pages/Admin/AdminLogin";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
import RequiredAuth from "./hoc/RequiredAuth";
// import Reports from "./pages/Admin/Reports";
// import Movies from "./pages/Movies";
import Table from "./components/Table";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Tablelogin"
            element={
              <RequiredAuth>
                <Table />
              </RequiredAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
