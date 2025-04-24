import React, { useState } from 'react';
import './PackageManager.css';
import { Link } from 'react-router-dom';

const PackageManager = () => {
  const [packages, setPackages] = useState([
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    }
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditForm(packages[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleSave = () => {
    const updatedPackages = [...packages];
    updatedPackages[editIndex] = editForm;
    setPackages(updatedPackages);
    setEditIndex(null);
  };

  // const handleCancel = () => {
  //   setEditIndex(null);
  // };

  return (
    <div className="package-container">
      <div className="package-header">
        <h2>Package Manager</h2>
        <Link to="/addPackage" className="add-package-btn">ADD NEW PACKAGE</Link>
      </div>

      <table className="package-table">
        <thead>
          <tr>
            <th>PACKAGE NAME</th>
            <th>VALIDITY</th>
            <th>PROFILE LIMIT</th>
            <th>PRICE</th>
            <th>SPECIAL</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, index) => (
            <tr key={index}>
              <td>{pkg.name}</td>
              <td>{pkg.validity}</td>
              <td>{pkg.profileLimit}</td>
              <td>{pkg.price}</td>
              <td>
                <span className={`special-badge ${pkg.special ? 'yes' : 'no'}`}>
                  {pkg.special ? 'Yes' : 'No'}
                </span>
              </td>
              <td>
                <span className="status-badge active">{pkg.status}</span>
              </td>
              <td>
                <button className="edit-btn" onClick={() => handleEditClick(index)}>
                  <i className="fas fa-edit"></i> EDIT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {editIndex !== null && (
        <div className="edit-form">
          <h3>Edit Package</h3>
          <input type="text" name="name" value={editForm.name} onChange={handleInputChange} placeholder="Package Name" />
          <input type="text" name="validity" value={editForm.validity} onChange={handleInputChange} placeholder="Validity" />
          <input type="number" name="profileLimit" value={editForm.profileLimit} onChange={handleInputChange} placeholder="Profile Share Limit" />
          <input type="text" name="price" value={editForm.price} onChange={handleInputChange} placeholder="Price" />
          <select name="special" value={editForm.special} onChange={handleInputChange}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
          <select name="status" value={editForm.status} onChange={handleInputChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        </div> */}
      {/* )} */}
    </div>
  );
};

export default PackageManager;
