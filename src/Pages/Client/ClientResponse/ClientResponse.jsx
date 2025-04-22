import React from "react";
import "./ClientResponse.css";

const ClientResponse = () => {
  return (
    <div className="client-response-section">
      {/* Header */}
      <h4>Client Response</h4>

      {/* Response Form */}
      <div className="client-response-form">
        <div className="form-group">
          <label className="form-label">Response:</label>
          <select className="form-select">
            <option value="">Select Response</option>
            <option value="accept">Accept</option>
            <option value="reject">Reject</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Client remark:</label>
          <select className="form-select">
            <option value="">Select Remark</option>
            <option value="others">Others</option>
            <option value="not-suitable">Not Suitable</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Proposal Details</label>
          <textarea
            className="form-textarea"
            placeholder="Price"
          ></textarea>
        </div>

        <button className="all-buttons">
          Submit response
        </button>
      </div>

      {/* Response Table */}
      <div className="client-response-table">
        <table className="response-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Client remark</th>
              <th>Staff remark</th>
              <th>Added by</th>
              <th>Added by user type</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reject</td>
              <td>Others</td>
              <td>Not Suitable Due to Education Need at least Graduation</td>
              <td>Miss Ruby</td>
              <td>User</td>
              <td>11/12/2024 11:34 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientResponse;
