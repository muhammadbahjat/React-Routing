import React from "react";

const PaymentDetails = () => {
  return (
    <div className="col-12 my-4 col-sm-5">
      <h2>Choose payment method</h2>
      <div className="container my-4">
        <form action="xyz">
          <div className="row form-group d-flex flex-column">
            <label className="col-12 my-1" htmlFor="cc">
              <input
                className="my-1"
                name="paymentmethod"
                type="radio"
                id="cc"
              />
              <i
                className="bi bi-credit-card-2-front offset-1 me-1"
                style={{ color: "purple" }}
              ></i>
              Credit Card
            </label>
            <label className="col-12 my-1" htmlFor="pp">
              <input
                className="my-1"
                name="paymentmethod"
                type="radio"
                id="pp"
              />
              <i
                className="bi bi-paypal offset-1 me-1"
                style={{ color: "blue" }}
              ></i>
              PayPal
            </label>
            <label className="col-12 my-1 fw-semibold" htmlFor="ba">
              <input
                className="my-1"
                name="paymentmethod"
                type="radio"
                id="ba"
                checked
              />
              <i
                className="bi bi-bank offset-1 me-1"
                style={{ color: "green" }}
              ></i>
              Personal Bank Account
            </label>
            <label className="col-12 my-1" htmlFor="bf">
              <input
                className="my-1"
                name="paymentmethod"
                type="radio"
                id="bf"
              />
              <i
                className="bi bi-coin offset-1 me-1"
                style={{ color: "orangered" }}
              ></i>
              Bank Financing
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
