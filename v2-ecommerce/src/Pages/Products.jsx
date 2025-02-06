import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "../Components/ProductCard";

export default function Products() {
  //create a state variable and a function to update that variable.
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //a hook that allows you to perform side effects in your functional components
  useEffect(() => {
    fetch("http://localhost:3308/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set filteredProducts to the fetched data
      })
      .catch((error) => {
        console.error("error fetching products", error);
      });
  }, []);

  // Function to filter products based on category
  const filterProducts = (category) => {
    if (category === "all") {
      // Show all products
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      // Show filtered products
      setFilteredProducts(filtered);
    }
  };

  //  buttons to filter and display a list of products by category, showing each product's image, name, description, and price.
  return (
    <div className="container">
      <div id="buttons">
        <button className="btn" onClick={() => filterProducts("all")}>
          Show All
        </button>
        <button className="btn" onClick={() => filterProducts("Audio")}>
          Audio
        </button>
        <button className="btn" onClick={() => filterProducts("Mobile")}>
          Mobile
        </button>
        <button className="btn" onClick={() => filterProducts("Tablet")}>
          Tablet
        </button>
        <button className="btn" onClick={() => filterProducts("Laptop")}>
          Laptop
        </button>
      </div>

      {
        <div className="products">
          {filteredProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      }
    </div>
  );
}
