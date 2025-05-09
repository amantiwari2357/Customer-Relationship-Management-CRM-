import React, { useState } from 'react';
import './activity-log.css';

const ActivityLog = () => {
  const [userType, setUserType] = useState('All Users');
  const [module, setModule] = useState('All Modules');
  const [currentPage, setCurrentPage] = useState(1); // Added state for current page
  const itemsPerPage = 5; // Define items per page

  const activityData = [
    {
      id: 1,
      userName: 'Vishnu',
      module: 'Login',
      clientName: 'Aman Tiwari',
      modifications: 'User logged in',
      recordId: '1234',
      dateTime: '2025-04-01 10:15 AM',
    },
    {
      id: 2,
      userName: 'Gourav',
      module: 'Update',
      clientName: 'Amit Sharma',
      modifications: 'Updated Contact Info',
      recordId: '12345',
      dateTime: '2025-02-01 11:30 AM',
    },
    {
      id: 3,
      userName: 'Admin',
      module: 'Delete',
      clientName: 'Pooja Rani',
      modifications: 'Deleted Profile',
      recordId: '67890',
      dateTime: '2025-02-01 01:45 PM',
    },

    {
      id: 2,
      userName: 'Gourav',
      module: 'Update',
      clientName: 'Amit Sharma',
      modifications: 'Updated Contact Info',
      recordId: '12345',
      dateTime: '2025-02-01 11:30 AM',
    },
    {
      id: 3,
      userName: 'Admin',
      module: 'Delete',
      clientName: 'Pooja Rani',
      modifications: 'Deleted Profile',
      recordId: '67890',
      dateTime: '2025-02-01 01:45 PM',
    },

    {
      id: 2,
      userName: 'Gourav',
      module: 'Update',
      clientName: 'Amit Sharma',
      modifications: 'Updated Contact Info',
      recordId: '12345',
      dateTime: '2025-02-01 11:30 AM',
    },
    {
      id: 3,
      userName: 'Admin',
      module: 'Delete',
      clientName: 'Pooja Rani',
      modifications: 'Deleted Profile',
      recordId: '67890',
      dateTime: '2025-02-01 01:45 PM',
    },
    {
      id: 2,
      userName: 'Gourav',
      module: 'Update',
      clientName: 'Amit Sharma',
      modifications: 'Updated Contact Info',
      recordId: '12345',
      dateTime: '2025-02-01 11:30 AM',
    },
    {
      id: 3,
      userName: 'Admin',
      module: 'Delete',
      clientName: 'Pooja Rani',
      modifications: 'Deleted Profile',
      recordId: '67890',
      dateTime: '2025-02-01 01:45 PM',
    },
  ];

  const filteredData = activityData.filter((item) => {
    return (
      (userType === 'All Users' || item.userName.toLowerCase().includes(userType.toLowerCase())) &&
      (module === 'All Modules' || item.module === module)
    );
  });


  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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

  

  return (
    <div className="activity-log-container">
      <h2 className="activity-log-title">Activity Log</h2>

      <div className="activity-log-filters">
        <div className="activity-log-filter-group">
          <label>User Type</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option>All Users</option>
            <option>Vishnu</option>
            <option>Gourav</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="activity-log-filter-group">
          <label>Module</label>
          <select value={module} onChange={(e) => setModule(e.target.value)}>
            <option>All Modules</option>
            <option>Login</option>
            <option>Update</option>
            <option>Delete</option>
          </select>
        </div>
        <button className="activity-log-search-btn">SEARCH</button>
      </div>

      <table className="activity-log-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>User Name</th>
            <th>Module</th>
            <th>Client Name</th>
            <th>Recent Modifications</th>
            <th>Record ID</th>
            <th>Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.userName}</td>
                <td>{item.module}</td>
                <td>{item.clientName}</td>
                <td>{item.modifications}</td>
                <td>{item.recordId}</td>
                <td>{item.dateTime}</td>
                <td>
                  <button
                    className="activity-log-eye-icon"
                    title="View Details"
                    onClick={() => alert(`Viewing details for record ID: ${item.recordId}`)}
                  >
                    <i className="bi bi-eye-fill"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-records">
                No activity logs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
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
    
  );
};

export default ActivityLog;
