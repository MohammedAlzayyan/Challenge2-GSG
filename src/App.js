import React, { useState, useRef } from "react";
import ProductList from "./ProductList";
import productsData from "./data.json";
import "./App.css";

function App() {
  const [selectedItem, setSelectedItem] = useState("All");
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });
  const dialogRef = useRef(null);

  const handleSelectedChange = (category) => {
    setSelectedItem(category);
  };

  const getFilteredProducts = () => {
    if (selectedItem === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedItem);
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = [
      ...products,
      { id: products.length + 1, ...newProduct },
    ];
    setProducts(updatedProducts);
    dialogRef.current.close(); // Close the dialog
    setNewProduct({ name: "", category: "", price: "", image: "" }); // Reset the form
  };

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Coding Challenge GSG</h1>
      </div>

      <ProductList
        products={getFilteredProducts()}
        activeFilter={selectedItem}
        onFilterChange={handleSelectedChange}
      />

      <dialog id="add-product-dialog" ref={dialogRef}>
        <form id="add-product-form" onSubmit={handleFormSubmit} method="dialog">
          <h2>Add a New Product</h2>

          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            required
          />

          <menu>
            <button type="submit">Add Product</button>
            <button type="button" onClick={closeDialog}>
              Cancel
            </button>
          </menu>
        </form>
      </dialog>

      <button className="add-product" onClick={openDialog}>
        Add a new Product
      </button>
    </div>
  );
}

export default App;
