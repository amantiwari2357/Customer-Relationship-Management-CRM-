import React, { useState } from "react";
import "./View-preference.css";

const referenceData = [
  { id: 5, category: "Caste", value: "Brahmin", description: "Brahmin Caste", priority: 1, status: "Active" },
  { id: 4, category: "Caste", value: "Rajput", description: "Rajput Community", priority: 2, status: "Active" },
  { id: 3, category: "Caste", value: "Punjabi", description: "Punjabi Caste", priority: 3, status: "Active" },
  { id: 2, category: "Caste", value: "Baniya", description: "Baniya Caste", priority: 4, status: "Active" },
  { id: 1, category: "Caste", value: "Jaat", description: "Jaat Caste", priority: 5, status: "Active" },
];

const ViewReferences = () => {
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [editRowId, setEditRowId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (ref) => {
    setEditRowId(ref.id);
    setEditData({ ...ref });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving data:", editData);
    setEditRowId(null); // Close edit form
  };

  return (
    <div className="view-references">
      <h2>View References</h2>

      <div className="filters">
        <div className="filter-group">
          <label>Select Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All Categories</option>
            <option>Caste</option>
            <option>College</option>
            <option>Complexion</option>
            <option>Disposition</option>
            <option>Drinking Habits</option>
            <option>Eating Habits</option>
            <option>Eye Sight</option>
            <option>Gender</option>
            <option>Marital Status</option>
            <option>Personality</option>
            <option>Religion</option>
            <option>Smoking Habits</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button className="search-btn">Search</button>
      </div>

      <table className="reference-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>CATEGORY</th>
            <th>VALUE</th>
            <th>DESCRIPTION</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {referenceData.map((ref, index) => (
            <React.Fragment key={ref.id}>
              <tr>
                <td>{index + 1}</td>
                <td>{ref.category}</td>
                <td>{ref.value}</td>
                <td>{ref.description}</td>
                <td>{ref.priority}</td>
                <td>
                  <span className={`status-badge ${ref.status.toLowerCase()}`}>{ref.status}</span>
                </td>
                <td>
                  <button className="edit-btn" title="Edit" onClick={() => handleEditClick(ref)}>
                    ✏️
                  </button>
                </td>
              </tr>
              {editRowId === ref.id && (
                <tr className="edit-row">
                  <td colSpan="7">
                    <div className="edit-form">
                      <input
                        type="text"
                        name="value"
                        value={editData.value}
                        onChange={handleEditChange}
                        placeholder="Value"
                      />
                      <input
                        type="text"
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                        placeholder="Description"
                      />
                      <input
                        type="number"
                        name="priority"
                        value={editData.priority}
                        onChange={handleEditChange}
                        placeholder="Priority"
                      />
                      <select name="status" value={editData.status} onChange={handleEditChange}>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditRowId(null)}>Cancel</button>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReferences;
