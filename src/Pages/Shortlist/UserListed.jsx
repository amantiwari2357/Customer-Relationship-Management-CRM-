import React from "react";
import "../Shortlist/shortlist.css"; // Add custom styles here
import { useNavigate } from "react-router-dom";
import client from '../../Images/client1.png'
const UserListed = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Name 123",
      photo: client,
      dob: "10/23/2023",
      height: "5'3",
      caste: "-",
      budget: "-",
      profileSource: "Shaadi.com",
      education: "MBA",
      phone: "990045588",
      occupation: "Professional",
      income: "7 Lacs",
      residence: "Delhi",
      partnerPreference:
        "I am seeking someone who embodies the qualities of love, care, and loyalty. I envision a relationship built on mutual respect.",
      annualIncome: "7 Lacs",
    },
    {
      name: "Name 123",
      photo: client,
      dob: "10/23/2023",
      height: "5'7",
      caste: "50L",
      budget: "Just Dial",
      profileSource: "Just Dial",
      education: "B.Tech",
      phone: "990045588",
      occupation: "Professional",
      income: "19 Lacs",
      residence: "Gurugram",
      partnerPreference:
        "I am seeking someone who embodies the qualities of love, care, and loyalty. I envision a relationship built on mutual respect.",
      annualIncome: "10 Lacs",
    },
    {
      name: "Name 123",
      photo: client,
      dob: "10/23/2023",
      height: "5'4",
      caste: "-",
      budget: "-",
      profileSource: "Shaadi.com",
      education: "MBA",
      phone: "990045588",
      occupation: "Professional",
      income: "4 Lacs",
      residence: "Delhi",
      partnerPreference:
        "I am seeking someone who embodies the qualities of love, care, and loyalty. I envision a relationship built on mutual respect.",
      annualIncome: "4 Lacs",
    },
  ];

  return (
    <>
      <section className="shortlist-profiles">
        <div className="container">
            <div className="d-flex justify-content-between">
          <h2 className="section-title">Profiles Shortlisted - Pending Approval</h2>
<button className="all-buttons">Back</button>
            </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="admin-table">
                <tr>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>DOB</th>
                  <th>Height</th>
                  <th>Caste</th>
                  <th>Budget</th>
                  <th>Profile Source</th>
                  <th>Education</th>
                  <th>Phone</th>
                  <th>Occupation</th>
                  <th>Residence</th>
                  <th>Partner Preference</th>
                  <th>Annual Income</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile, index) => (
                  <tr key={index}>
                    <td>{profile.name}</td>
                    <td>
                      <img
                        src={profile.photo}
                        alt="profile"
                        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                      />
                    </td>
                    <td>{profile.dob}</td>
                    <td>{profile.height}</td>
                    <td>{profile.caste}</td>
                    <td>{profile.budget}</td>
                    <td>{profile.profileSource}</td>
                    <td>{profile.education}</td>
                    <td>{profile.phone}</td>
                    <td>{profile.occupation}</td>
                    <td>{profile.residence}</td>
                    <td>{profile.partnerPreference}</td>
                    <td>{profile.annualIncome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserListed;
