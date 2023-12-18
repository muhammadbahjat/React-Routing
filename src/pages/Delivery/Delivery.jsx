import React, { useState } from "react";
import SelectedProduct from "../../components/SelectedProduct";


const Delivery = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <section class="container bg-light m-auto">
        <article class="row">
          <SelectedProduct onSelect={handleProductSelect} />
        </article>
      </section>
    </div>
  );
};

export default Delivery;
