import React from "react";

const SelectedProduct = ({ product, onSelect }) => {
  const products = [
    { id: 1, name: "OLED TV 195 cm (77 Inch) [Model Year 2022]" },
  ];

  return (
    <div className="col-sm-7 my-4">
      <h2>Select delivery options</h2>
      <div className="col my-4">
        <div className="row">
          <div className="col-sm-6 my-4">
            <img width="100%" src="TV_OLED.jpg" alt="Product Image" />
            <div className="row p-5 mt-5">
              <a href="#change">change</a>
            </div>
          </div>
          <div className="col-sm my-4">
            <h4>OLED TV 195 cm (77 Inch) [Model Year 2022]</h4>
            <span>Condition:</span>
            <div className="col-sm-12 mt-3">
              <button className="btn btn-info">Used</button>
              <button className="btn border-success border-opacity-75 mt-0">
                Brand New
              </button>
            </div>

            <div>Unit Price: 2000/-</div>

            <label htmlFor="qty" className="my-3">
              Quantity:
              <select
                name="quantity"
                id="qty"
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
