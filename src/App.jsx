import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (<div>
        <div className="bg-slate-900">
          <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </div>
        <Routes>
          <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
  </div>)
};

export default App;
