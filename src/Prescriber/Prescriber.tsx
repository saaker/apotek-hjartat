import React, { SetStateAction } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './Prescriber.css';
import { PrescriberDetails } from '../App/App.types';

// TODO: Add much more information in the drawer about the prescription. Especially data that connects the prescription and prescriber.
// TODO: General styling, responsive, accessibility, etc.
// TODO: Better handling if prescriber is undefined (error state)
// TODO: Loading/empty state for the component

type PrescriberProps = {
  prescriber?: PrescriberDetails;
  setPrescriber: React.Dispatch<SetStateAction<PrescriberDetails | undefined>>;
};

const Prescriber: React.FC<PrescriberProps> = ({
  prescriber,
  setPrescriber,
}) => (
  <Drawer
    open={!!prescriber}
    onClose={() => setPrescriber(undefined)}
    direction='right'
    className='drawer-prescriber'
  >
    <div onClick={() => setPrescriber(undefined)} className='drawer-close-btn'>
      X
    </div>
    <h4>Prescriber:</h4>
    {prescriber && (
      <>
        <span>
          {prescriber?.name} ({prescriber?.profession})
        </span>
        <span>{prescriber?.workplace}</span>
        <span># {prescriber?.phoneNumber}</span>
      </>
    )}
  </Drawer>
);

export default Prescriber;
