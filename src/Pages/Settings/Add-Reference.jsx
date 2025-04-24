import React, { useState } from 'react';
import './Add-Reference.css';

const AddReference = () => {
  const [form, setForm] = useState({
    category: '',
    name: '',
    key: '',
    priority: '1',
    description: '',
    status: 'Active',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = () => {
    console.log('Form Data:', form);
  };

  return (
    <div className="reference-container">
      <h2 className="title">Add New Reference</h2>
      <div className="form-grid">
        <div>
          <label>Select Category</label>
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">-- Select Category --</option>
            <option>Colleges</option>
            <option>Occupation</option>
            <option>Reference</option>
            <option>Visa Types</option>
            <option>Religion</option>
            <option>Caste</option>
            <option>Native State</option>
            <option>Qualificaton</option>
            <option>Income Slabes</option>

          </select>
        </div>
        <div>
          <label>Reference Name (cat_text)</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder='Enter your refrence name'/>
        
        </div>
        <div>
          <label>Reference Key (cat_value)</label>
          <input name="key" value={form.key} onChange={handleChange} placeholder='Enter your cat_value'/>
        </div>
        <div>
          <label>Priority</label>
          <input name="priority" value={form.priority} onChange={handleChange} placeholder='Enter Your Priority'/>
        </div>
        <div className="description-col">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder='Enter Your Description' />
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>
      <button className="save-btn" onClick={handleSubmit}>SAVE REFERENCE</button>

      <div className="category-cards">
        {[
          { name: 'Colleges', color: 'red', count: 0 },
          { name: 'Occupation', color: 'blue', count: 0 },
          { name: 'Reference', color: 'gray', count: 0 },
          { name: 'Visa Types', color: 'green', count: 0 },
          { name: 'Religion', color: 'red', count: 0 },
          { name: 'cast', color: 'blue', count: 0 },
          { name: ' Qualificaton', color: 'green', count: 0 },
          { name: 'Income Slabes', color: 'gray', count: 0 },

        ].map((item) => (
      <div
        className={`card ${item.color}`}
        key={item.name}
        onClick={() => alert(`You clicked on ${item.name}`)}
        role="button"
        tabIndex={0}
      >
        <div className="icon">👥</div>
        <h4>{item.name}</h4>
        <p>{item.count} Active Entries</p>
      </div>
        ))}
      </div>
    </div>
  );
};

export default AddReference;
