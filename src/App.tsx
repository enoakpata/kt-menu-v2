import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Food from "./pages/food";
import Drinks from "./pages/drinks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food" element={<Food />} />
      <Route path="/drinks" element={<Drinks />} />
    </Routes>
  );
}

export default App;
