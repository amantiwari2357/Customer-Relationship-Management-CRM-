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
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
    {
      name: 'Gold_2100',
      validity: '1 Months',
      profileLimit: 100,
      price: '₹21000.00',
      special: false,
      status: 'Active'
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditForm(packages[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "profileLimit" ? parseInt(value, 10) : value;
    setEditForm({ ...editForm, [name]: parsedValue });
  };

  const handleSave = () => {
    const updatedPackages = [...packages];
    updatedPackages[editIndex] = editForm;
    setPackages(updatedPackages);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

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
      {editIndex === index ? (
        <>
          <td>
            <input
              type="text"
              name="name"
              value={editForm.name || ''}
              onChange={handleInputChange}
              className="table-input"
            />
          </td>
          <td>
            <input
              type="text"
              name="validity"
              value={editForm.validity || ''}
              onChange={handleInputChange}
              className="table-input"
            />
          </td>
          <td>
            <input
              type="number"
              name="profileLimit"
              value={editForm.profileLimit || ''}
              onChange={handleInputChange}
              className="table-input"
            />
          </td>
          <td>
            <input
              type="text"
              name="price"
              value={editForm.price || ''}
              onChange={handleInputChange}
              className="table-input"
            />
          </td>
          <td>
            <select
              name="special"
              value={editForm.special ? 'true' : 'false'}
              onChange={(e) =>
                setEditForm({ ...editForm, special: e.target.value === 'true' })
              }
              className="table-select"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </td>
          <td>
            <select
              name="status"
              value={editForm.status || ''}
              onChange={handleInputChange}
              className="table-select"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </td>
          <td className="action-buttons">
            <button className="save-btn" onClick={handleSave}>Save</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </td>
        </>
      ) : (
        <>
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
            <span className={`status-badge ${pkg.status === 'Active' ? 'active' : 'inactive'}`}>
              {pkg.status}
            </span>
          </td>
          <td className="action-buttons">
            <button className="edit-btn" onClick={() => handleEditClick(index)}>
              <i className="fas fa-edit"></i> Edit
            </button>
          </td>
        </>
      )}
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default PackageManager;
