import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
import "../styles/welcome.css";

function WelcomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="z-10 text-center space-y-8">
        <img src={logo} alt="Logo" className="logo"/>

        <h1 className="text-4xl font-bold">KTavern Menu</h1>

        <div className="flex flex-col gap-4 items-center">
          <Link
            to="/food"
            className="no-underline px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-teal-200 transition"
          >
            Food Menu
          </Link>
          <Link
            to="/drinks"
            className="no-underline px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-teal-200 transition"
          >
            Drinks Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
