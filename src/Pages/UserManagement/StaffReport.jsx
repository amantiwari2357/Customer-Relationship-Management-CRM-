import React from "react";

const StaffReport = () => {
  const data = [
    {
      name: "John Doe",
      viewed: 120,
      sent: 45,
      meetings: 15,
      interaction: 200,
      handled: 30,
      created: 50,
      payment: "₹5,00,000",
    },
    {
      name: "Jane Smith",
      viewed: 98,
      sent: 35,
      meetings: 10,
      interaction: 180,
      handled: 25,
      created: 40,
      payment: "₹4,50,000",
    },
  ];

  return (
    <>
      <section className="shortlist-profiles">
        <div className="container">
          <div className="row">
            <h2 className="section-title">Staff Performance Report</h2>
          </div>
        </div>
        <div className="container mt-2">
          <form className="p-3 border border-1 rounded bg-white shadow-sm">
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Select Staff</label>
                <select className="form-select">
                  <option>All Staff</option>
                  <option>Gaurav</option>
                  <option>Vishnu</option>
                </select>
              </div>

              <div className="col-md-4">
                <label>Date Range From</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-4">
                <label>Date Range to</label>
                <input type="date" className="form-control" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 m-auto text-center">
                <button
                  className="btn px-5"
                  type="submit"
                  style={{ color: "white", backgroundColor: "var(--pink" }}
                >
                  SEARCH
                </button>
              </div>
            </div>
            <table className="table table-bordered table-striped mt-4">
              <thead>
                <tr className="text-center">
                  <th>Name</th>
                  <th>No. of Profiles Viewed</th>
                  <th>No. of Profiles Sent</th>
                  <th>No. of Meetings Scheduled</th>
                  <th>Total Client Interaction</th>
                  <th>Profiles Handled</th>
                  <th>Profiles Created</th>
                  <th>Total Payment Collected</th>
                </tr>
              </thead>
              <tbody>
                {data.map((staff, index) => (
                  <tr key={index} className="text-center">
                    <td>{staff.name}</td>
                    <td>{staff.viewed}</td>
                    <td>{staff.sent}</td>
                    <td>{staff.meetings}</td>
                    <td>{staff.interaction}</td>
                    <td>{staff.handled}</td>
                    <td>{staff.created}</td>
                    <td>{staff.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </section>
    </>
  );
};

export default StaffReport;
