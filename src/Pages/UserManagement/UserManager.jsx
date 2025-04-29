import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserManager = () => {
  const initialUsers = [
    {
      sno: 1,
      userId: "7K7S3523",
      name: "Aakash",
      phone: "09811164762",
      email: "info@quotes91.com",
      role: "TL",
      status: "Active",
      reportTo: "Admin",
    },
    {
      sno: 2,
      userId: "7K7S9895",
      name: "Sonam Gupta",
      phone: "1231164762",
      email: "info@quote111.com",
      role: "RM",
      status: "Active",
      reportTo: "7K7S3523",
    },
    {
      sno: 3,
      userId: "7K7S6793",
      name: "TL01",
      phone: "09876598700",
      email: "info@quotes92.com",
      role: "TL",
      status: "Active",
      reportTo: "Admin",
    },
    {
      sno: 4,
      userId: "7K7S6568",
      name: "Deepak",
      phone: "9898987788",
      email: "rot@deepak.com",
      role: "RM",
      status: "Active",
      reportTo: "7K7S3523",
    },
    {
      sno: 5,
      userId: "admin",
      name: "Admin",
      phone: "9879879879",
      email: "admin@crm.crm",
      role: "adm",
      status: "Active",
      reportTo: "admin",
    },
    {
      sno: 6,
      userId: "7K7S3562",
      name: "deepika",
      phone: "9879879900",
      email: "deepika@abc.com",
      role: "TL",
      status: "Active",
      reportTo: "Admin",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    status: "Active",
    role: "Team Lead",
    reportTo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault(); // prevent page reload
    const newUser = {
      sno: users.length + 1,
      userId: Math.random().toString(36).substring(2, 10).toUpperCase(),
      name: form.name,
      phone: form.phone,
      email: form.email,
      role: form.role === "Team Lead" ? "TL" : "RM",
      status: form.status,
      reportTo: form.reportTo || "Admin",
    };
    setUsers([newUser, ...users]);
    setForm({
      name: "",
      phone: "",
      email: "",
      password: "",
      status: "Active",
      role: "Team Lead",
      reportTo: "",
    });
    setShowForm(false);
  };

  return (
    <div className="shortlist-profiles">
      <div className="container">
        <div className="row">
          <h2 className="section-title">User Manager</h2>
        </div>
      </div>

      <div className="container my-2">
        <form
          className="p-3 border border-1 rounded bg-white shadow-sm"
          onSubmit={handleAddUser}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>All User List</h4>
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "var(--pink)", color: "#fff" }}
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "CLOSE" : "ADD USER"}
            </button>
          </div>

          {showForm && (
            <div className="p-4 mb-4 rounded" style={{ background: "#f1f2f6" }}>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Phone No.</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Select Role</label>
                  <select
                    className="form-select"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                  >
                    <option>Team Lead</option>
                    <option>Relationship Manager</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Report To</label>
                  <select
                    className="form-select"
                    name="reportTo"
                    value={form.reportTo}
                    onChange={handleChange}
                  >
                    <option value="">Select Supervisor</option>
                    {users.map((u, i) => (
                      <option key={i} value={u.userId}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-success mt-2">
                    ADD USER
                  </button>
                </div>
              </div>
            </div>
          )}

          <hr />
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="border">
                <tr className="table-active">
                  <th>SNO</th>
                  <th>USER ID</th>
                  <th>NAME</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>STATUS</th>
                  <th>REPORT TO</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.sno}</td>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>{user.reportTo}</td>
                    <td>
                      <Link to="/editUser" className="text-warning">
                        <i
                          className="bi bi-pencil-square"
                          title="Edit"
                          style={{ fontSize: "1.5rem" }}
                        ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserManager;
