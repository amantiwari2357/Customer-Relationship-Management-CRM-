import React, { useState } from "react";
import "./AllLeads.css";

const AllLeads = () => {
  const leads = [
    {
      id: "RZEHKWOYL",
      name: "gopi",
      phone: "9989988889",
      email: "del@fma.com",
      source: "Manual",
      lookingFor: "Bride",
      status: "New",
    },
  ];
  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (index) => {
    setOpenRow(openRow === index ? null : index);
  };



  // Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Set a default value for items per page
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
  
  return (
    <div className="leads-page">
      <h2 className="page-title">All Leads</h2>

      <form className="leads-filter-form">
        <h5 className="form-heading">Filter Leads</h5>
        <div className="form-grid">
          <input type="text" placeholder="Enter name" />
          <input type="text" placeholder="Enter phone" />
          <input type="email" placeholder="Enter email" />
          <select>
            <option>All</option>
            <option>Manual</option>
            <option>Website</option>
          </select>

          <input type="text" placeholder="Enter country" />
          <input type="text" placeholder="Enter state" />
          <input type="text" placeholder="Enter city" />
          <select>
            <option>All</option>
            <option>Bride</option>
            <option>Groom</option>
          </select>

          <input type="text" placeholder="Enter assignee" />
          <select>
            <option>All</option>
            <option>Open</option>
            <option>Closed</option>
            <option>Pending</option>
          </select>
          <input type="date" />
          <input type="date" />
        </div>
        <button type="submit" className="btn-primary">Filter</button>
      </form>

      <div className="leads-table-section">
        <h5 className="form-heading">Leads Assigned To Me</h5>
        <table className="leads-table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Source</th>
              <th>Looking For</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.email}</td>
                  <td>{lead.source}</td>
                  <td>{lead.lookingFor}</td>
                  <td>
                    <span className="badge">{lead.status}</span>
                  </td>
                  <td>
                    <button
                      className="action-btn comment"
                      onClick={() => toggleRow(index)}
                    >
                      💬
                    </button>
                    <button className="action-btn view">👁️</button>
                    <button className="action-btn swap">🔄</button>
                  </td>
                </tr>
                {openRow === index && (
                  <tr>
                    <td colSpan="9">
                      <div className="expanded-row">
                        <div className="row-group">
                          <select>
                            <option>Pending</option>
                            <option>Follow up</option>
                            <option>Closed</option>
                          </select>
                          <select>
                            <option>Select User</option>
                            <option>Admin</option>
                            <option>Manager</option>
                          </select>
                          <button className="btn-warning">Transfer</button>
                        </div>
                        <div className="row-group">
                          <textarea rows="2" placeholder="Disposition Notes"></textarea>
                          <div className="comment-box">No comments available.</div>
                        </div>
                        <button className="btn-success">Save</button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
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
    </div>
  );
};

export default AllLeads;
