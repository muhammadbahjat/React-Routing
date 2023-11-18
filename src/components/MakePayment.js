import React from "react";
import SelectedPayment from "./SelectedPayment"; // Import the SelectedPayment component
import PaymentDetails from "./PaymentDetails"; // Import the PaymentDetails component

const MakePayment = () => {
  return (
    <section className="container bg-light m-auto">
      <article className="row border-top border-danger-subtle border-5 my-2">
        <SelectedPayment /> {/* Render the SelectedPayment component */}
        <PaymentDetails /> {/* Render the PaymentDetails component */}
      </article>
    </section>
  );
};

export default MakePayment;
