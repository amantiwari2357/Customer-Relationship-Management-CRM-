import React, { useState } from "react";
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
    {
      id: "0WM2Q1GAK",
      name: "wwwwwww",
      phone: "wwww",
      email: "w1@gmail.com",
      source: "Manual",
      lookingFor: "Groom",
      status: "New",
    },
  ];

  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (index) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <>
      <div className="shortlist-profiles">
        <div className="container">
          <div className="row">
            <h2 className="section-title">All Leads</h2>
          </div>
        </div>
        <div className="container mt-2">
          <form className="p-3 border border-1 rounded bg-white shadow-sm">
            <div
              className="card-header p-2 rounded text-center"
              style={{ background: "#cc2b85", color: "#ffff" }}
            >
              <h5 className="mb-0">Filter Leads</h5>
            </div>
            <div className="row my-3">
              <div className="col-md-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div className="col-md-3">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone"
                />
              </div>
              <div className="col-md-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-md-3">
                <label>Source</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Manual</option>
                  <option>Website</option>
                  {/* Add more sources as needed */}
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-3">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter country"
                />
              </div>
              <div className="col-md-3">
                <label>State</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter state"
                />
              </div>
              <div className="col-md-3">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city"
                />
              </div>
              <div className="col-md-3">
                <label>Looking For</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Bride</option>
                  <option>Groom</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-3">
                <label>Assigned To</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter assignee"
                />
              </div>
              <div className="col-md-3">
                <label>Status</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Open</option>
                  <option>Closed</option>
                  <option>Pending</option>
                </select>
              </div>
              <div className="col-md-3">
                <label>Date From</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-3">
                <label>Date To</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <button
                  type="submit"
                  className="btn w-100"
                  style={{ background: "#cc2b85", color: "#fff" }}
                >
                  FILTER
                </button>
              </div>
            </div>
          </form>

          <div className="card mt-4">
            <div
              className="p-2 rounded text-center"
              style={{ background: "#cc2b85", color: "#ffff" }}
            >
              <h5 className="mb-0">Leads Assigned To Me</h5>
            </div>
            <div className="card-body p-0">
              <table className="table table-bordered mb-0">
                <thead className="table-light">
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
                    <>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{lead.id}</td>
                        <td>{lead.name}</td>
                        <td>{lead.phone}</td>
                        <td>{lead.email}</td>
                        <td>{lead.source}</td>
                        <td>{lead.lookingFor}</td>
                        <td>
                          <span className="badge bg-warning text-dark">
                            {lead.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary me-1"
                            title="Comment"
                            onClick={() => toggleRow(index)}
                          >
                            <i className="bi bi-chat-dots-fill"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-success me-1"
                            title="View"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                          <button
                            className="btn btn-sm btn-warning text-white"
                            title="Swap"
                          >
                            <i className="bi bi-arrow-left-right"></i>
                          </button>
                        </td>
                      </tr>

                      {openRow === index && (
                        <tr>
                          <td colSpan="9">
                            <div className="row g-3">
                              <div className="col-md-5">
                                <label className="form-label">
                                  Disposition
                                </label>
                                <select className="form-select">
                                  <option>Pending</option>
                                  <option>Follow up</option>
                                  <option>Closed</option>
                                </select>
                              </div>

                              <div className="col-md-5">
                                <label className="form-label">
                                  Transfer To
                                </label>
                                <select className="form-select">
                                  <option>Select User</option>
                                  <option>Admin</option>
                                  <option>Manager</option>
                                </select>
                              </div>

                              <div className="col-md-2 d-flex align-items-end">
                                <button className="btn bg-warning text-white">
                                  TRANSFER
                                </button>
                              </div>

                              <div className="col-md-5">
                                <label className="form-label">
                                  Disposition Notes
                                </label>
                                <textarea
                                  className="form-control"
                                  rows="2"
                                ></textarea>
                              </div>

                              <div className="col-md-5">
                                <label className="form-label">
                                  Latest Comment
                                </label>
                                <div
                                  className="form-control"
                                  style={{ backgroundColor: "#f8f9fa" }}
                                >
                                  No comments available.
                                </div>
                              </div>

                              <div className="col-12 text-start">
                                <button className="btn bg-success text-white">
                                  Save
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLeads;
