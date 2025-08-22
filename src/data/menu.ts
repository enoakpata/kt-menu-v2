export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: string;
  category: "Food" | "Drinks";
  section: string;
}

export const menu: MenuItem[] = [
  // ================= FOOD =================
  // Breakfast
  { id: 1, name: "English Breakfast", description: "Toast bread, Eggs, Sausages, Baked beans", price: "15000", category: "Food", section: "Breakfast" },
  { id: 2, name: "American Breakfast", description: "Eggs, sausages, baked beans served with Pancakes/Waffles or Crepe", price: "15000", category: "Food", section: "Breakfast" },
  { id: 3, name: "Not So English Breakfast", description: "French toast, baked beans, sausages with sautéed tomatoes", price: "15000", category: "Food", section: "Breakfast" },
  { id: 4, name: "Nigerian Breakfast", description: "Boiled yam and Egg Sauce OR Fried yam and Egg Sauce", price: "15000", category: "Food", section: "Breakfast" },
  { id: 5, name: "French Toast", price: "5000", category: "Food", section: "Breakfast" },
  { id: 6, name: "Waffles", price: "5000", category: "Food", section: "Breakfast" },

  // Breakfast Sides
  { id: 7, name: "Eggs", price: "6500", category: "Food", section: "Breakfast Sides" },
  { id: 8, name: "Pancakes", price: "5000", category: "Food", section: "Breakfast Sides" },
  { id: 9, name: "Sausages", price: "3000", category: "Food", section: "Breakfast Sides" },

  // Sandwiches
  { id: 10, name: "Club Sandwich", description: "Triple-stacked toasted bread with chicken, lettuce, tomatoes, eggs, cheese & mayo. Served with Fries or Wedges", price: "18000", category: "Food", section: "Sandwiches" },
  { id: 11, name: "Chicken Burger", description: "Grilled chicken patty, lettuce, tomato, cheese & mayo in a toasted bun. Served with Fries or Wedges", price: "20500", category: "Food", section: "Sandwiches" },
  { id: 12, name: "Beef Burger", description: "Juicy beef patty, cheese, lettuce, tomato, onions & house sauce in a toasted bun. Served with Fries or Wedges", price: "20500", category: "Food", section: "Sandwiches" },

  // Chicken
  { id: 13, name: "Barbecue Chicken", description: "Grilled chicken marinated in smoky BBQ sauce. Served with Fries/Wedges/Rice", price: "20000", category: "Food", section: "Chicken" },
  { id: 14, name: "Grilled Chicken", description: "Juicy grilled chicken thigh. Served with Fries/Wedges/Rice", price: "18000", category: "Food", section: "Chicken" },
  { id: 15, name: "Chicken Wings", description: "Juicy wings tossed in BBQ or spicy sauce. Served with Fries/Wedges/Rice", price: "18500", category: "Food", section: "Chicken" },
  { id: 16, name: "Fried Chicken", description: "Golden crispy chicken. Served with Fries/Wedges/Rice", price: "20000", category: "Food", section: "Chicken" },
  { id: 17, name: "Peppered Chicken", description: "Grilled chicken in spicy Nigerian pepper sauce. Served with Fries/Wedges/Rice", price: "20000", category: "Food", section: "Chicken" },

  // Pepper Soup
  { id: 18, name: "Fish Pepper Soup", description: "Spicy soup with croaker fish & herbs. Served with Rice", price: "30000", category: "Food", section: "Pepper Soup" },
  { id: 19, name: "Chicken Pepper Soup", description: "Pepper soup with chicken pieces & local spices. Served with Rice", price: "24000", category: "Food", section: "Pepper Soup" },
  { id: 20, name: "Turkey Pepper Soup", description: "Spicy broth with turkey chunks & herbs. Served with Rice", price: "26000", category: "Food", section: "Pepper Soup" },
  { id: 21, name: "Goat Meat Pepper Soup", description: "Spicy broth with tender goat meat & spices. Served with Rice", price: "24000", category: "Food", section: "Pepper Soup" },

  // Pasta
  { id: 22, name: "Alfredo Pasta", description: "Fettuccine in Alfredo sauce with chicken or shrimp", price: "26000", category: "Food", section: "Pasta" },
  { id: 23, name: "Spaghetti Bolognaise", description: "Spaghetti in tomato & beef sauce, topped with cheese. Served with chicken or turkey", price: "26000", category: "Food", section: "Pasta" },
  { id: 24, name: "Carbonara Pasta", description: "Creamy pasta with cheese, garlic & bacon. Served with chicken or turkey", price: "26000", category: "Food", section: "Pasta" },
  { id: 25, name: "Jollof Spaghetti", description: "Spaghetti in pepper-tomato sauce. Served with chicken or turkey", price: "12000", category: "Food", section: "Pasta" },

  // Fish
  { id: 26, name: "Grilled Fish", description: "Whole fish marinated in Nigerian spices, grilled to perfection. Served with Fries/Wedges/Rice", price: "31000", category: "Food", section: "Fish" },
  { id: 27, name: "Fried Pepper Fish", description: "Deep-fried fish in spicy pepper sauce. Served with Fries/Wedges/Rice", price: "24000", category: "Food", section: "Fish" },

  // Sauce
  { id: 28, name: "Chicken Sauce", description: "Chicken chunks in tomato-based sauce with onions and bell peppers. Served with Fries/Wedges/Rice", price: "15000", category: "Food", section: "Sauce" },
  { id: 29, name: "Chicken Curry", description: "Chicken curry with mixed veggies. Served with Fries/Wedges/Rice", price: "12000", category: "Food", section: "Sauce" },
  { id: 30, name: "Turkey Stew", description: "Rich tomato stew with turkey portions. Served with Fries/Wedges/Rice", price: "15000", category: "Food", section: "Sauce" },
  { id: 31, name: "Indomie", description: "Stir-fried noodles. Served with Chicken/Turkey/Egg", price: "12000", category: "Food", section: "Sauce" },

  // Sides
  { id: 32, name: "White Rice", price: "10000", category: "Food", section: "Sides" },
  { id: 33, name: "Jollof Rice", price: "12000", category: "Food", section: "Sides" },
  { id: 34, name: "Chinese Fried Rice", price: "15000", category: "Food", section: "Sides" },
  { id: 35, name: "Special Fried Rice", price: "16000", category: "Food", section: "Sides" },
  { id: 36, name: "Fried Rice", price: "14000", category: "Food", section: "Sides" },
  { id: 37, name: "French Fries", price: "12000", category: "Food", section: "Sides" },
  { id: 38, name: "Yam Fries", price: "12000", category: "Food", section: "Sides" },
  { id: 39, name: "Plantain", price: "8000", category: "Food", section: "Sides" },
  { id: 40, name: "Potato Wedges", price: "13000", category: "Food", section: "Sides" },

  // ================= DRINKS =================
  // Bottled
  { id: 100, name: "Hennesy VSOP", price: "140000", category: "Drinks", section: "Bottled" },
  { id: 101, name: "Hennesy VS", price: "100000", category: "Drinks", section: "Bottled" },
  { id: 102, name: "Hennesy (Small)", price: "50000", category: "Drinks", section: "Bottled" },
  { id: 103, name: "Jameson Small", price: "15000", category: "Drinks", section: "Bottled" },
  { id: 104, name: "Jameson Big", price: "40000", category: "Drinks", section: "Bottled" },
  { id: 105, name: "Jameson Black Barrel", price: "60000", category: "Drinks", section: "Bottled" },
  { id: 106, name: "Four Cousins White", price: "30000", category: "Drinks", section: "Bottled" },
  { id: 107, name: "Four Cousins Red", price: "30000", category: "Drinks", section: "Bottled" },
  { id: 108, name: "Four Cousins Sweet Rose", price: "30000", category: "Drinks", section: "Bottled" },
  { id: 109, name: "Gordons Small", price: "6000", category: "Drinks", section: "Bottled" },
  { id: 110, name: "Absolute Vodka Small", price: "6000", category: "Drinks", section: "Bottled" },
  { id: 111, name: "Agor", price: "30000", category: "Drinks", section: "Bottled" },
  { id: 112, name: "Carlo Rossi Red", price: "30000", category: "Drinks", section: "Bottled" },
  { id: 113, name: "Nederburg White", price: "40000", category: "Drinks", section: "Bottled" },
  { id: 114, name: "Nederburg Red", price: "40000", category: "Drinks", section: "Bottled" },
  { id: 115, name: "Guinness Stout Big Bottle", price: "4000", category: "Drinks", section: "Bottled" },
  { id: 116, name: "Glenfiddich 12 Years", price: "60000", category: "Drinks", section: "Bottled" },
  { id: 117, name: "Glenfiddich 15 Years", price: "120000", category: "Drinks", section: "Bottled" },
  { id: 118, name: "Glenfiddich 18 Years", price: "140000", category: "Drinks", section: "Bottled" },
  { id: 119, name: "Martini Big", price: "50000", category: "Drinks", section: "Bottled" },
  { id: 120, name: "Ciroc Vodka Big", price: "50000", category: "Drinks", section: "Bottled" },
  { id: 121, name: "Heineken", price: "3000", category: "Drinks", section: "Bottled" },

  // Cocktails
  { id: 130, name: "Long Island", description: "Vodka, gin, rum, tequila, triple sec, cola", price: "12000", category: "Drinks", section: "Cocktails" },
  { id: 131, name: "Elephant Island", description: "Blend of Bacardi, Vodka and Gin", price: "12000", category: "Drinks", section: "Cocktails" },
  { id: 132, name: "Frozen Margarita", description: "Tequila, lemon, triple sec blended with ice", price: "12000", category: "Drinks", section: "Cocktails" },
  { id: 133, name: "Strawberry Daiquiri", description: "Strawberries, Bacardi and lemon blended frozen", price: "12000", category: "Drinks", section: "Cocktails" },
  { id: 134, name: "Pina Colada", description: "Coconut and pineapple mixed with Bacardi", price: "12000", category: "Drinks", section: "Cocktails" },
  { id: 135, name: "Look For Star", description: "Gin, Bacardi, vodka, tequila, mint, Sprite", price: "12000", category: "Drinks", section: "Cocktails" },
  { id: 136, name: "Tequila Sunrise", description: "Tequila, orange juice, grenadine", price: "12000", category: "Drinks", section: "Cocktails" },
  { id: 137, name: "Mojito", description: "Fresh mint, rum, lime, lemon and soda", price: "12000", category: "Drinks", section: "Cocktails" },

  // Mocktails
  { id: 140, name: "Chapman", description: "Lemon-lime soda, grenadine, citrus splash", price: "10000", category: "Drinks", section: "Mocktails" },
  { id: 141, name: "Virgin Pina Colada", description: "Creamy coconut and pineapple drink", price: "10000", category: "Drinks", section: "Mocktails" },
  { id: 142, name: "Virgin Strawberry Daiquiri", description: "Strawberries and lemon blended frozen", price: "10000", category: "Drinks", section: "Mocktails" },
  { id: 143, name: "Virgin Mojito", description: "Fresh mint, lime, lemon and soda", price: "10000", category: "Drinks", section: "Mocktails" },

  // Hot Drinks
  { id: 150, name: "Coffee", price: "5000", category: "Drinks", section: "Hot Drinks" },
  { id: 151, name: "Hot Chocolate", price: "5000", category: "Drinks", section: "Hot Drinks" },

  // Canned
  { id: 160, name: "Chivita Juice", price: "3000", category: "Drinks", section: "Canned" },
  { id: 161, name: "Sprite Can", price: "1500", category: "Drinks", section: "Canned" },
  { id: 162, name: "Fanta Can", price: "1500", category: "Drinks", section: "Canned" },
  { id: 163, name: "Malta Guinness", price: "2000", category: "Drinks", section: "Canned" },
  { id: 164, name: "Coke Can", price: "1500", category: "Drinks", section: "Canned" },
  { id: 165, name: "Powerhorse", price: "3000", category: "Drinks", section: "Canned" },
  { id: 166, name: "Schweppes Tonic Water", price: "1500", category: "Drinks", section: "Canned" },
  { id: 167, name: "Schweppes Soda Water", price: "1500", category: "Drinks", section: "Canned" },
  { id: 168, name: "Schweppes Chapman", price: "1500", category: "Drinks", section: "Canned" },
  { id: 169, name: "Schweppes Bitter Lemon", price: "1500", category: "Drinks", section: "Canned" },
  { id: 170, name: "Schweppes Mojito", price: "1500", category: "Drinks", section: "Canned" },
];
