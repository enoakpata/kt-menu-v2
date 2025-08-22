import { useState } from "react";
import { menu } from "../data/menu";
import MenuSection from "../components/MenuSection";

export default function Food() {
  const foods = menu.filter(m => m.category === "Food");

  // Group sections (Breakfast + Breakfast Sides together)
  const groupedSections: { [key: string]: string[] } = {
    "Breakfast & Sides": ["Breakfast", "Breakfast Sides"],
    Chicken: ["Chicken"],
    "Pepper Soup": ["Pepper Soup"],
    Pasta: ["Pasta"],
    Fish: ["Fish"],
    Sauce: ["Sauce"],
    Sides: ["Sides"],
    Food: ["Food"], 
  };

  const [selected, setSelected] = useState<string>("All");

  const sections = Object.keys(groupedSections);

  // Filtering logic
  const filteredItems = selected === "All"
    ? foods
    : foods.filter(m => groupedSections[selected]?.includes(m.section));

  return (
    <div>
      <h1>Food Menu</h1>

      {/* Filter buttons */}
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

      {/* Render sections */}
      {selected === "All"
        ? sections.map(section => (
            <div key={section}>
              <MenuSection
                title={section}
                items={foods.filter(m => groupedSections[section].includes(m.section))}
              />
              <div className="separator"></div>
            </div>
          ))
        : (
          <MenuSection
            title={selected}
            items={filteredItems}
          />
        )}
    </div>
  );
}
