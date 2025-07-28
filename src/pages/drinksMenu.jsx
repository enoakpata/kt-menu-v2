import { useState } from "react";
import { menu } from "../data/drinksData";
import MenuSection from "../components/MenuSection";

const categories = ["All", ...menu.map((section) => section.title)];

export default function DrinksMenu() {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? menu : menu.filter(s => s.title === selected);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">K-Tavern Drinks Menu</h1>

      <div className="flex gap-4 overflow-x-auto mb-8 px-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`shrink-0 px-6 py-2 rounded-full border text-sm transition whitespace-nowrap ${
              selected === cat
                ? "bg-teal-600 text-white border-teal-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-teal-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.map((section, i) => (
        <MenuSection key={i} title={section.title} items={section.items} />
      ))}
    </div>
  );
}
