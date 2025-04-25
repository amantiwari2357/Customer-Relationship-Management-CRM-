import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ShareClient.css";

const ShareClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // Sample data - in a real app, you'd fetch this based on the ID
  const shareProfile = [
    {
      id: 1,
      photo: "https://via.placeholder.com/50",
      name: "Name123",
      maritalStatus: "Single",
      dob: "08/10/1996",
      height: "5'3",
      religion: "Religion",
      caste: "Caste",
      education: "Education",
      occupation: "Occupation",
      personalIncome: "Personal Income",
      contact: "Contact No., Email",
      state: "Delhi",
      city: "New Delhi",
      manglik: "Yes",
      clientId: "CL123",
      membershipStatus: "Active",
      profileSent: "Yes",
      handledBy: "Agent1",
      lastRemark: "Pending",
      budget: "50,000",
      nriStatus: "No",
    },
    // Add more profiles here
  ];

  const fields = [
  {
    label: "Client Name",
    name: "clientName",
    options: ["Madhuri Ajmani", "Name123"],
  },
  {
    label: "Select Gender",
    name: "gender",
    options: ["Male", "Female", "Other"],
  },
  {
    label: "Select Religion",
    name: "religion",
    options: ["Hindu", "Muslim", "Christian"],
  },
  {
    label: "Select Caste",
    name: "caste",
    options: ["General", "OBC", "SC/ST"],
  },
  { label: "Budget From", name: "budgetFrom", options: ["1L", "5L", "10L"] },
  { label: "Budget End", name: "budgetEnd", options: ["10L", "20L", "50L"] },
  { label: "Age From", name: "ageFrom", options: ["18", "25", "30"] },
  { label: "Age To", name: "ageTo", options: ["25", "30", "40"] },
  { label: "Year From", name: "yearFrom", options: ["2020", "2021", "2022"] },
  {
    label: "Marriage Status",
    name: "marriageStatus",
    options: ["Single", "Divorced"],
  },
  { label: "Astrologically", name: "astrologically", options: ["Yes", "No"] },
  { label: "NRI Status", name: "nriStatus", options: ["Yes", "No"] },
  {
    label: "Nationality",
    name: "nationality",
    options: ["Indian", "American"],
  },
  {
    label: "Height From",
    name: "heightFrom",
    options: ["4'5", "5'0", "5'5"],
  },
  { label: "Height To", name: "heightTo", options: ["5'5", "6'0", "6'5"] },
  { label: "Select Country", name: "country", options: ["India", "USA"] },
  {
    label: "Residential State",
    name: "residentialState",
    options: ["Delhi", "Mumbai"],
  },

  // Newly Added Fields
  {
    label: "Residential City",
    name: "residentialCity",
    options: ["Delhi", "Mumbai"],
  },
  {
    label: "Qualification",
    name: "qualification",
    options: ["Graduate", "Post-Graduate", "PhD"],
  },
  {
    label: "Occupation",
    name: "occupation",
    options: ["Engineer", "Doctor", "Business"],
  },
  {
    label: "Eating Habits",
    name: "eatingHabits",
    options: ["Veg", "Non-Veg", "Vegan"],
  },
  {
    label: "Member Status",
    name: "memberStatus",
    options: ["Active", "Inactive"],
  },
  {
    label: "Mobile No.",
    name: "mobileNo",
    options: ["Verified", "Not Verified"],
  },
  {
    label: "Drinking Habits",
    name: "drinkingHabits",
    options: ["Yes", "No"],
  },
  {
    label: "Personality",
    name: "personality",
    options: ["Introvert", "Extrovert"],
  },
  {
    label: "Willing to Go Abroad",
    name: "willingToGoAbroad",
    options: ["Yes", "No"],
  },
  {
    label: "Profile Handled By",
    name: "profileHandledBy",
    options: ["Self", "Parents", "Relatives"],
  },
  {
    label: "Father Occupation",
    name: "fatherOccupation",
    options: ["Business", "Retired", "Other"],
  },
  {
    label: "House Status",
    name: "houseStatus",
    options: ["Owned", "Rented"],
  },
  {
    label: "Open for Other Castes",
    name: "openForOtherCastes",
    options: ["Yes", "No"],
  },
  {
    label: "Annual Family Income From",
    name: "annualFamilyIncomeFrom",
    options: ["10L", "20L"],
  },
  {
    label: "Annual Family Income To",
    name: "annualFamilyIncomeTo",
    options: ["50L", "1Cr"],
  },
  {
    label: "Personal Income From",
    name: "personalIncomeFrom",
    options: ["5L", "10L"],
  },
  {
    label: "Personal Income To",
    name: "personalIncomeTo",
    options: ["15L", "50L"],
  },
  {
    label: "Membership Status",
    name: "membershipStatus",
    options: ["Active", "Inactive"],
  },
  {
    label: "Open for Other Status",
    name: "openForOtherStatus",
    options: ["Yes", "No"],
  },
  {
    label: "Profile ID",
    name: "profileId",
    options: ["Verified", "Not Verified"],
  },
  {
    label: "Profile Sourced From",
    name: "profileSourcedFrom",
    options: ["Online", "Referral"],
  },
  {
    label: "Open for Divorcee",
    name: "openForDivorcee",
    options: ["Yes", "No"],
  },
  {
    label: "Premium Colleges",
    name: "premiumColleges",
    options: ["Yes", "No"],
  },
  {
    label: "Premium Clients",
    name: "premiumClients",
    options: ["Yes", "No"],
  },
  {
    label: "Verified / Visited",
    name: "verifiedVisited",
    options: ["Yes", "No"],
  },
  { label: "Disability", name: "disability", options: ["Yes", "No"] },
];


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="share-profile-modal">
      <div className="modal-header">
        <h1 className="modal-title fs-5">Share Profile</h1>
        <button onClick={() => navigate(-1)} className="btn-close"></button>
      </div>

      <div>
        <div onClick={toggleDropdown} className="view-client-filter">
          <p>Filter</p>
          <i className={`bi bi-caret-${isOpen ? "up" : "down"}`}></i>
        </div>

        {isOpen && (
          <div id="filter-options">
            <form onSubmit={handleSubmit} className="container mt-4">
              <div className="row">
                {fields.map((field, index) => (
                  <div className="col-md-3 col-12" key={index}>
                    <label htmlFor={field.name} className="form-label">
                      {field.label}
                    </label>
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="all-buttons mt-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="modal-body">
        <div className="container mt-4">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="admin-table">
                <tr>
                  <th>Select</th>
                  <th>Photo</th>
                  <th>Name, Gender, Contact Details</th>
                  <th>Client ID, Membership Status</th>
                  <th>Marital Status, Profile Sent</th>
                  <th>Handled By, Last Remark</th>
                  <th>D.O.B & Age</th>
                  <th>Height, Manglik</th>
                  <th>Religion & Caste</th>
                  <th>Education / Occupation</th>
                  <th>Personal Income</th>
                  <th>Budget</th>
                  <th>Contact No. / Email</th>
                  <th>City & NRI Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {shareProfile.map((profile) => (
                  <tr key={profile.id}>
                    <td><input type="checkbox" /></td>
                    <td>
                      <img src={profile.photo} alt="Profile" width="50" />
                    </td>
                    <td>{profile.name}, Male, {profile.contact}</td>
                    <td>{profile.clientId}, {profile.membershipStatus}</td>
                    <td>{profile.maritalStatus}, {profile.profileSent}</td>
                    <td>{profile.handledBy}, {profile.lastRemark}</td>
                    <td>{profile.dob}</td>
                    <td>{profile.height}, {profile.manglik}</td>
                    <td>{profile.religion} / {profile.caste}</td>
                    <td>{profile.education} / {profile.occupation}</td>
                    <td>{profile.personalIncome}</td>
                    <td>{profile.budget}</td>
                    <td>{profile.contact}</td>
                    <td>{profile.city} / {profile.nriStatus}</td>
                    <td>
                      <button className="all-buttons">Send</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button onClick={() => navigate(-1)} className="all-buttons">
          Close
        </button>
        <button type="button" className="all-buttons">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShareClient;
