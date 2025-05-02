import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './testing.css';

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
    isNRI: '',
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
      isNRI: '',
      city: '',
      membershipStatus: '',
      fromDate: '',
      toDate: ''
    });
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    document.querySelectorAll('.row-checkbox').forEach(cb => cb.checked = checked);
  };

  // 👉 Dummy client data array
  const clientData = [
    {
      id: 1,
      profilePhoto: '/images/user4.jpg',
      name: 'Rohan Sharma',
      gender: 'Male',
      contact: '9876543210',
      email: 'rohan.sharma@example.com',
      clientId: 'DUL12345',
      membershipStatus: 'Premium',
      maritalStatus: 'Single',
      profileSent: '4 sent',
      handledBy: 'Geeta',
      lastRemark: 'Interested family',
      dob: '15/06/1992',
      age: 32,
      height: "5'9\"",
      manglik: 'Manglik',
      caste: 'Brahmin',
      religion: 'Hindu',
      education: 'MBA',
      occupation: 'Business Analyst',
      income: '₹15 LPA',
      budget: '₹10-15 LPA',
      city: 'Mumbai',
      isNRI: 'NRI'
    },
    {
      id: 2,
      profilePhoto: '/images/user4.jpg',
      name: 'Aman Tiwari',
      gender: 'Male',
      contact: '9031359720',
      email: 'aman@gmail.com',
      clientId: 'DUL12342',
      membershipStatus: 'Premium',
      maritalStatus: 'Single',
      profileSent: '1 sent',
      handledBy: 'akash',
      lastRemark: 'Interested family',
      dob: '15/06/2001',
      age: 24,
      height: "5'9\"",
      manglik: 'Manglik',
      caste: 'Brahmin',
      religion: 'Hindu',
      education: 'BTech',
      occupation: 'Full stack',
      income: '₹15 LPA',
      budget: '₹10-15 LPA',
      city: 'Kanpur',
      isNRI: 'NRI'
    },
    {
      id: 3,
      profilePhoto: '/images/user4.jpg',
      name: 'Anjali Verma',
      gender: 'Female',
      contact: '9988776655',
      email: 'anjali.verma@example.com',
      clientId: 'DUL54321',
      membershipStatus: 'Active',
      maritalStatus: 'Divorced',
      profileSent: '5 sent',
      handledBy: 'Aman',
      lastRemark: 'Follow-up required',
      dob: '22/03/1990',
      age: 34,
      height: "5'5\"",
      manglik: 'Non-Manglik',
      caste: 'Gupta',
      religion: 'Hindu',
      education: 'B.Tech',
      occupation: 'Software Engineer',
      income: '₹12 LPA',
      budget: '₹8-12 LPA',
      city: 'Delhi',
      nriStatus: 'No',
      photo: '/images/user2.jpg'
    },
    {
      id: 4,
      profilePhoto: '/images/user4.jpg',
      name: 'Vikram Singh',
      gender: 'Male',
      contact: '9090909090',
      email: 'vikram.singh@example.com',
      clientId: 'DUL67890',
      membershipStatus: 'Inactive',
      maritalStatus: 'Single',
      profileSent: '0 sent',
      handledBy: 'Deepak',
      lastRemark: 'Not reachable',
      dob: '12/11/1988',
      age: 36,
      height: "6'0\"",
      manglik: 'Manglik',
      caste: 'Jaat',
      religion: 'Hindu',
      education: 'M.Com',
      occupation: 'Accountant',
      income: '₹7 LPA',
      budget: '₹5-10 LPA',
      city: 'Lucknow',
      nriStatus: 'No',
      photo: '/images/user3.jpg'
    }
  ];

  return (
    <div className="client-report-container">
      <div className="main-content">
        <button onClick={toggleFilterForm} className="search-btn">Search Filter</button>

        {showFilterForm && (
          <form onSubmit={handleSearch} className="client-filter-form">
            <div className="form-row">
              {[
                { label: 'Client Name', name: 'clientName', type: 'text' },
                { label: 'Mobile Number', name: 'mobileNumber', type: 'text' },
                { label: 'Profile ID', name: 'profileId', type: 'text' },
                { label: 'From Date', name: 'fromDate', type: 'date' },
                { label: 'To Date', name: 'toDate', type: 'date' },
              ].map(({ label, name, type }) => (
                <div className="form-group" key={name}>
                  <label>{label}</label>
                  <input type={type} name={name} value={filterData[name]} onChange={handleChange} placeholder={label} />
                </div>
              ))}

              {[
                { label: 'Gender', name: 'gender', options: ['', 'male', 'female', 'other'] },
                { label: 'Caste', name: 'caste', options: ['', 'pandit', 'panchal', 'gupta', 'jaat'] },
                { label: 'Occupation', name: 'occupation', options: ['', '1', '2', 'business analyst'] },
                { label: 'Open for Divorce', name: 'openForDivorce', options: ['', 'yes', 'no'] },
                { label: 'Country', name: 'country', options: ['', 'india', 'pakistan'] },
                { label: 'State', name: 'state', options: ['', 'up', 'bihar', 'delhi'] },
                { label: 'City', name: 'city', options: ['', 'banaras', 'lucknow', 'delhi', 'mumbai'] },
                { label: 'Membership Status', name: 'membershipStatus', options: ['', 'active', 'inactive', 'premium'] },
                { label: 'NRI Status', name: 'isNRI', options: ['', 'yes', 'no'] }
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

        <div className="report-table-container">
          <div className="filter-bar">
            <select className="filter-select">
              <option value="">Filter by Assign</option>
              <option value="akash">Akash TL</option>
              <option value="aman">Aman Tiwari RM</option>
              <option value="deepak">Deepak RM</option>
              <option value="geeta">Geeta</option>
            </select>
            <button className="apply-btn">Assign By Selected</button>
          </div>

          <table className="report-table">
            <thead>
              <tr style={{ backgroundColor: 'var(--dul-light-pink)', color: 'black' }}>
                <th><input type="checkbox" onChange={handleSelectAll} /></th>
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
              {clientData.map(client => (
                <tr key={client.id}>
                  <td><input type="checkbox" className="row-checkbox" /></td>
                  <td>
                    <a href="/UserProfilePage" target="_blank" rel="noopener noreferrer">
                      <img src={client.profilePhoto} alt="Profile" className="profile-img" />
                    </a>
                  </td>
                  <td>
                    <div className="bold">{client.name}</div>
                    <div className={`gender ${client.gender.toLowerCase()}`}>{client.gender}</div>
                    <div className="small-text">{client.contact}</div>
                    <div className="small-text">{client.email}</div>
                  </td>
                  <td>
                    <div className="bold">{client.clientId}</div>
                    <div className="green">{client.membershipStatus}</div>
                  </td>
                  <td>
                    <div>{client.maritalStatus}</div>
                    <a href="/Modal" className="green" target="_blank" rel="noopener noreferrer">{client.profileSent}</a>
                  </td>
                  <td>
                    <div>{client.handledBy}</div>
                    <div className="gray">{client.lastRemark}</div>
                  </td>
                  <td>{client.dob}<br />({client.age} Yrs)</td>
                  <td>{client.height}<br />{client.manglik}</td>
                  <td>{client.caste}<br />{client.religion}</td>
                  <td>{client.education}<br />{client.occupation}</td>
                  <td>{client.income}</td>
                  <td>{client.budget}</td>
                  <td>{client.city}<br /><span className="purple">{client.isNRI}</span></td>
                  <td>
                    <div className="actions">
                      <a href="/ShareClient" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-share-from-square" title="Share"></i>
                      </a>
                      <a href="/UserProfilePage" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-pdf" title="PDF Profile"></i>
                      </a>
                      <a href="/EditClient" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-pen-to-square" title="Edit"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientReport;
