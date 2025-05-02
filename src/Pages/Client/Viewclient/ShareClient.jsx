import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ShareClient.css";

const ShareClient = () => {
  useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [customInput, setCustomInput] = useState({});

  // Sample data - in a real app, you'd fetch this based on the ID
  const shareProfile = [
    {
      id: 1,
      photo: "/images/user.jpg",
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
      allowCustom: true,
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
      allowCustom: true,
    },
    {
      label: "Select Caste",
      name: "caste",
      options: ["General", "OBC", "SC/ST"],
      allowCustom: true,
    },
    { label: "Budget From", name: "budgetFrom", options: ["1L", "5L", "10L"], allowCustom: true },
    { label: "Budget End", name: "budgetEnd", options: ["10L", "20L", "50L"], allowCustom: true },
    { label: "Age From", name: "ageFrom", options: ["18", "25", "30"], allowCustom: true },
    { label: "Age To", name: "ageTo", options: ["25", "30", "40"], allowCustom: true },
    { label: "Year From", name: "yearFrom", options: ["2020", "2021", "2022"], allowCustom: true },
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
      allowCustom: true,
    },
    {
      label: "Height From",
      name: "heightFrom",
      options: ["4'5", "5'0", "5'5"],
      allowCustom: true,
    },
    { label: "Height To", name: "heightTo", options: ["5'5", "6'0", "6'5"], allowCustom: true },
    { label: "Select Country", name: "country", options: ["India", "USA"], allowCustom: true },
    {
      label: "Residential State",
      name: "residentialState",
      options: ["Delhi", "Mumbai"],
      allowCustom: true,
    },

    // Newly Added Fields
    {
      label: "Residential City",
      name: "residentialCity",
      options: ["Delhi", "Mumbai"],
      allowCustom: true,
    },
    {
      label: "Qualification",
      name: "qualification",
      options: ["Graduate", "Post-Graduate", "PhD"],
      allowCustom: true,
    },
    {
      label: "Occupation",
      name: "occupation",
      options: ["Engineer", "Doctor", "Business"],
      allowCustom: true,
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
      allowCustom: true,
    },
    {
      label: "Father Occupation",
      name: "fatherOccupation",
      options: ["Business", "Retired", "Other"],
      allowCustom: true,
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
      allowCustom: true,
    },
    {
      label: "Annual Family Income To",
      name: "annualFamilyIncomeTo",
      options: ["50L", "1Cr"],
      allowCustom: true,
    },
    {
      label: "Personal Income From",
      name: "personalIncomeFrom",
      options: ["5L", "10L"],
      allowCustom: true,
    },
    {
      label: "Personal Income To",
      name: "personalIncomeTo",
      options: ["15L", "50L"],
      allowCustom: true,
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
      allowCustom: true,
    },
    {
      label: "Profile Sourced From",
      name: "profileSourcedFrom",
      options: ["Online", "Referral"],
      allowCustom: true,
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
    // If the user selects an option, clear any custom input for this field
    if (fields.find(field => field.name === name)?.options.includes(value)) {
      setCustomInput(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCustomInputChange = (e) => {
    const { name, value } = e.target;
    setCustomInput({ ...customInput, [name]: value });
    // If the user types in a custom value, clear any selected option for this field
    setFormData(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine formData with customInput, giving precedence to customInput if it exists
    const finalFormData = {};
    for (const field of fields) {
      const name = field.name;
      if (customInput[name]) {
        finalFormData[name] = customInput[name];
      } else if (formData[name]) {
        finalFormData[name] = formData[name];
      }
    }
    console.log("Form Data Submitted:", finalFormData);
    // Handle form submission logic here
  };

  const renderInputField = (field) => {
    if (field.options && field.options.length > 0) {
      return (
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
          {field.allowCustom && <option value="custom">Other...</option>}
        </select>
      );
    }
    return null;
  };

  const renderCustomInput = (field) => {
    if (field.allowCustom && formData[field.name] === 'custom') {
      return (
        <input
          type="text"
          id={`${field.name}-custom`}
          name={field.name}
          value={customInput[field.name] || ''}
          onChange={handleCustomInputChange}
          className="form-control mt-2"
          placeholder={`Enter custom ${field.label}`}
        />
      );
    }
    return null;
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
                  <div className="col-md-3 col-12 mb-3" key={index}>
                    <label htmlFor={field.name} className="form-label">
                      {field.label}
                    </label>
                    {renderInputField(field)}
                    {renderCustomInput(field)}
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
                    <td>
                      <input type="checkbox" />
                    </td>

                  <td>
             <div style={{ width: "80px", height: "80px", overflow: "hidden" }}>
                <img
                src={profile.photo}
                 alt="Profile"
                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
                     />
                    </div>
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