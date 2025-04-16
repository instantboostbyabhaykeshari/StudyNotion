import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Pages/Home";
import Navbar from './Components/Common/Navbar';
import Catalog from './Pages/Catalog';
import Dashboard from './Pages/Dashboard.jsx';

import './App.css';
import SignupForm from './Components/Core/Auth/SignupForm';
import Template from './Components/Core/Auth/Template';
import Signup from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import VerifyEmail from './Pages/VerifyEmail.jsx';

function App() {
  const location = useLocation();
  // console.log(location);
  // localStorage.removeItem("token");
  return (
    <div>
      <Navbar backgroundColor={location.pathname.includes("/catalog") ? ("#161D29") : ("#000814") }/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
        <Route path="catalog/:catalogName" element={<Catalog/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
