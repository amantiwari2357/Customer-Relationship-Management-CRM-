import React, { useState } from "react";

const RejectProfile = () => {
  const [actionIndex, setActionIndex] = useState(null);

  const handleDecision = (index, decision) => {
    console.log(`Row ${index} changed to: ${decision}`);
    setActionIndex(null);
  };

  const rejectedData = [
    {
      id: "K3FG45",
      name: "Name123",
      phone: "9922993344",
      total: 2,
      by: "Kajal",
      date: "08/12/2025",
    },
    {
      id: "K3FG45",
      name: "Name123",
      phone: "9922993344",
      total: 2,
      by: "Kajal",
      date: "08/12/2025",
    },
    {
      id: "K3FG45",
      name: "Name123",
      phone: "9922993344",
      total: 1,
      by: "Kajal",
      date: "06/10/2024",
    },
    {
      id: "K3FG45",
      name: "Name123",
      phone: "9922993344",
      total: 4,
      by: "Kajal",
      date: "06/10/2024",
    },
    {
      id: "K3FG45",
      name: "Name123",
      phone: "9922993344",
      total: 1,
      by: "Kajal",
      date: "06/10/2024",
    },
  ];

  return (
    <>
      <section className="shortlist-profiles">
        <div className="container">
          <h2 className="section-title">Rejected Profiles</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="admin-table">
                <tr>
                  <th>Client Id</th>
                  <th>Client Name</th>
                  <th>Phone</th>
                  <th>Total Approved</th>
                  <th>Approved Date</th>
                  <th>Shortlisted By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rejectedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.total}</td>
                    <td>{item.date}</td>
                    <td>{item.by}</td>
                    <td className="d-flex gap-2 position-relative">
                      <i className="bi bi-eye-fill action-icon" title="View"></i>
                      <i
                        onClick={() =>
                          setActionIndex(index === actionIndex ? null : index)
                        }
                        className="bi bi-pencil-square action-icon"
                        title="Change Status"
                      ></i>
                      {actionIndex === index && (
                        <div className="action-dropdown">
                          <button onClick={() => handleDecision(index, "Approved")}>
                            Approve
                          </button>
                          <button onClick={() => handleDecision(index, "Rejected")}>
                            Reject
                          </button>
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
    </>
  );
};

export default RejectProfile;
