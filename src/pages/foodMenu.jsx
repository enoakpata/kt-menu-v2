import { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../data/foodData";
import MenuSection from "../components/MenuSection";
import '../styles/custom.css';

const categories = ["All", ...menu.map((section) => section.title)];

export default function FoodMenu() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? menu : menu.filter(s => s.title === selected);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header + Drinks Button */}
      <div className=" flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-teal-700">K-Tavern Food Menu</h1>
        <Link to="/drinks" className="no-underline bubble1">
          Drinks
        </Link>
      </div>

      {/* Category Bubbles */}
      <div className="flex gap-4 overflow-x-auto mb-8 px-2 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`bubble ${selected === cat ? 'bg-teal-600 text-white' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Render Menu */}
      {filtered.map((section, i) => (
        <MenuSection key={i} title={section.title} items={section.items} />
      ))}
    </div>
  );
}
