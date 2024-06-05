import "./index.css";
import "./App.css";
import "./Components/Navbar.jsx";

import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Courses from "./Courses.jsx";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
