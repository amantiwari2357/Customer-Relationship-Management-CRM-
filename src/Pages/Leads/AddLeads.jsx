import React from "react";

const AddLeads = () => {
  return (
    <>
      <section className="shortlist-profiles">
        <div className="container">
          <div className="row">
            <h2 className="section-title">Add Leads</h2>
          </div>
        </div>
        <div className="container mt-2">
          <form className="p-3 border border-1 rounded bg-white shadow-sm">
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Lead Source</label>
                <select className="form-select">
                  <option>Manual</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="col-md-4">
                <label>Lead Name </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter lead name"
                />
              </div>
              <div className="col-md-4">
                <label>Contact Person Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter contact name"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label>Relation With Lead</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label>Country </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="India"
                />
              </div>
              <div className="col-md-4">
                <label>State </label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label>City</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label>Phone Number </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4">
                <label>Email Address </label>
                <input type="email" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label>Looking For </label>
                <select className="form-select">
                  <option>Bride</option>
                  <option>Groom</option>
                </select>
              </div>
              <div className="col-md-4">
                <label>Assign To</label>
                <select className="form-select">
                  <option>Admin</option>
                  {/* Add more users as needed */}
                </select>
              </div>
              <div className="col-md-4">
                <label>Budget</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Address</label>
                <textarea className="form-control" rows="2" />
              </div>
              <div className="col-md-6">
                <label>Other Details</label>
                <textarea className="form-control" rows="2" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <button
                  className="btn"
                  type="submit"
                  style={{ background: "var(--pink)", color: "#fff" }}
                >
                  ADD LEAD
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddLeads;
