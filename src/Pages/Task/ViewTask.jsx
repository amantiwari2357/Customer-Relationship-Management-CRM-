import React from "react";

const ViewTask = () => {
  const tasks = [
    {
      id: 5001,
      title: "hi tea",
      category: "Support",
      priority: "Critical",
      assignedBy: "admin",
      assignedTo: "7K7S6568",
      status: "Pending",
      followUp: "13 Feb 2025 12:39",
    },
    {
      id: 4,
      title: "sample",
      category: "Legal",
      priority: "Critical",
      assignedBy: "admin",
      assignedTo: "7K7S6793",
      status: "Pending",
      followUp: "08 Feb 2025 13:26",
    },
    {
      id: 5000,
      title: "sample 2",
      category: "Legal",
      priority: "High",
      assignedBy: "admin",
      assignedTo: "7K7S6793",
      status: "Completed",
      followUp: "07 Feb 2025 20:50",
    },
    {
      id: 3,
      title: "22",
      category: "Support",
      priority: "Medium",
      assignedBy: "admin",
      assignedTo: "7K7S9895",
      status: "Completed",
      followUp: "07 Feb 2025 13:06",
    },
    {
      id: 1,
      title: "11",
      category: "Operations",
      priority: "Medium",
      assignedBy: "admin",
      assignedTo: "7K7S3523",
      status: "Pending",
      followUp: "01 Jan 1970 00:00",
    },
    {
      id: 2,
      title: "333",
      category: "Operations",
      priority: "Medium",
      assignedBy: "admin",
      assignedTo: "7K7S3523",
      status: "Pending",
      followUp: "23 Apr 2025 13:18",
    },
  ];

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "Critical":
        return <span className="badge bg-success">{priority}</span>;
      case "High":
        return <span className="badge bg-danger">{priority}</span>;
      case "Medium":
        return <span className="badge bg-warning text-dark">{priority}</span>;
      default:
        return <span className="badge bg-secondary">{priority}</span>;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return <span className="badge bg-warning text-dark">{status}</span>;
      case "Completed":
        return <span className="badge bg-success">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  // Pagination logic
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tasks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section className="shortlist-profiles">
        <div className="container">
          <div className="row">
            <h2 className="section-title">View Task</h2>
          </div>
        </div>
      </section>

      <div className="container mt-2 mb-4">
        {/* Filter Tasks */}
        <div
          className="card-header p-2 rounded-top text-center"
          style={{ background: "#cc2b85", color: "#ffff" }}
        >
          <h5 className="mb-0">Filter Tasks</h5>
        </div>
        <div className="p-3 border border-1 rounded-bottom bg-white shadow-sm mb-4">
          <div className="row">
            <div className="col-md-3">
              <label>Category</label>
              <select className="form-select">
                <option>All</option>
              </select>
            </div>
            <div className="col-md-3">
              <label>Status</label>
              <select className="form-select">
                <option>All</option>
              </select>
            </div>
            <div className="col-md-3">
              <label>Follow-Up Date (From)</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <label>Follow-Up Date (To)</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              className="btn w-25"
              style={{ background: "#cc2b85", color: "#ffff" }}
            >
              FILTER
            </button>
          </div>
        </div>

        <div
          className="card-header p-2 rounded-top text-center"
          style={{ background: "#cc2b85", color: "#ffff" }}
        >
          <h5 className="mb-0">Tasks Assigned To Me / By Me</h5>
        </div>
        <div className="table-responsive border border-top-0 rounded-bottom">
          <table className="table table-bordered mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Assigned By</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Follow-Up Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr key={task.id}>
                  <td>{idx + 1}</td>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.category}</td>
                  <td>{getPriorityBadge(task.priority)}</td>
                  <td>{task.assignedBy}</td>
                  <td>{task.assignedTo}</td>
                  <td>{getStatusBadge(task.status)}</td>
                  <td>{task.followUp}</td>
                  <td>
                    <button className="btn btn-sm btn-primary me-1">
                      <i className="bi bi-chat-left-dots"></i>
                    </button>
                    <button className="btn btn-sm btn-success">
                      <i className="bi bi-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         {/* Pagination Controls */}
         <div className="pagination">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              {pageNumbers.map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
      </div>
    </>
  );
};

export default ViewTask;
