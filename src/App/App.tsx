import React, { useState } from 'react';
import Prescriptions from '../Prescriptions/Prescriptions';
import Prescriber from '../Prescriber/Prescriber';
import { PrescriberDetails } from './App.types';

// TODO: Loading/empty/error state for the component

const App = () => {
  const [prescriber, setPrescriber] = useState<PrescriberDetails | undefined>();

  const handlePrescriptionClick = (prescriber: PrescriberDetails) => {
    setPrescriber(prescriber);
  };

  return (
    <>
      <Prescriptions handlePrescriptionClick={handlePrescriptionClick} />
      <Prescriber prescriber={prescriber} setPrescriber={setPrescriber} />
    </>
  );
};

export default App;
