import { useState } from "react";
import { menu } from "../data/menu";
import MenuSection from "../components/MenuSection";

export default function Drinks() {
  const sections = Array.from(new Set(menu.filter(m => m.category === "Drinks").map(m => m.section)));

  const [selected, setSelected] = useState<string>("All");

  const filtered = selected === "All"
    ? menu.filter(m => m.category === "Drinks")
    : menu.filter(m => m.category === "Drinks" && m.section === selected);

  return (
    <div>
      <h1>Drinks Menu</h1>

      {/* Buttons */}
      <div className="menu-buttons">
        <button
          onClick={() => setSelected("All")}
          className={selected === "All" ? "active" : ""}
        >
          All
        </button>
        {sections.map(section => (
          <button
            key={section}
            onClick={() => setSelected(section)}
            className={selected === section ? "active" : ""}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Items */}
      <MenuSection title={selected} items={filtered} />
    </div>
  );
}
