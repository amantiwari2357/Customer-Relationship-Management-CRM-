import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './ClientReport.css';
const ClientReport = () => {
  const [filterData, setFilterData] = useState({
    clientName: '',
    gender: '',
    caste: '',
    occupation: '',
    mobileNumber: '',
    profileId: '',
    openForDivorce: '',
    country: '',
    state: '',
    city: '',
    membershipStatus: '',
    fromDate: '',
    toDate: ''
  });

  const [showFilterForm, setShowFilterForm] = useState(false);

  const toggleFilterForm = () => {
    setShowFilterForm(!showFilterForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search data", filterData);
  };

  const handleReset = () => {
    setFilterData({
      clientName: '',
      gender: '',
      caste: '',
      occupation: '',
      mobileNumber: '',
      profileId: '',
      openForDivorce: '',
      country: '',
      state: '',
      city: '',
      membershipStatus: '',
      fromDate: '',
      toDate: ''
    });
  };

//   /////////////////////copy///////////////////////

/////////////////////////////copy gourav//////////////
  return (
    <div className="client-report-container">
      <div className="main-content">
        <button onClick={toggleFilterForm} className="search-btn">
          Search Filter
        </button>
        {/* </div> */}

        {showFilterForm && (
            
<form onSubmit={handleSearch} className={`client-filter-form ${showFilterForm ? '' : 'hide'}`}>
            
            <div className="form-row">
              {/* Input fields */}
              {[
                { label: 'Client Name', name: 'clientName', type: 'text' },
                // { label: 'Mobile Number', name: 'mobileNumber', type: 'text' },
                // { label: 'Profile ID', name: 'profileId', type: 'text' },
                { label: 'Gender', name: 'gender', options: ['', 'male', 'female', 'other'] },
                { label: 'From Date', name: 'fromDate', type: 'date' },
                { label: 'To Date', name: 'toDate', type: 'date' },
              ].map(({ label, name, type }) => (
                <div className="form-group" key={name}>
                  <label>{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={filterData[name]}
                    onChange={handleChange}
                    placeholder={label}
                  />
                </div>
              ))}

              {/* Select fields */}
              {[
                // { label: 'Caste', name: 'caste', options: ['', 'pandit', 'panchal', 'gupta'] },
                // { label: 'Occupation', name: 'occupation', options: ['', '1', '2'] },
                // { label: 'Open for Divorce', name: 'openForDivorce', options: ['', 'yes', 'no'] },
                // { label: 'Country', name: 'country', options: ['', 'india', 'pakistan'] },
                // { label: 'State', name: 'state', options: ['', 'up', 'bihar', 'delhi'] },
                // { label: 'City', name: 'city', options: ['', 'banaras', 'lucknow', 'delhi'] },
                { label: 'Membership Status', name: 'membershipStatus', options: ['', 'active', 'inactive'] },
              ].map(({ label, name, options }) => (
                <div className="form-group" key={name}>
                  <label>{label}</label>
                  <select name={name} value={filterData[name]} onChange={handleChange}>
                    {options.map((opt, index) => (
                      <option key={index} value={opt}>
                        {opt === '' ? `Select ${label}` : opt.charAt(0).toUpperCase() + opt.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="form-actions">
              <button type="submit" className="search-button">SEARCH</button>
              <button type="button" onClick={handleReset} className="reset-button">RESET</button>
            </div>
          </form>
        )}

        {/* Report Table Section */}
        <div className="report-table-container">
          <div className="filter-bar">
            <select className="filter-select">
              <option value="">Filter by Assign</option>
              <option value="male">Akash TL</option>
              <option value="female">Aman Tiwari RM</option>
              <option value="other">Deepak RM</option>
            </select>
            <button className="apply-btn">Assign By Selected</button>
          </div>

          <table className="report-table">
            <thead>
              <tr style={{ backgroundColor: 'var(--dul-light-pink)', color: 'black' }}>
                <th>
                  <input
                    type="checkbox"
                    id="selectAll"
                    onChange={(e) => {
                      const checked = e.target.checked;
                      document.querySelectorAll('.row-checkbox').forEach(cb => {
                        cb.checked = checked;
                      });
                    }}
                  />
                </th>
                <th>PROFILE PHOTO</th>
                <th>NAME & GENDER<br /><span>CONTACT DETAILS</span></th>
                <th>Client Id<br /><span>Membership Status</span></th>
                <th>MARITAL STATUS<br /><span>PROFILE SENT</span></th>
                <th>HANDLED BY<br /><span>LAST REMARK</span></th>
                <th>D.O.B & AGE</th>
                <th>HEIGHT & MANGLIK</th>
                <th>CASTE & RELIGION</th>
                <th>EDUCATION & OCCUPATION</th>
                <th>PERSONAL INCOME</th>
                <th>BUDGET</th>
                <th>CITY & NRI STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td><img src="/images/user.jpg" alt="Profile" className="profile-img" /></td>
                <td>
                  <div className="bold">Rohan Sharma</div>
                  <div className="gender male">Male</div>
                  <div className="small-text">9876543210</div>
                </td>
                <td>
             <div className="bold">DUL12345</div> {/* ✅ Client ID */}
             <div className="green">Premium</div>   {/* ✅ Membership Status */}
              </td>
                <td>
                  <div>Single</div>
                  <div className="green">10sent</div>
                </td>
                <td>
                  <div>Geeta</div>
                  <div className="gray">Interested family</div>
                </td>
                <td>15/06/1992<br />(32 Yrs)</td>
                <td>5'9"<br />Manglik</td>
                <td>Brahmin<br />Hindu</td>
                <td>MBA<br />Business Analyst</td>
                <td>₹15 LPA</td>
                <td>₹10-15 LPA</td>
                <td>Mumbai<br /><span className="purple">NRI</span></td>

                <td>
  <div className="actions">
  <Link to={`/ShareClient`}>    
    <i className="fas fa-share-from-square" title="Share"></i>
    </Link>
    <Link to={`/EditClient`}>
      <i className="fas fa-pen-to-square" title="Edit"></i>
    </Link>
  </div>
</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientReport;
