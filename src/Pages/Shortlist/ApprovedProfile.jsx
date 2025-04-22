import React from "react";

const ApprovedProfile = () => {
  return (
    <>
      <section className="shortlist-profiles">
        <div className="container">
          <h2 className="section-title">Approved Profiles</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="admin-table">
                <tr>
                  <th>Client Id</th>
                  <th>Client Name</th>
                  <th>Phone</th>
                  <th>Total Approved</th>
                  <th>Approved Date</th>
                  <th>Shortlisted By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>K3FG45</td>
                  <td>Madhuri Ajmani</td>
                  <td>9922993344</td>
                  <td>1</td>
                  <td>Kajal</td>
                  <td>06/10/2024</td>
                  <td>
                    <i className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>2</td>
                  <td>Kajal</td>
                  <td>08/12/2025</td>
                  <td>
                    <i className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>1</td>
                  <td>Kajal</td>
                  <td>06/10/2024</td>
                  <td>
                    <i className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>4</td>
                  <td>Kajal</td>
                  <td>06/10/2024</td>
                  <td>
                    <i className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>1</td>
                  <td>Kajal</td>
                  <td>06/10/2024</td>
                  <td>
                    <i className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApprovedProfile;
