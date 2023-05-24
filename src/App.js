import { Route, Routes } from "react-router-dom";

import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
  );
}

export default App;
