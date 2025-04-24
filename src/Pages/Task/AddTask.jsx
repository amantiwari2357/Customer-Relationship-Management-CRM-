import React from "react";

const AddTask = () => {
  return (
    <section className="shortlist-profiles">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Add New Task</h2>
        </div>
      </div>
      <div className="container mt-2">
        <form className="p-3 border border-1 rounded bg-white shadow-sm">
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Task Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Task Title"
              />
            </div>

            <div className="col-md-4">
              <label>Task Category</label>
              <select className="form-select">
                <option>Operations</option>
                <option>Sales</option>
                <option>Support</option>
              </select>
            </div>

            <div className="col-md-4">
              <label>Task Priority</label>
              <select className="form-select">
                <option>Low</option>
                <option selected>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label>Assign To</label>
              <select className="form-select">
                <option>Select Assignee</option>
                <option>Admin</option>
                <option>User 1</option>
              </select>
            </div>

            <div className="col-md-4">
              <label>Follow-up Date</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-4">
              <label>Follow-up Time</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-12">
              <label>Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Task Description"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-success" type="submit">
                ADD TASK
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
