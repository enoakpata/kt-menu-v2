import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FoodMenu from "./pages/foodMenu";
import DrinksMenu from "./pages/drinksMenu";

function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-4 p-4 border-b">
        <Link to="/" className="text-lg font-semibold text-teal-600 hover:underline">
          Food
        </Link>
        <Link to="/drinks" className="text-lg font-semibold text-teal-600 hover:underline">
          Drinks
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<FoodMenu />} />
        <Route path="/drinks" element={<DrinksMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
