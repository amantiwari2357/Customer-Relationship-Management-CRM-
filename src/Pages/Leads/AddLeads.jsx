import React from "react";
import "./AddLeads.css";

const AddLeads = () => {
  return (
    <section className="add-leads-section">
      <div className="add-leads-wrapper">
        <h2 className="add-leads-title">Add Leads</h2>
        <form className="add-leads-form">
          <div className="form-row">
            <div className="form-field">
              <label>Lead Source</label>
              <select>
                <option>Manual</option>
              </select>
            </div>
            <div className="form-field">
              <label>Lead Name</label>
              <input type="text" placeholder="Enter lead name" />
            </div>
            <div className="form-field">
              <label>Contact Person Name</label>
              <input type="text" placeholder="Enter contact name" />
            </div>
            <div className="form-field">
              <label>Relation With Lead</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Country</label>
              <input type="text" defaultValue="India" />
            </div>
            <div className="form-field">
              <label>State</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label>City</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Email Address</label>
              <input type="email" />
            </div>
            <div className="form-field">
              <label>Looking For</label>
              <select>
                <option>Bride</option>
                <option>Groom</option>
              </select>
            </div>
            <div className="form-field">
              <label>Assign To</label>
              <select>
                <option>Admin</option>
              </select>
            </div>
            <div className="form-field">
              <label>Budget</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field full-width">
              <label>Address</label>
              <textarea rows="2"></textarea>
            </div>
            <div className="form-field full-width">
              <label>Other Details</label>
              <textarea rows="2"></textarea>
            </div>
          </div>

          <div className="form-row">
            <button className="submit-button" type="submit">
              ADD LEAD
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddLeads;
