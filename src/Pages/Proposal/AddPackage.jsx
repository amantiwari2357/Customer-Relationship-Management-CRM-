import React, { useState, useEffect } from 'react';
import './AddPackage.css';

const AddPackage = ({ initialData = {}, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    validity: '1 Months',
    profileLimit: '',
    price: '',
    special: 'No',
    status: 'Active',
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="add-package-container">
      <div className="add-package-header">
        <h2>{initialData.name ? 'Edit Package' : 'Add New Package'}</h2>
        {/* <button className="close-btn" onClick={onClose}></button> */}
      </div>
      <form className="add-package-form" onSubmit={handleSubmit}>
        {/* Package form fields (same as before) */}
        <div className="form-row">
          <div className="form-group">
            <label>Package Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Validity</label>
            <select name="validity" value={formData.validity} onChange={handleChange}>
              <option>1 Months</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Profile Share Limit</label>
            <input type="number" name="profileLimit" value={formData.profileLimit} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price (₹)</label>
            <input type="text" name="price" value={formData.price} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Special Package</label>
            <select name="special" value={formData.special} onChange={handleChange}>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <button type="submit" className="save-btn">SAVE PACKAGE</button>
      </form>
    </div>
  );
};

export default AddPackage;
