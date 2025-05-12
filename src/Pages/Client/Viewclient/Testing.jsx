  import React, { useState } from 'react';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import './testing.css';
  import { Link } from 'react-router-dom';

  
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
      toDate: '',
      renewalDue: false // Added field for renewal due
    });

  const [showFilterForm, setShowFilterForm] = useState(false);
    
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Display 2 items per page

  const handlePageSizeChange = (newPageSize) => {
    setItemsPerPage(newPageSize);
    setCurrentPage(1); // Reset to the first page
  };

  // Removed duplicate declaration of toggleFilterForm


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
        toDate: '',
        renewalDue: false // Added field for renewal due
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
        id: 3,
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
        id: 4,
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
        
    
    ];

 // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(clientData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // image ko click karne par bada dikhana

const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (imageUrl) => {
  setSelectedImage(imageUrl);
};

const handleCloseModal = () => {
  setSelectedImage(null);
};

// Removed duplicate declaration of handlePageSizeChange

    return (
      <div className="client-report-container">
        <div className="main-content">
          <button onClick={toggleFilterForm} className="search-btn">Search Filter</button>

          {showFilterForm && (
            <form onSubmit={handleSearch} className="client-filter-form">
              <div className="form-row">
                {[
                  { label: 'Client Name', name: 'clientName', type: 'text' },

                  // { label: 'Mobile Number', name: 'mobileNumber', type: 'text' },
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
                  { label: 'Membership Status', name: 'membershipStatus', options: ['', 'premium', 'free', 'Dropout'] },
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
              
              {/* Renewal Due Checkbox */}
              {/* <div className="form-group">
                <label>Renewal Due</label>
                <input
                  type="checkbox"
                  name="renewalDue"
                  checked={filterData.renewalDue}
                  onChange={handleChange}
                />
              </div> */}
            {/* </div> */}

              <div className="form-actions">
                <button type="submit" className="search-button">SEARCH</button>
                {/* <button type="button" onClick={handleReset} className="reset-button">RESET</button> */}
              </div>
            </form>
          )}

    <div className="report-table-container">
    <div className="filter-row">
    <div className="filter-group">
      <select className="filter-select">
        <option value="">Selected for Assign</option>
        <option value="male">Akash TL</option>
        <option value="female">Aman Tiwari RM</option>
        <option value="other">Deepak RM</option>
      </select>
      <button className="apply-btn">Assign</button>
    </div>

    <div className="filter-group">
      <select className="filter-select">
        <option value="hand">Handled by</option>
        <option value="aman">Aman</option>
        <option value="anki">Anki</option>
        <option value="anman">Anman</option>
      </select>
      <button className="apply-btn">Apply</button>
    </div>
  </div>
</div>
    {/* <select className="filter-select" id="pageSize" onChange={(e) => handlePageSizeChange(parseInt(e.target.value, 10))}></select> */}

{/* Pagination size selector */}
    <div className="filter-group">
      <label htmlFor="pageSize" className="page-label"></label>
      <select className="filter-select w-auto" id="pageSize" onChange={(e) => handlePageSizeChange(e.target.value)}>
        <option value="5">5 per page</option>
        <option value="15">15 per page</option>
        <option value="35">35 per page</option>
        <option value="45">45 per page</option>
        <option value="55">55 per page</option>

      </select>
    </div>
  {/* </div> */}
{/* </div> */}
</div>
            
            <div className="table-res-tab">
            <table className="report-table">
              <thead>
                <tr style={{ backgroundColor: 'var(--dul-light-pink)', color: 'black' }}>
                  <th><input type="checkbox" onChange={handleSelectAll} /></th>
                  <th>PROFILE PHOTO</th>
                  <th>NAME & GENDER<br /><span>CONTACT DETAILS</span></th>
                  <th>Client Id<br /><span>Membership Status</span></th>
                  <th>MARITAL STATUS<br /><span>PROFILE SENT</span></th>
                  <th>HANDLED BY<br /><span>Disposition</span></th>
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

{/* image ko modal me dikhana bda dikha ke */}
  <td>
  <img
    src={client.profilePhoto}
    alt="Profile"
    className="profile-img"
    onClick={() => handleImageClick(client.profilePhoto)}
    style={{ cursor: 'pointer' }}
  />
</td>
{selectedImage && (
  <div className="image-modal" onClick={handleCloseModal}>
    <img src={selectedImage} alt="Enlarged" className="modal-img" />
  </div>
)}
{/* image ko modal me dikhana bda dikha ke */}

                    <td>
                      <div className="bold">{client.name}</div>
                      <div className={`gender ${client.gender.toLowerCase()}`}>{client.gender}</div>
                      <div className="small-text">{client.contact}</div>
                      <div className="small-text">{client.email}</div>
                    </td> 
{/* cliend id ko clickable banay hu */}
<td>
                <Link
                to={`/UserProfilePage`}
                className="avatar"
                target="_blank">   
                 {client.clientId}
        </Link>
        

        <div className="green">{client.membershipStatus}</div>
        </td>
        {/* cliend id ko clickable banay hu */}
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
                        <a href="/EditClient  " target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-pen-to-square" title="Edit"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
            <div className="pagination">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              {pageNumbers.map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
            {/* ///////// */}
       
        </div>
      // </div>
      // </div>
      // </div>
    );
  };

  export default ClientReport;
