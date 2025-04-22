import React from "react";

const AddTask = () => {
  return (
    <>
      <div className="client-response-section">
        {/* Header */}
        <h4 className="client-response-title">Add Task</h4>
        <div className="client-response-form">
          <form action="">
            <div className="row">
              <div className="col-md-6 mb-2">
                <label htmlFor="">
                  Task Category <span className="required">*</span>
                </label>
                <select className="form-control">
                  <option value="Task 1">Task 1</option>
                  <option value="Task 2">Task 2</option>
                  <option value="Task 3">Task 3</option>
                  <option value="Task 4">Task 4</option>
                </select>
              </div>
              <div className="col-md-6 mb-2">
                <label htmlFor="">
                  Task Assigned To <span className="required">*</span>
                </label>
                <select className="form-control">
                  <option value="Task 1">Task 1</option>
                  <option value="Task 2">Task 2</option>
                  <option value="Task 3">Task 3</option>
                  <option value="Task 4">Task 4</option>
                </select>
              </div>
              <div className="col-md-6 mb-2">
                <label htmlFor="">
                  Task Title<span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="task-title"
                  id=""
                />
              </div>
              <div className="col-md-6 mb-2">
                <label htmlFor="">
                  Task Scheduled On<span className="required">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="task-schedule"
                  id=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-4">
                  <label htmlFor="task-priority">Task Priority <span>*</span></label>
                  <div className="d-flex gap-1">
                    <input
                      type="radio"
                      name="task-priority"
                      id="priority-normal"
                    />
                    <label htmlFor="priority-normal">Normal</label>
                  </div>
                  <div className="d-flex gap-1">
                    <input
                      type="radio"
                      name="task-priority"
                      id="priority-urgent"
                    />
                    <label htmlFor="priority-urgent">Urgent</label>
                  </div>
                </div>
              </div>

              <div className="col-md-12 text-center">
                <button className="all-buttons">Add Task</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;
