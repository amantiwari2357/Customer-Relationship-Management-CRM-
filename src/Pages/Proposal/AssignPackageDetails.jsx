// src/AssignPackageDetails.jsx
import React from 'react';
import './AssignPackageDetails.css';

const AssignPackageDetails = () => {
  const purchaseHistory = [
    {
      package: 'Gold_2100',
      validity: '1 Months',
      date: '24 Feb 2025',
      closedBy: 'Aakash',
    },
    {
      package: 'Gold_2100',
      validity: '1 Months',
      date: '16 Feb 2025',
      closedBy: 'Sonam Gupta',
    },
  ];

  return (
    <div className="assign-details-container">
      <div className="client-details">
        <h3>Client Details</h3>
        <p><strong>Name:</strong> Demo</p>
        <p><strong>Phone:</strong> 9811164762</p>
        <p><strong>Email:</strong> drupal247@gmail.com</p>
        <p><strong>Current Package:</strong> Gold_2100</p>
      </div>

      <hr />

      <div className="purchase-history">
        <h3>Purchase History</h3>
        <table>
          <thead>
            <tr>
              <th>PACKAGE</th>
              <th>VALIDITY</th>
              <th>ASSIGNED DATE</th>
              <th>CLOSED BY</th>
            </tr>
          </thead>
          <tbody>
            {purchaseHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.package}</td>
                <td>{item.validity}</td>
                <td>{item.date}</td>
                <td>{item.closedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="assign-form">
        <div className="form-group">
          <label htmlFor="package">Select Package</label>
          <select id="package">
            <option>Select Package</option>
            <option>Gold_2100</option>
            <option>Silver_1500</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user">Closed By</label>
          <select id="user">
            <option>Select User</option>
            <option>Aakash</option>
            <option>Sonam Gupta</option>
          </select>
        </div>
        <button className="assign-btn">ASSIGN PACKAGE</button>
      </div>
    </div>
  );
};

export default AssignPackageDetails;
