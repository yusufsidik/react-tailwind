import { Route, Routes, Link } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
function App() {
  return (
    <>
      <ul className="flex justify-center gap-2 mt-3">
        <li className="text-slate-900 hover:opacity-70">
          <Link to="/">Home</Link>
        </li>
        <li className="text-slate-900 hover:opacity-70">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
