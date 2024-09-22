import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Vedio from "./pages/vedio/Vedio";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <NavBar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />

        <Route path="/vedio/:categoryId/:vedioId" element={<Vedio />} />
      </Routes>
    </div>
  );
}

export default App;
