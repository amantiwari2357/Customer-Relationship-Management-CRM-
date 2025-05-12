import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './ClientReport.css';
const ClientReport = () => {
  const [filterData, setFilterData] = useState({
    clientName: '',
    clientId: '',
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

// Pagination logic
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10); // Set a default value for items per page

const handlePageSizeChange = (pageSize) => {
  setItemsPerPage(parseInt(pageSize, 10));
  setCurrentPage(1); // Reset to the first page when page size changes
};

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// Sample client data for demonstration
const [clientData] = useState([
  { id: 1, name: 'Rohan Sharma', gender: 'Male', membershipStatus: 'Premium' },
  { id: 2, name: 'Priya Singh', gender: 'Female', membershipStatus: 'Basic' },
  // Add more sample data as needed
]);

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

const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (imageSrc) => {
  setSelectedImage(imageSrc);
};

const handleCloseModal = () => {
  setSelectedImage(null);
};

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
                { label: 'Profile Id', name: 'Id', type: 'text' },
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
                // { label: 'Membership Status', name: 'membershipStatus', options: ['', 'active', 'inactive'] },
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
{/* </div> */}
<div className='gourav-table'>
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
                {/* <td><img src="/images/user4.jpg" alt="Profile" className="profile-img" /></td> */}
                <td>
                  
  <img
    src="/images/user4.jpg" // Replace with a valid source or variable
    alt="Profile"
    className="profile-img"
    onClick={() => handleImageClick('/images/user4.jpg')}
    style={{ cursor: 'pointer' }}
  />
</td>
{selectedImage && (
  <div className="image-modal" onClick={handleCloseModal}>
    <img src={selectedImage} alt="Enlarged" className="modal-img" />
  </div>
)}
                <td>
                  <div className="bold">Rohan Sharma</div>
                  <div className="gender male">Male</div>
                  <div className="small-text">9876543210</div>
                </td>
                <td>
             <Link
                             to={`/UserProfilePage`} target='_blank'>
                       {'DUL1234'}
                     </Link>
             <div className="green">Premium</div>   {/* ✅ Membership Status */}
              </td>
                <td>
                  <div>Single</div>
                  <a href="/Modal" className="green">
                  10 sent
                  </a>
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
    <a href="/UserProfilePage" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-file-pdf" title="PDF Profile"></i>
                        </a>
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
      </div>
    // </div>
  );
};

export default ClientReport;
