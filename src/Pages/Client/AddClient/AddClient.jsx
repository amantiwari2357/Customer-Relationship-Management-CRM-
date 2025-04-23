import React, { useState } from "react";
import "./addClient.css";
import { Link } from "react-router-dom";
// import otherPicture from "../../../Images/profile-other-images.png";
import axios from "axios";

const AddClient = () => {
  const [forms, setForms] = useState([]);

  const handleAddClick = (event) => {
    event.preventDefault();
    setForms([...forms, forms.length + 1]);
  };
  const [profilePicture, setProfilePicture] = useState(null);
  const [otherPictures, setOtherPictures] = useState([]);
  const [uploadBiodata, setUploadBiodata] = useState(null);


  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleOtherPicturesChange = (e) => {
    const files = Array.from(e.target.files);
    setOtherPictures((prev) => [...prev, ...files]);
  };

  const handleUploadBiodataChange = (e) => {
    setUploadBiodata(e.target.files[0]);
  };


  // Personal Details
  const [PersnolDetails, setPersnolDetails] = useState({
    Name: "",
    Religion: "",
    Gender: "",
    DateofBirth: "",
    TimeofBirth: "",
    PlaceofBirth: "",
    MaritalStatus: "",
    PartnerPreferences: "",
    Complexion: "",
    Hobbies: "",
    DrinkingHabits: "",
    EatingHabits: "",
    Email: "",
    Mobile: "",
    Gotra: "",
    Caste: "",
    OpenforOtherCaste: "",
    BelievesinPatri: "",
    NativeTown: "",
    NativeState: "",
    Astrologically: "",
    Visa: "",
    WillingtoGoAbroad: "",
    Weight: "",
    Height: "",
    SmokingHabits: "",
    Disability: "",
    ProfileComment: "",
    NRIStatus: "",
    SubCaste: "",
    OpenforDivorce: "",
    UploadBiodata: "",
    SendBiodata: "",
    IsPremium: "",
    EyeSight: "",
    ProfileSourcedFrom: "",
    Personality: "",
    MemberStatusChangeComment: "",
    ProfilePicture: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersnolDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Education Details
  const [EducationDetails, setEducationDetails] = useState({
    School: "",
    PremiumCollege: "",
    HighestQualification: "",
    CompleteResidenceAddress: "",
    Residence: "",
    PersonalIncome: "",
    OccupationDetails: "",
    Occupation: "",
    occupationaddress: "",
    BusinessType: ""
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Family Details
  const [familyDetails, setFamilyDetails] = useState({
    FatherName: "",
    FatherOccupation: "",
    FatherQualification: "",
    FatherDateofBirthName: "",
    FatherOccupationDetails: "",
    FatherAlive: "",
    MotherName: "",
    MotherOccupation: "",
    MotherDateofBirth: "",
    MotherOccupationDetails: "",
    MotherAlive: "",
    FamilyType: "",
    FamilyBusinessDetail: "",
    FamilyAnnualIncome: "",
    VehicleDetails: "",
    OtherFamilyDetails: "",
    MarriageBudget: "",
    AddMembers: []
  });

  const handleFamilyDetailsChange = (e) => {
    const { name, value } = e.target;
    setFamilyDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Contact Details
  const [ContactDetails, setContactDetails] = useState({
    HouseStatus: "",
    ResidingCountry: "",
    ResidentialState: "",
    ResidentialCity: "",
    NameoftheContactPerson: "",
    RelationwithMember: "",
    ResidentialAddress: "",
    ResidencePhoneNo: "",
    MotherNumber: "",
    FatherNumber: "",
    InstagramURL: "",
    FacebookURL: "",
    TwitterURL: ""
  });

  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append personal details
    formData.append("PersnolDetails", JSON.stringify(PersnolDetails));

    // Append Education Details
    formData.append("EducationDetails", JSON.stringify(EducationDetails));

    // Append Family Details
    formData.append("familyDetails", JSON.stringify(familyDetails));

    // Append Contact Details
    formData.append("ContactDetails", JSON.stringify(ContactDetails));

    // Append Profile Picture
    if (profilePicture) {
      formData.append("ProfilePicture", profilePicture);
    }

    otherPictures.forEach((file, index) => {
      formData.append('OtherPicture', file);
    });

    // Append Biodata
    if (uploadBiodata) {
      formData.append("UploadBiodata", uploadBiodata);
    }


    try {
      const response = await axios.post("http://localhost:8000/api/V1/add-client-record", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Client added successfully:", response.data);
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };



  return (
    <>
      <section className="add-client">
        <div className="add-client-overlay">
          <div className="container">
            <div className="breadcrumb">
              <h2 className="breadTitle">Add Client</h2>
              <div className="breadURL">
                <Link href="">Client</Link> / <Link href="">Add Client</Link>
              </div>
            </div>
            <div className="add-client-information">
              <p>
                <i class="bi bi-info-circle-fill"></i> Labels marked in red are
                displayed in PDF profile of the client
              </p>
            </div>
          </div>
          <div className="container mt-4">
            {/* Tab Navigation */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link clip-button1 active"
                  id="personal-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#personal"
                  role="tab"
                  aria-controls="personal"
                  aria-selected="true"
                >
                  Personal Details
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  // onClick={(()=>navigate('/education-quipment'))}
                  className="nav-link clip-button2"
                  id="education-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#education"
                  role="tab"
                  aria-controls="education"
                  aria-selected="false"
                >
                  Education & Occupation
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link clip-button3"
                  id="family-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#family"
                  role="tab"
                  aria-controls="family"
                  aria-selected="false"
                >
                  Family Details
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link clip-button4"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact Details
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link clip-button5"
                  id="pictures-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pictures"
                  role="tab"
                  aria-controls="pictures"
                  aria-selected="false"
                >
                  Other Profile Pictures
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content" id="myTabContent">
              {/* Personal Details Tab */}
              <div
                className="tab-pane fade show active"
                id="personal"
                role="tabpanel"
                aria-labelledby="personal-tab"
              >
                {/* personal detail tab  */}
                <div className="add-client-form">
                  <div className="row">

{/* //////////////////aman/////////////// */}

{/* Profile Sourced From */}
<div className="col-md-2 mb-1">
  <label htmlFor="profileSource" className="form-label required">
    Profile Sourced From:
  </label>
  
  <div className="position-relative">
    <input
      list="profileSourceOptions"
      id="profileSource"
      className="form-control combobox-input"
      name="ProfileSourcedFrom"
      onChange={(e) => {
        handleChange(e);
      }}
      placeholder="Type or select..."
      required
      style={{
        paddingRight: '30px', // Make space for the icon
        backgroundImage: 'none' // Remove default datalist arrow if any
      }}
    />
    
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
  
  <datalist id="profileSourceOptions">
    <option value="Website Registration" />
    <option value="Mobile App" />
    <option value="Referral" />
    <option value="Walk-in" />
    <option value="Social Media" />
    <option value="Advertisement" />
    <option value="Event" />
  </datalist>
</div>

             {/* name  */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="name" className="form-label required">
                        Name<span>*</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="Name"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    {/* Mobile */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="mobile" className="form-label required">
                        Mobile<span>*</span>
                      </label>
                      <input
                        type="tel"
                        name="Mobile"
                        onChange={handleChange}
                        id="mobile"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="email" className="form-label required">
                        Email<span>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        name="Email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    {/* <div className="col-md-2 mb-1">
                      <label htmlFor="profile-comment" className="form-label">
                        Profile Comment
                      </label>
                      <textarea
                        id="profile-comment"
                        name="ProfileComment"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter your comment"
                        rows="1"
                      ></textarea>
                      
                    </div> */}
{/* ////////////////////AMAN///////////////////////// */}
                    {/* Gender */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="GenderInput" className="form-label required">
    Gender:
  </label>

  <div className="position-relative">
  <input
    list="genderOptions"
    id="GenderInput"
    className="form-control"
    name="gender"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="genderOptions">
    <option value="Male" />
    <option value="Female" />
    <option value="both" />
    
  </datalist>
</div>
{/* //////////////////////////aman/////////////////////////// */}

                    {/* Marital Status */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="maritalInput" className="form-label required">
    Marital status:
  </label>
  <div className="position-relative">
  <input
    list="maritalOptions"
    id="maritalInput"
    className="form-control"
    name="marital status"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="maritalOptions">
    <option value="Married" />
    <option value="Unmarried" />
    {/* <option value="both" /> */}
    
  </datalist>
</div>
{/* ////////////////////////////////////aman///////////////////// */}
                 {/* Profile Religion From */}
<div className="col-md-2 mb-1">
  <label htmlFor="religionInput" className="form-label required">
    Religion:
  </label>

  <div className="position-relative">
  <input
    list="religionOptions"
    id="religionInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="religionOptions">
    <option value="Hindu" />
    <option value="Muslim" />
    <option value="Christian" />  {/* Fixed spelling */}
    <option value="Buddhist" />  {/* Fixed spelling */}
    <option value="Jewish" />  {/* Fixed spelling */}
    <option value="Sikh" />
    <option value="Jain" />
    <option value="Other" />
  </datalist>
</div>

     {/* /////////////////////////aman///////////////// */}
   {/* Caste */}
<div className="col-md-2 mb-1">
  <label htmlFor="caste" className="form-label required">
    Caste<span>*</span>
  </label>

  <div className="position-relative">
  <input
    list="casteOptions"
    id="caste"
    className="form-control"
    name="Caste"
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
      required
      style={{
        paddingRight: '30px', // Make space for the icon
        backgroundImage: 'none' // Remove default datalist arrow if any
      }}
  />

   {/* Chevron down icon */}
   <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
  
  <datalist id="casteOptions">
    <option value="">Select Caste</option>
    <optgroup label="General">
      <option value="brahmin">Brahmin</option>
    </optgroup>

    <optgroup label="Other Backward Classes (OBC)">
      <option value="yadav">Yadav</option>
    </optgroup>

    <optgroup label="Scheduled Caste (SC)">
      <option value="chamar">Chamar</option>
    </optgroup>

    <optgroup label="Scheduled Tribe (ST)">
      <option value="gond">Gond</option>
    </optgroup>
    
    <optgroup label="Other">
      <option value="ews">Economically Weaker Section (EWS)</option>
      <option value="other">Other</option>
    </optgroup>
  </datalist>
  <small className="text-muted">
  
  </small>
</div>
                    {/* Sub Caste */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="sub-caste" className="form-label">
                        Sub Caste
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="SubCaste"
                        id="sub-caste"
                        className="form-control"
                        placeholder="Enter sub caste"
                      />
                    </div>

                    {/* DOB */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="dob" className="form-label required">
                        Date of Birth<span>*</span>
                      </label>
                      <input
                        type="date"
                        onChange={handleChange}
                        name="DateofBirth"
                        id="dob"
                        className="form-control"
                        required
                      />
                    </div>

                    {/* Time of Birth */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="time-hour"
                        className="form-label required"
                      >
                        Time of Birth<span>*</span>
                      </label>
                      <div className="d-flex gap-2">
                        <input
                          type="time"
                          id="time-hour"
                          onChange={handleChange}
                          name="TimeofBirth"
                          className="form-control"
                          placeholder="Hour"
                          required
                        />
                      </div>
                    </div>

                    {/* Place of Birth */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="birth-place"
                        className="form-label required"
                      >
                        Place of Birth<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter Birth Place"
                        type="text"
                        name="PlaceofBirth"
                        id=""
                        required
                      />
                    </div>

{/* //////////////////////aman////////////////////// */}
                     {/* Astrology Status */}
                     <div className="col-md-2 mb-1">
                    <label htmlFor="astrologyInput" className="form-label required">
    Astrology:
  </label>
  <div className="position-relative">
  <input
    list="astrologyOptions"
    id="astrologyInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="astrologyOptions">
    <option value="yes" />
    <option value="no" />
  </datalist>
</div>
{/* ////////////////////////////aman////////////////// */}
                    {/* Gotra */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="gotra" className="form-label required">
                        Gotra<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="Gotra"
                        id="gotra"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter Gotra"
                        required
                      />
                    </div>

                    {/* Height */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="height" className="form-label required">
                        Height (feet / inches)<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="height"
                        name="Height"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter height"
                        required
                      />
                    </div>

                    {/* Weight */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="weight" className="form-label">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        id="weight"
                        name="Weight"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter weight"
                      />
                    </div>

                    {/* ///////////////aman////////////complextions */}

                 <div className="col-md-2 mb-1">
  <label htmlFor="complextionsInput" className="form-label required">
    complextions:
  </label>

  <div className="position-relative">
  <input
    list="complextionsOptions"
    id="complextionsInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="complextionsOptions">
    <option value="fair" />
    <option value="dark" />
    <option value="black coal" />  {/* Fixed spelling */}
    
  </datalist>
</div>
{/* //////////////////aman///////////////////// */}

                    {/* Personality */}
                    <div className="col-md-2 mb-1">
  <label htmlFor="PersonalityInput" className="form-label required">
    Personality:
  </label>

  <div className="position-relative">
  <input
    list="PersonalityOptions"
    id="PersonalityInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="PersonalitysOptions">
    <option value="good " />
    <option value="handsome" />
    <option value="black coal" />  {/* Fixed spelling */}
    
  </datalist>
</div>
{/* ////////////////////////////aman/////////////////// */}
                    {/* Smoking Habits */}
                      <div className="col-md-2 mb-1">
  <label htmlFor="smokingInput" className="form-label required">
    smoking habbit:
  </label>

  <div className="position-relative">
  <input
    list="smokingOptions"
    id="smokingInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="smokingOptions">
    <option value="yes" />
    <option value="no" />
    <option value="occasionaly" />  {/* Fixed spelling */}
    
  </datalist>
</div>

                    {/* Partner Preferences */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="partner-preferences"
                        className="form-label required"
                      >
                        Partner Preferences<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="PartnerPreferences"
                        onChange={handleChange}
                        id="partner-preferences"
                        className="form-control"
                        placeholder="Describe your preferences"
                      />
                    </div>
                    {/* ////////////aaman//////////////// */}

                    <div className="col-md-2 mb-1">
  <label htmlFor="otherInput" className="form-label required">
    open for other cast:
  </label>

  <div className="position-relative">
  <input
    list="otherOptions"
    id="otherInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="otherOptions">
    <option value="yes" />
    <option value="no" />
    
  </datalist>
</div>
{/* ///////////aman/////////////// */}
                    {/* Open for Divorce */}
                    <div className="col-md-2 mb-1">
  <label htmlFor="DivorceInput" className="form-label required">
    open for Divorce:
  </label>

  <div className="position-relative">
  <input
    list="DivorceOptions"
    id="DivorceInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type or select..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="DivorceOptions">
    <option value="yes" />
    <option value="no" />
    
  </datalist>
</div>
{/* ////////////////////////////////aman/////////////////// */}

                    {/* Eye sight */}
                    <div className="col-md-2 mb-1">
  <label htmlFor="EyeInput" className="form-label required">
  Eye Sight:
  </label>

  <div className="position-relative">
  <input
    list="EyeOptions"
    id="DivorceInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select Eye Sight--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="EyeOptions">
    <option value="Normal" />
    <option value="Use Spectales" />
    <option value="Lenses" />
    
  </datalist>
</div>
{/* //////////////////////aman////////////////////////// */}

                    {/* upload profile image  */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="profile image" className="form-label">
                        Upload Profile Image:
                      </label>
                      <input
                        type="file"
                        onChange={handleProfilePictureChange}
                        className="form-control"
                        // name="ProfilePicture"
                        id=""
                      />
                    </div>

                    {/* Believes in Patri */}
                    <div className="col-md-2 mb-1">
  <label htmlFor="PatriInput" className="form-label required">
  Believes in Patri:
  </label>

  <div className="position-relative">
  <input
    list="PatriOptions"
    id="PatriInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select patri--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="PatriOptions">
    <option value="yes" />
    <option value="no" />
    {/* <option value="Lenses" /> */}
    
  </datalist>
</div>
{/* /////////////////////////////aman////////////// */}

                    {/* Native Town */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="native-town" className="form-label">
                        Native Town
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Enter Native Town"
                        name="NativeTown"
                        id=""
                      />
                    </div>
                    {/* /////////////////////////aman//////// */}
                    <div className="col-md-2 mb-1">
  <label htmlFor="StateInput" className="form-label required">
  Native State:
  </label>

  <div className="position-relative">
  <input
    list="StateOptions"
    id="StateInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select state--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="StateOptions">
    <option value="up" />
    <option value="bihar" />
    {/* <option value="Lenses" /> */}
    
  </datalist>
</div>
                  {/* //////////////////////aman///////////// /*/}
                    {/* Upload Biodata */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="biodata" className="form-label">
                        Upload Biodata
                      </label>
                      <input
                        type="file"
                        onChange={handleUploadBiodataChange}
                        id="biodata"
                        className="form-control"
                      // name="UploadBiodata"
                      />
                    </div>
                    {/* //////////////////////////aman//////////// */}
                    <div className="col-md-2 mb-1">
  <label htmlFor="BiodataInput" className="form-label required">
  Send Biodata:
  </label>

  <div className="position-relative">
  <input
    list="BiodataOptions"
    id="BiodataInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select option--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="BiodataOptions">
    <option value="yes" />
    <option value="no" />
    {/* <option value="Lenses" /> */}
    
  </datalist>
</div>
{/* /////////////////////////aman//////////////// */}
<div className="col-md-2 mb-1">
  <label htmlFor="PremiumInput" className="form-label required">
  Is Premium:
  </label>

  <div className="position-relative">
  <input
    list="PremiumOptions"
    id="PremiumInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select option--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="PremiumOptions">
    <option value="yes" />
    <option value="no" />
    {/* <option value="Lenses" /> */}
    
  </datalist>
</div>
{/* ///////////////aman/////////////// */}
<div className="col-md-2 mb-1">
  <label htmlFor="AbroadInput" className="form-label required">
  Willing to Go Abroad:
  </label>

  <div className="position-relative">
  <input
    list="AbroadOptions"
    id="AbroadInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select option--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="AbroadOptions">
    <option value="yes" />
    <option value="no" />
    {/* <option value="Lenses" /> */}
    
  </datalist>
</div>

{/* //////////////////////aman//////////////// */}

                    {/* Hobbies */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="hobbies"
                        className="form-label required"
                      >
                        Hobbies<span>*</span>
                      </label>
                      <textarea
                        id="hobbies"
                        onChange={handleChange}
                        name="Hobbies"
                        className="form-control"
                        placeholder="Enter your hobbies"
                        rows="1"
                      ></textarea>
                    </div>

                    {/* Visa */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="visa" className="form-label">
                        Visa
                      </label>
                      <select
                        id="visa"
                        onChange={handleChange}
                        name="Visa"
                        className="form-select"
                      >
                        <option value="">--Select Visa Status--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
{/* /////////////////////////aman/////////////////// */}
<div className="col-md-2 mb-1">
  <label htmlFor="StatusInput" className="form-label required">
  NRI Status:
  </label>

  <div className="position-relative">
  <input
    list="StatusOptions"
    id="StatusInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select NRI Status--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="StatusOptions">
    <option value="yes" />
    <option value="no" />
    {/* <option value="Lenses" /> */}
    
  </datalist>
</div>
{/* /////////////////////aman////////////// */}
<div className="col-md-2 mb-1">
  <label htmlFor="DisabilityInput" className="form-label required">
  Disability:
  </label>

  <div className="position-relative">
  <input
    list="DisabilityOptions"
    id="DisabilityInput"
    className="form-control"
    name="Religion"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="--Select Disability Status--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />
    {/* Chevron down icon */}
    <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="DisabilityOptions">
    <option value="yes" />
    <option value="no" />
    {/* <option value="Lenses" /> */}
    
  </datalist>
</div>

{/*/////////////////////aman/////////  */}

                    {/* member status change comment  */}
                     <div className="col-md-2 mb-1">
                      <label
                        htmlFor="Member Status Change Comment"
                        className="form-label">
                        Member Status Change Comment :
                      </label>
                      <textarea
                        onChange={handleChange}
                        className="form-control"
                        name="MemberStatusChangeComment"
                        id=""
                        rows="1"
                      ></textarea>
                    </div>


                    <div className="col-12 mt-3 text-center">
                      <button type="submit" className="add-client-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Occupation Tab */}
              <div
                className="tab-pane fade"
                id="education"
                role="tabpanel"
                aria-labelledby="education-tab"
              >
                <div className="add-client-form">
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <label
                        htmlFor="school & additional qualification"
                        className="required"
                      >
                        School & Additional Qualification<span>*</span>
                      </label>
                      <textarea className="form-control" name="School"></textarea>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label htmlFor="premium collage" className="form-label">
                        Premium College
                      </label>
                      <input
                        type="text"
                        id="premium-collage"
                        className="form-control"
                        placeholder="Please Comment"
                        onChange={handleEducationChange}
                        name="PremiumCollege"
                      />
                    </div>

                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="partner-preferences"
                        className="form-label"
                      >
                        Highest Qualification
                      </label>
                      <input
                        type="text"
                        id="highest-qualification"
                        className="form-control"
                        placeholder="Please Comment"
                        onChange={handleEducationChange}
                        name="HighestQualification"
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="residence:*"
                        className="form-label required"
                      >
                        Residence<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="residence"
                        className="form-control"
                        onChange={handleEducationChange}
                        placeholder="Please Comment"
                        name="Residence"
                      />
                    </div>

                    <div className="col-md-3">
                      <label
                        htmlFor="complete residence address"
                        className="form-label required"
                      >
                        Complete Residence Address<span>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        onChange={handleEducationChange}
                        className="form-control"
                        placeholder="Please Comment"
                        name="CompleteResidenceAddress"
                      />
                    </div>
{/* ///////////////////////////////aman//////////////// */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="IncomeInput" className="form-label required">
                    Personal Income:
  </label>
  <div className="position-relative">
  <input
    list="IncomeOptions"
    id="IncomeInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="Type personal income--..."
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="IncomeOptions">
    <option value="yes" />
    <option value="no" />
  </datalist>
</div>
                    {/* /////////////////////aman////////////// */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="OccupationInput" className="form-label required">
                    Occupation Details:
  </label>
  <div className="position-relative">
  <input
    list="OccupationOptions"
    id="IncomeInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="  --Select Occupation--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="OccupationOptions">
    <option value="yes" />
    <option value="no" />
  </datalist>
</div>
                    {/* ////////////////////AMAN////////////// */}

                   
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="occupation address"
                        className="form-label"
                      >
                        occupation address
                      </label>
                      <input
                        type="text"
                        id="occupation address"
                        className="form-control"
                        placeholder="Please Comment"
                        onChange={handleEducationChange}
                        name="occupationaddress"
                      />
                    </div>
    {/* /////////////////////aman///////////////// */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="OIncomeInput" className="form-label required">
                    Income Tenure:
  </label>
  <div className="position-relative">
  <input
    list="OIncomeOptions"
    id="OIncomeInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="  --select Income Tenure--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="OIncomeOptions">
    <option value="Monthly" />
    <option value="yearly" />
  </datalist>
</div>
                    {/* ///////////////aman////////// */}

                    <div className="col-12 mt-3 text-center">
                      <button type="submit" className="add-client-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Family Details Tab */}
              <div
                className="tab-pane fade"
                id="family"
                role="tabpanel"
                aria-labelledby="family-tab"
              >
                <div className="add-client-form">
                  <div className="row">
                    <h4>Father's Details</h4>
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="fathersName"
                        className="form-label required"
                      >
                        Father's Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fathersName"
                        placeholder="Enter father's name"
                        name="FatherName"
                        onChange={handleFamilyDetailsChange}
                      />
                    </div>

                    <div className="col-md-2 mb-1">
                      <label htmlFor="fathersDOB" className="form-label">
                        Father's DOB
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="fathersDOB"
                        name="FatherDateofBirthName"
                        onChange={handleFamilyDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="fathersOccupation"
                        className="form-label required"
                      >
                        Father's Occupation <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fathersOccupation"
                        placeholder="Enter father's occupation"
                        name="FatherOccupation"
                        onChange={handleFamilyDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="fathersQualification"
                        className="form-label required"
                      >
                        Father's Qualification <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fathersQualification"
                        placeholder="Enter father's qualification"
                        name="FatherQualification"
                        onChange={handleFamilyDetailsChange}
                      />
                    </div>

                      <div className="col-md-4 mb-1">
                        <label
                          htmlFor="fathersOccupationaddress"
                          className="form-label"
                        >
                          Father's Occupation Address:
                        </label>
                        <textarea
                          name=""
                          placeholder="Father's Occupation Address"
                          className="form-control"
                          rows="1"
                          id=""
                        ></textarea>
                      </div>
                      <div className="col-md-3 mb-1">
                        <label
                          htmlFor="Father Occupation complete Address"
                          className="form-label"
                        >
                          Father Occupation complete Address:
                        </label>
                        <textarea
                          name=""
                          className="form-control"
                          rows="1"
                          id=""
                        ></textarea>
                      </div>
                      <div className="col-md-2 mb-1">
                        <label
                          htmlFor="Father Occupation Detail"
                          className="form-label"
                        >
                          Father Occupation Detail:
                        </label>
                        <textarea
                          name=""
                          className="form-control"
                          rows="1"
                          id=""
                        ></textarea>
                      </div>

                    <div className="col-md-3 mb-1">
                      <label
                        htmlFor="Father / Mother Anniversary date"
                        className="form-label"
                      >
                        Father / Mother Anniversary date:
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="Father Family details"
                        className="form-label"
                      >
                        Father Family details:
                      </label>
                      <textarea
                        className="form-control"
                        name=""
                        rows="1"
                        id=""
                      ></textarea>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="Family Business Details:"
                        className="form-label"
                      >
                        Family Business Details:
                      </label>
                      <textarea
                        className="form-control"
                        name=""
                        rows="1"
                        id=""
                      ></textarea>
                    </div>

                      <h4 className="mt-3">Mother's Details</h4>
                      <div className="col-md-2 mb-1">
                        <label htmlFor="mothersName" className="form-label required">
                          Mother's Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mothersName"
                          placeholder="Enter mother's name"
                        />
                      </div>

                    <div className="col-md-2 mb-1">
                      <label htmlFor="mothersDOB" className="form-label">
                        Mother's DOB
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="mothersDOB"
                        name="MotherDateofBirth"
                        onChange={handleFamilyDetailsChange}
                      />
                    </div>

                    <div className="col-md-2 mb-1">
                      <label htmlFor="" className="form-label">
                        Mother Family Details:
                      </label>
                      <textarea
                        name=""
                        className="form-control"
                        placeholder="Mother Family Details"
                        rows={1}
                        id=""
                      ></textarea>
                    </div>

                      <div className="col-md-2 mb-1">
                        <label
                          htmlFor="mothersOccupation"
                          className="form-label"
                        >
                          Mother's Occupation
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mothersOccupation"
                          placeholder="Enter mother's occupation"
                        />
                      </div>

                    <div className="col-md-4 mb-1">
                      <label
                        htmlFor="mothersOccupationDetails"
                        className="form-label"
                      >
                        Mother's Occupation Details
                      </label>
                      <textarea
                        className="form-control"
                        id="mothersOccupationDetails"
                        rows="1"
                        placeholder="Enter mother's occupation details"
                        name="MotherOccupationDetails"
                        onChange={handleFamilyDetailsChange}
                      ></textarea>
                    </div>

                    {/* ///////////////////////aman/////////////// */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="MotherInput" className="form-label required">
                    Mother's Qualification:
  </label>
  <div className="position-relative">
  <input
    list="MotherOptions"
    id="MotherInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="   --Select Mother Qualification--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="MotherOptions">
    <option value="1" />
    <option value="1" />
  </datalist>
</div>
                    {/* ////////////////////////////aman////////////// */}

                    

                    <div className="col-md-3 mb-1">
                      <label
                        htmlFor="Mother Occupation Address"
                        className="form-label"
                      >
                        Mother Occupation Address:
                      </label>
                      <textarea
                        name=""
                        className="form-control"
                        rows={1}
                        id=""
                      ></textarea>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="Mother Occupation Detail"
                        className="form-label"
                      >
                        Mother Occupation Detail:
                      </label>
                      <textarea
                        name=""
                        className="form-control"
                        rows={1}
                        id=""
                      ></textarea>
                    </div>

                    <h4 className="mt-3">Family Details</h4>

                     {/* ///////////////////////aman/////////////// */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="familyInput" className="form-label required">
                    Family Type:
  </label>
  <div className="position-relative">
  <input
    list="familyOptions"
    id="familyInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="   --Select a family type--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="familyOptions">
    <option value="greate" />
    <option value="good" />
  </datalist>
</div>
         {/* /////////////////////////aman//////////////////// */}
                    
                      <div className="col-md-2 mb-1">
                    <label htmlFor="stInput" className="form-label required">
                    Family Status:
  </label>
  <div className="position-relative">
  <input
    list="stOptions"
    id="stInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="   --Select a family status--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="stOptions">
    <option value="middleclass" />
    <option value="rich" />
  </datalist>
</div>
{/* /////////////////////aman////////////////// */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="vehicleDetails" className="form-label">
                        Vehicle Details
                      </label>
                      <textarea
                        name="VehicleDetails"
                        className="form-control"
                        rows={1}
                        id=""
                        onChange={handleFamilyDetailsChange}
                      ></textarea>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="familyAnnualIncome"
                        className="form-label"
                      >
                        Family Annual Income
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="familyAnnualIncome"
                        placeholder="Enter family annual income"
                        onChange={handleFamilyDetailsChange}
                      />
                    </div>

                    <div className="col-md-2 mb-1">
                      <label htmlFor="familyType" className="form-label">
                        Income Tenure
                      </label>
                      <select className="form-control" name="FamilyType" id="" onChange={handleFamilyDetailsChange}>
                        <option value="">--Select Income Tenure--</option>
                        <option value="Nuclear Family">Yearly</option>
                        <option value="Joint Family">Monthly</option>
                      </select>
                    </div>
                    {/* ////////////////////aman///////// */}

                    <div className="col-md-2 mb-1">
                    <label htmlFor="budInput" className="form-label required">
                To Marriage Budget:
  </label>
  <div className="position-relative">
  <input
    list="budOptions"
    id="budInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="   --Select a marriage budget--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="budOptions">
    <option value="low" />
    <option value="high" />
  </datalist>
</div>
{/* //////////////////////aman/////////// */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="familyBusinessDetail"
                        className="form-label"
                      >
                        Family Business Detail
                      </label>
                      <textarea
                        className="form-control"
                        id="familyBusinessDetail"
                        rows="1"
                        placeholder="Enter family business details"
                        name="FamilyBusinessDetail"
                        onChange={handleFamilyDetailsChange}
                      ></textarea>
                    </div>

                      <div className="col-md-2 mb-1">
                        <label
                          htmlFor="otherFamilyDetails"
                          className="form-label"
                        >
                          Other Family Details
                        </label>
                        <textarea
                          className="form-control"
                          id="otherFamilyDetails"
                          rows="1"
                          placeholder="Enter other family details"
                        ></textarea>
                      </div>
                      <div className="col-md-2 mb-1">
                        <label
                          htmlFor="otherFamilyDetails"
                          className="form-label"
                        >
                          Do you have any Siblings:
                        </label>
                        <select name="" className="form-control" id="">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>

                    <div className="col-md-12">
                      <h4>Add Other Members</h4>
                      <button
                        className="add-btn mb-3"
                        onClick={handleAddClick}
                      >
                        Add
                      </button>
                    </div>
                    {forms.map((form, index) => (
                      <div className="row mb-4" key={index}>
                        <div className="col-md-2 mb-1">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                          />
                        </div>
                        <div className="col-md-2 mb-1">
                          <label>Age</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Age"
                            name="age"
                          />
                        </div>
                        <div className="col-md-2 mb-1">
                          <label>Relation</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please Comment"
                            name="relation"
                          />
                        </div>
                        <div className="col-md-2 mb-1">
                          <label>Marital Status</label>
                          <select
                            className="form-control"
                            name="marital_status_"
                          >
                            <option>Please Select</option>
                            <option>Single</option>
                            <option>Married</option>
                          </select>
                        </div>
                        <div className="col-md-2 mb-1">
                          <label>Profession</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please Comment"
                            name="profession_"
                          />
                        </div>
                        <div className="col-md-2 mb-1">
                          <label>Qualification</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please Comment"
                            name="profession_"
                          />
                        </div>
                        <div className="col-md-2 mb-1">
                          <label>More Details</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please Comment"
                            name="more_details_"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="add-client-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Details Tab */}
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="add-client-form">
                  <div className="row">
                    {/* ///////////////aman////////////// */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="usInput" className="form-label required">
                      House status:
  </label>
  <div className="position-relative">
  <input
    list="usOptions"
    id="usInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="   --Select a house status--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="usOptions">
    <option value="rented" />
    <option value="bangla" />
  </datalist>
</div>
                    {/* /////////////////aman/////////////// */}
                    <div className="col-md-2 mb-1">
                    <label htmlFor="resiInput" className="form-label required">
                    Residing Country:
  </label>
  <div className="position-relative">
  <input
    list="resiOptions"
    id="resiInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="   --Select a country--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="resiOptions">
    <option value="india" />
    <option value="pakistan" />
  </datalist>
</div>

     {/* ////////////////////aman//////////// */}
        <div className="col-md-2 mb-1">
          <label htmlFor="resiInput" className="form-label required">
          Residential State:
  </label>
  <div className="position-relative">
  <input
    list="resiOptions"
    id="budInput"
    className="form-control"
    name="astrology"  // Changed to match your state key
    onChange={(e) => {
      handleChange(e);
    }}
    placeholder="   --Select a Residential State--"
    required
    style={{
      paddingRight: '30px', // Make space for the icon
      backgroundImage: 'none' // Remove default datalist arrow if any
    }}
  />

  {/* Chevron down icon */}
  <div className="position-absolute end-0 top-50 translate-middle-y pe-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <datalist id="resiOptions">
    <option value="low" />
    <option value="high" />
  </datalist>
</div>
                    {/* ///////////////aman/////// */}
                   
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="contactPerson">
                        Name of Contact Person
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        className="form-control"
                        placeholder="Enter Contact Person's Name"
                        name="NameoftheContactPerson"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        className="form-label"
                        htmlFor="relationWithMember"
                      >
                        Relation with Member
                      </label>
                      <input
                        type="text"
                        id="relationWithMember"
                        className="form-control"
                        placeholder="Enter Relation with Member"
                        name="RelationwithMember"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label
                        className="form-label"
                        htmlFor="residentialAddress"
                      >
                        Residential Address
                      </label>
                      <textarea
                        id="residentialAddress"
                        className="form-control"
                        rows="1"
                        placeholder="Enter Residential Address"
                        name="ResidentialAddress"
                        onChange={handleContactDetailsChange}
                      ></textarea>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="residencePhone">
                        Residence Phone No.
                      </label>
                      <input
                        type="number"
                        id="residencePhone"
                        className="form-control"
                        placeholder="Enter Residence Phone No."
                        name="ResidencePhoneNo"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="mothersNumber">
                        Mother's Number
                      </label>
                      <input
                        type="number"
                        id="mothersNumber"
                        className="form-control"
                        placeholder="Enter Mother's Number"
                        name="MotherNumber"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="fathersNumber">
                        Father's Number
                      </label>
                      <input
                        type="number"
                        id="fathersNumber"
                        className="form-control"
                        placeholder="Enter Father's Number"
                        name="FatherNumber"
                        onChange={handleContactDetailsChange}
                      />
                    </div>

                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="fathersNumber">
                        CP Email
                      </label>
                      <input
                        type="email"
                        id="cp email id"
                        className="form-control"
                        placeholder="Enter CP email id"
                        name="cp email id"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                    <div className="col-md-12 mt-3 mb-2">
                      <h4 className="mb-0">
                        Social Media Links
                      </h4>
                    </div>
                    {/* <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="mobileNumber">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div> */}
                    <div className="col-md-2 mb-1">
                      <i class="bi bi-instagram"></i>&nbsp;
                      <label className="form-label" htmlFor="instagramUrl">
                        Instagram URL
                      </label>
                      <input
                        type="url"
                        id="instagramUrl"
                        className="form-control"
                        placeholder="Enter Instagram URL"
                        name="InstagramURL"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <i class="bi bi-facebook"></i>&nbsp;
                      <label className="form-label" htmlFor="facebookUrl">
                        Facebook URL
                      </label>
                      <input
                        type="url"
                        id="facebookUrl"
                        className="form-control"
                        placeholder="Enter Facebook URL"
                        name="FacebookURL"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                    <div className="col-md-2 mb-1">
                      <i class="bi bi-twitter"></i>&nbsp;
                      <label className="form-label" htmlFor="twitterUrl">
                        Twitter URL
                      </label>
                      <input
                        type="url"
                        id="twitterUrl"
                        className="form-control"
                        placeholder="Enter Twitter URL"
                        name="TwitterURL"
                        onChange={handleContactDetailsChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Profile Pictures Tab */}
              <div
                className="tab-pane fade"
                id="pictures"
                role="tabpanel"
                aria-labelledby="pictures-tab"
              >

                <div className="d-flex gap-2 pt-5 pb-3">
                  <div className="profile-picture">
                    <p>Other Picture's</p>
                  </div>
                  <i className="bi bi-patch-plus"></i>
                </div>
                <label htmlFor="otherImageInput">Other Images</label>
                <input
                  id="otherImageInput"
                  type="file"
                  accept="image/*"
                  multiple // Allow multiple file selection
                  onChange={handleOtherPicturesChange}
                />
                {/* </div> */}
                {/* <div className="other-picture">
                  <div className="row">
                    {profileOtherImage.map((image, index) => (
                      <div className="col-md-2 mb-1" key={index}>
                        <div className="profile-bulk-image">
                          <div className="otherimages">
                            <img src={image} alt={`Other profile ${index}`} />
                          </div>
                          <div className="profile-edit-delete">
                            <i className="bi bi-pencil-square"></i>
                            <i
                              className="bi bi-trash3"
                              onClick={() =>
                                setProfileOtherImages((prevImages) =>
                                  prevImages.filter((_, i) => i !== index)
                                )
                              }
                            ></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
                <button type="submit" className="btn btn-danger" onClick={handleSubmit}> Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddClient;