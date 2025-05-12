import React, { useState, useEffect } from "react";
import "../Shortlist/shortlist.css";
import { useNavigate } from "react-router-dom";
import client from '../../Images/client1.png';

const UserListed = () => {
  const navigate = useNavigate();

  // Profiles data
  const profiles = [
    {
      name: "Name 123",
      photo: client,
      dob: "10/23/2023",
      height: "5'3",
      caste: "-",
      budget: "-",
      profileSource: "Shaadi.com",
      education: "MBA",
      phone: "990045588",
      occupation: "Professional",
      income: "7 Lacs",
      residence: "Delhi",
      partnerPreference:
        "I am seeking someone who embodies the qualities of love, care, and loyalty. I envision a relationship built on mutual respect.",
      annualIncome: "7 Lacs",
    },
    {
      name: "Name 123",
      photo: client,
      dob: "10/23/2023",
      height: "5'7",
      caste: "50L",
      budget: "Just Dial",
      profileSource: "Just Dial",
      education: "B.Tech",
      phone: "990045588",
      occupation: "Professional",
      income: "19 Lacs",
      residence: "Gurugram",
      partnerPreference:
        "I am seeking someone who embodies the qualities of love, care, and loyalty. I envision a relationship built on mutual respect.",
      annualIncome: "10 Lacs",
    },
    {
      name: "Name 123",
      photo: client,
      dob: "10/23/2023",
      height: "5'4",
      caste: "-",
      budget: "-",
      profileSource: "Shaadi.com",
      education: "MBA",
      phone: "990045588",
      occupation: "Professional",
      income: "4 Lacs",
      residence: "Delhi",
      partnerPreference:
        "I am seeking someone who embodies the qualities of love, care, and loyalty. I envision a relationship built on mutual respect.",
      annualIncome: "4 Lacs",
    },
  ];

  // Initialize profileStatuses with the same length as profiles, setting default "Pending" status
  const [profileStatuses, setProfileStatuses] = useState(
    profiles.map(() => ({ status: "Pending" }))
  );

  const handleStatusChange = (index: number, value: string) => {
    const updatedStatuses = [...profileStatuses];
    updatedStatuses[index].status = value;
    setProfileStatuses(updatedStatuses);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Define items per page
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = profiles.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(profiles.length / itemsPerPage);
  
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
    <>
      <section className="shortlist-profiles">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="section-title">Profiles Shortlisted - Pending Approval</h2>
            <button className="all-buttons" onClick={() => navigate(-1)}>Back</button>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="admin-table">
                <tr>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>DOB</th>
                  <th>Height</th>
                  <th>Caste</th>
                  <th>Budget</th>
                  <th>Profile Source</th>
                  <th>Education</th>
                  <th>Phone</th>
                  <th>Occupation</th>
                  <th>Residence</th>
                  <th>Partner Preference</th>
                  <th>Annual Income</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile, index) => (
                  <tr key={index}>
                    <td>{profile.name}</td>
                    <td>
                      <img
                        src={profile.photo}
                        alt="profile"
                        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td>{profile.dob}</td>
                    <td>{profile.height}</td>
                    <td>{profile.caste}</td>
                    <td>{profile.budget}</td>
                    <td>{profile.profileSource}</td>
                    <td>{profile.education}</td>
                    <td>{profile.phone}</td>
                    <td>{profile.occupation}</td>
                    <td>{profile.residence}</td>
                    <td>{profile.partnerPreference}</td>
                    <td>{profile.annualIncome}</td>
                    <td>
                      <select
                        className="form-select"
                        value={profileStatuses[index]?.status}
                        onChange={(e) => handleStatusChange(index, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
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
    </>
  );
};

export default UserListed;
