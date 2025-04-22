import React from "react";
import "../Shortlist/shortlist.css"; // Add custom styles here
import { useNavigate } from "react-router-dom";

const ShortlistProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="shortlist-profiles">
        <div className="container">
          <h2 className="section-title">Shortlisted Profiles</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="admin-table">
                <tr>
                  <th>Client Id</th>
                  <th>Client Name</th>
                  <th>Phone</th>
                  <th>Pending for Approval</th>
                  <th>Shortlisted by</th>
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
                  <td>
                    <i onClick={(()=>navigate("/user-listed"))} className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>2</td>
                  <td>Kajal</td>
                  <td>
                    <i onClick={(()=>navigate("/user-listed"))} className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>1</td>
                  <td>Kajal</td>
                  <td>
                    <i onClick={(()=>navigate("/user-listed"))} className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>4</td>
                  <td>Kajal</td>
                  <td>
                    <i onClick={(()=>navigate("/user-listed"))} className="bi bi-eye-fill action-icon"></i>
                  </td>
                </tr>
                <tr>
                  <td>K3FG45</td>
                  <td>Name123</td>
                  <td>9922993344</td>
                  <td>1</td>
                  <td>Kajal</td>
                  <td>
                    <i onClick={(()=>navigate("/user-listed"))} className="bi bi-eye-fill action-icon"></i>
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

export default ShortlistProfile;
