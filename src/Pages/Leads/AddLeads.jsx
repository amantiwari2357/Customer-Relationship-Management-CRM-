import React from "react";
import "./AddLeads.css";

const AddLeads = () => {
  return (
    <section className="add-leads-section">
      <div className="add-leads-container">
        <h2 className="add-leads-title">Add Leads</h2>
        <form className="add-leads-form">
          <div className="form-row">
            <div className="form-group">
              <label>Lead Source</label>
              <select>
                <option>Manual</option>
              </select>
            </div>
            <div className="form-group">
              <label>Lead Name</label>
              <input type="text" placeholder="Enter lead name" />
            </div>
            <div className="form-group">
              <label>Contact Person Name</label>
              <input type="text" placeholder="Enter contact name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Relation With Lead</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input type="text" defaultValue="India" />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Looking For</label>
              <select>
                <option>Bride</option>
                <option>Groom</option>
              </select>
            </div>
            <div className="form-group">
              <label>Assign To</label>
              <select>
                <option>Admin</option>
              </select>
            </div>
            <div className="form-group">
              <label>Budget</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Address</label>
              <textarea rows="2"></textarea>
            </div>
            <div className="form-group full-width">
              <label>Other Details</label>
              <textarea rows="2"></textarea>
            </div>
          </div>

          <div className="form-row">
            <button className="submit-btn" type="submit">ADD LEAD</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddLeads;
