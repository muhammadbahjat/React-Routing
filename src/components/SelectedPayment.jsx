import React from "react";

const SelectedPayment = () => {
  return (
    <div class="col-12 my-4 col-sm-7">
      <h2>Confirm payment details</h2>
      <div class="container my-4">
        <h4>Enter bank details:</h4>
        <form action="abc">
          <div class="row form-group">
            <label class="col-12 mt-3 col-sm-5" for="bic">
              BIC (Swift-Code):
            </label>
            <input
              class="col-10 mt-1 offset-1 col-sm-6 mt-sm-3"
              type="text"
              id="bic"
            />
            <label class="col-12 mt-3 col-sm-5" for="iban">
              IBAN:
            </label>
            <input
              class="col-10 mt-1 offset-1 col-sm-6 mt-sm-3"
              type="text"
              id="iban"
            />
            <label class="col-12 mt-3 col-sm-5" for="accholder">
              Account Holder's Name:
            </label>
            <input
              class="col-10 mt-1 offset-1 col-sm-6 mt-sm-3"
              type="text"
              id="accholder"
            />
          </div>
          <div class="row form-group my-5">
            <input
              class="col-3 offset-1 w-auto col-sm-2"
              type="checkbox"
              id="savechk"
              checked
            />
            <label class="col-9 col-sm" for="savechk">
              Save my bank details for future purchases?
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectedPayment;
