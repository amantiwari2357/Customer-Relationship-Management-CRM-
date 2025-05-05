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
      </div>
    </section>
  );
};

export default ShortlistProfile;
