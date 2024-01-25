import React from 'react';
import './Prescriptions.css';
import prescriptionsJSON from '../utils/Prescriptions.json';
import { SVGlogo } from '../utils/utils';

// Would prefer a better UI library to create a table, both for the user- and the dev experience. Especially regarding accessibility.
// Ideally I would have spent far more time (any time) to make this component responsive and made it by the mobile-first principle.
// Since this is a coding test to show my skill level, I chose not to spend time on that aspect.

// TODO: User feedback to display most relevant data points in the table1.
// TODO: Added tracking for out of stock products - for data driven development to improve stock status
// TODO: Table sorting, pagination, styling, responsiveness - improvement in so many areas.
// TODO: Loading/empty/error state for the component

type PrescriptionsProps = {
  handlePrescriptionClick: (prescriber: any) => void;
};

const Prescriptions: React.FC<PrescriptionsProps> = ({
  handlePrescriptionClick,
}) => (
  <div className='page-prescriptions'>
    <header className='page-header'>{SVGlogo}</header>
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ProductName</th>
            <th scope='col'>Preamble</th>
            <th scope='col'>Withdrawals</th>
            <th scope='col'>ValidityDate</th>
            <th scope='col'>isNew</th>
          </tr>
        </thead>
        <tbody>
          {prescriptionsJSON.map((prescription, index) => {
            const {
              validityDate,
              article,
              prescriber,
              preamble,
              numberOfWithdrawalsLeft,
              numberOfWithdrawals,
              isNew,
            } = prescription;
            const dateValid = new Date(validityDate);

            return (
              <tr
                key={article.id + '_' + index}
                onClick={() => handlePrescriptionClick(prescriber)}
                className={
                  article.stockStatus === 'OutOfStock' ? 'outOfStock' : ''
                }
                tabIndex={0}
                aria-label='Click to view prescriber details'
              >
                <td>{article.productName}</td>
                <td>{preamble}</td>

                <td>
                  {numberOfWithdrawalsLeft}/{numberOfWithdrawals}
                </td>
                <td>{dateValid.toLocaleDateString('sv-SE')}</td>
                <td>{isNew ? 'New' : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default Prescriptions;
