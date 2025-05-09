import React, { useState } from "react";
import "../Shortlist/shortlist.css";
import { useNavigate } from "react-router-dom";

const ShortlistProfile = () => {
  const navigate = useNavigate();
  const [actionIndex, setActionIndex] = useState(null); // Track which row is toggling action

  const handleDecision = (index, decision) => {
    console.log(`Row ${index} - ${decision}`);
    setActionIndex(null); // Close dropdown after decision
  };

  const data = [
    { id: "K3FG45", name: "Madhuri Ajmani", phone: "9922993344", pending: 1, by: "Kajal" },
    { id: "K3FG45", name: "Name123", phone: "9922993344", pending: 2, by: "Kajal" },
    { id: "K3FG45", name: "Name123", phone: "9922993344", pending: 1, by: "Kajal" },
    { id: "K3FG45", name: "Name123", phone: "9922993344", pending: 4, by: "Kajal" },
    { id: "K3FG45", name: "Name123", phone: "9922993344", pending: 1, by: "Kajal" },
  ];

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
    <section className="shortlist-profiles">
      <div className="container">
        <h2 className="section-title">Shortlisted Profiles</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="admin-table">
              <tr>
                <th>Client Id</th>
                <th>Client Name</th>
                <th>Phone</th>
                <th>Pending for Approval</th>
                <th>Shortlisted by</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.pending}</td>
                  <td>{item.by}</td>
                  <td className="d-flex gap-2 position-relative">
                    <i
                      onClick={() => navigate("/user-listed")}
                      className="bi bi-eye-fill action-icon"
                      title="View"
                    ></i>
                    <i
                      onClick={() => setActionIndex(index === actionIndex ? null : index)}
                      className="bi bi-pencil-square action-icon"
                      title="Approve/Reject"
                    ></i>
                    {actionIndex === index && (
                      <div className="action-dropdown">
                        <button onClick={() => handleDecision(index, "Approved")}>Approve</button>
                        <button onClick={() => handleDecision(index, "Rejected")}>Reject</button>
                      </div>
                    )}
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
            
      </div>
    </section>
  );
};

export default ShortlistProfile;
