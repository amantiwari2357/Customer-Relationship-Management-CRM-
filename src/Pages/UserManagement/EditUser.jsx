import React from "react";
import { Link } from "react-router-dom";
const EditUser = () => {
  return (
    <>
      <div className="shortlist-profiles">
        <div className="container">
          <div className="row">
            <h2 className="section-title">Edit User</h2>
          </div>
        </div>
        <div className="container mt-2">
          <form className="p-4 border border-1 rounded bg-white shadow-sm">
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="col-md-4">
                <label>Phone No.</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="col-md-4">
                <label>Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email ID"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label>Status</label>
                <select className="form-select">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="col-md-4">
                <label>Select Role</label>
                <select className="form-select">
                  <option>Team Lead</option>
                  <option>Relationship Manager</option>
                </select>
              </div>
              <div className="col-md-4">
                <label>Report To</label>
                <select className="form-select">
                  <option>Select Supervious</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 d-flex gap-3">
                <button className="btn btn-success" type="submit">
                  UPDATE USER
                </button>
                <Link to="/userManager">
                  <button className="btn btn-secondary">
                    BACK TO USER LIST
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
