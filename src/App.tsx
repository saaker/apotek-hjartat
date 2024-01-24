import React from "react";
import Prescriptions from "./Prescriptions";

const App = () => {
  const handlePrescriptionClick = () => {
    return console.log("clicked!");
  };

  return <Prescriptions handlePrescriptionClick={handlePrescriptionClick} />;
};

export default App;
