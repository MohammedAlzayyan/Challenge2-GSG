import React from "react";
import "./productList.css";

function ProductList({ products, activeFilter, onFilterChange }) {
  return (
    <div>
      <h2 className="sectionName">Product List</h2>
      <div className="filters">
        <button
          onClick={() => onFilterChange("All")}
          className={activeFilter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("Electronics")}
          className={activeFilter === "Electronics" ? "active" : ""}
        >
          Electronics
        </button>
        <button
          onClick={() => onFilterChange("Clothing")}
          className={activeFilter === "Clothing" ? "active" : ""}
        >
          Clothing
        </button>
        <button
          onClick={() => onFilterChange("Accessories")}
          className={activeFilter === "Accessories" ? "active" : ""}
        >
          Accessories
        </button>
      </div>

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p class="price">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
