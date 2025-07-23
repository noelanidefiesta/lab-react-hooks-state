import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./Cart";
import products from "./products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleBuyNow(product) {
    setCartItems([...cartItems, product]);
  }

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const appClass = isDarkMode ? "App dark-mode" : "App";

  return (
    <div className={appClass}>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <h1>Product Dashboard</h1>
      <Cart cartItems={cartItems} />
      <label>
        Filter by Category:
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Clothing">Clothing</option>
        </select>
      </label>
      <ProductList products={filteredProducts} onBuyNow={handleBuyNow} />
    </div>
  );
}

export default App;
