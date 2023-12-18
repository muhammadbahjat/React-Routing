import React, { useState } from "react";
import SelectedProduct from "./SelectedProduct";
import Summary from "./Summary"; // Import the Summary component

const MakeOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <header
        className="bg-warning justify-content-end d-flex align-bottom"
        style={{ fontSize: "2rem", fontWeight: "bold" }}
      >
        <span>Your Shopping Cart</span>
        <i className="bi bi-cart-check p-2 g-col-6 align-bottom"></i>
      </header>
      <section class="container bg-light m-auto">
        <article class="row">
          <SelectedProduct onSelect={handleProductSelect} />
          <Summary selectedProduct={selectedProduct} />
        </article>
      </section>
    </div>
  );
};

export default MakeOrder;
