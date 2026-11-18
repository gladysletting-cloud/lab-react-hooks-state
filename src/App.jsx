import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
const [darkMode, setDarkMode] = useState(false);
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);
      const handleAddToCart = (product) => {
        setCart([...cart, product]);
      };
  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className={darkMode ? 'App dark' : 'App light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    
      <label>Filter by Category: </label>
      <select
       value={selectedCategory}
       onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
       onAddToCart={handleAddToCart} 
       selectedCategory={selectedCategory} 
      />
      <Cart cart={cart} /> 

    </div>
  )
}

export default App
