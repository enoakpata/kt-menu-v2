import { Link } from "react-router-dom";
import logo from "../assets/kt logo.png"; // adjust if your file is elsewhere

export default function Home() {
  return (
    <div className="home">
      {/* Logo */}
      <img src={logo} alt="Hotel Logo" className="home-logo" />

      {/* Buttons */}
      <div className="home-buttons">
        <Link to="/food">
          <button className="home-btn">Food Menu</button>
        </Link>
        <Link to="/drinks">
          <button className="home-btn">Drinks Menu</button>
        </Link>
      </div>
    </div>
  );
}
