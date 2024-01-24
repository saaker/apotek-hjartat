import React from "react";
import "./Prescriptions.css";
import prescriptions from "./Prescriptions.json";

type PrescriptionsProps = {
  handlePrescriptionClick: () => void;
};

const Prescriptions = ({ handlePrescriptionClick }: PrescriptionsProps) => {
  console.log({ prescriptions });
  return (
    <div className='App'>
      <header className='App-header'>Header here</header>
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Preamble</th>

              <th>Withdrawals</th>
              <th>ValidityDate</th>
              <th>isNew</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => {
              const validityDate = new Date(prescription.validityDate);
              return (
                <tr
                  onClick={handlePrescriptionClick}
                  className={
                    prescription.article.stockStatus === "OutOfStock"
                      ? "outOfStock"
                      : ""
                  }
                >
                  <td>{prescription.article.productName}</td>
                  <td>{prescription.preamble}</td>

                  <td>
                    {prescription.numberOfWithdrawalsLeft}/
                    {prescription.numberOfWithdrawals}
                  </td>
                  <td>{validityDate.toLocaleDateString("sv-SE")}</td>
                  <td>{prescription.isNew ? "New" : ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prescriptions;
