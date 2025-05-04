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
    </div>
  );
};

export default AllLeads;
