import React from "react";
import Form from "./Form";

const FormList = () => {
  return (
    <main className="formlist">
      <div className="formlist-heading">
        <h2 className="tertiary-heading">Referral Patients</h2>
        <p>You can add up to five patients at a time</p>
      </div>
      <Form />
    </main>
  );
};

export default FormList;
