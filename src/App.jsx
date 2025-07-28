import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FoodMenu from "./pages/foodMenu";
import DrinksMenu from "./pages/drinksMenu";
import WelcomePage from "./pages/welcome";
import '../src/styles/app.css';

function App() {
  return (
    <Router>
      {/*<nav className="flex justify-center gap-4 p-4 border-b">
        <Link to="/food" className="bubble1">
          Food
        </Link>
        <Link to="/drinks" className="bubble1">
          Drinks
        </Link>
      </nav>*/}


      <Routes>
        <Route path="/" element ={<WelcomePage/>} />
        <Route path="/food" element={<FoodMenu />} />
        <Route path="/drinks" element={<DrinksMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
