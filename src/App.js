import './App.css';
import Login from './components/Login/Login';
import Forgot from './components/Login/Forgot';
import GeneralSignup from './components/Signup/GeneralSignup';
import AdminSignup from './components/Signup/AdminSignup';
import Join from './components/Join/Join';
import SelectType from './components/SelectType/SelectType';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/join" element={<Join />} />
          <Route path="/select" element={<SelectType />} />
          <Route path="/login" element={<Login />} />
          <Route path="/generalSignup" element={<GeneralSignup />} />
          <Route path="/adminSignup" element={<AdminSignup />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </Router>
  );
}

export default App;
