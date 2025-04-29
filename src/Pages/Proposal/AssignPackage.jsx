// src/AssignPackage.jsx
import React, { useState } from 'react';
import './AssignPackage.css';

const AssignPackage = () => {
  const [clientId, setClientId] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for client ID:', clientId);
    // Add your search logic here
  };

  return (
    <div className="assign-package-container">
      <div className="assign-package-header">
        <h2>Assign Package</h2>
      </div>
      <form className="assign-package-form" onSubmit={handleSearch}>
        <label htmlFor="clientId">Enter Client ID</label>
        <div className="form-row">
          <input
            type="text"
            id="clientId"
            placeholder="Client ID"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
          />
          <button type="submit" className="search-btn">SEARCH</button>
        </div>
      </form>
    </div>
  );
};

export default AssignPackage;
