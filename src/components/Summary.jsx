import React from "react";

const Summary = ({ selectedProduct }) => {
  return (
    <div class="col-md my-3 ">
      <h2 class="ms-0">Order Summary</h2>
      <div class="container">
        <div class="row p-0 m-0">
          <div class="col-sm-12 my-3 d-flex">
            <a href="8" role="button" class="btn btn-info">
              Change delivery address
            </a>
          </div>
          <div class="row p-0 m-0">
            <span>Items Cost:</span>
            <span>€ 6000</span>
          </div>
          <div class="col-sm-7 my-3 d-flex">
            <span>Delivery Insurance: </span>
            <span>35</span>
          </div>
          <div class="row">
            <span>Delivery Charges:</span>
            <span>Free for members</span>
          </div>
          <span class="border-top border-info border-2 my-2"></span>
          <strong class="col-sm-10 ">
            <span>Total Purchase:</span>
            <span>€ 6035</span>
          </strong>
          <div class="col-sm-7 my-3">
            <span>VAT:</span>
            <span>
              € 1146{" "}
              <a href="#VAT" class="d-grid">
                (included)
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
