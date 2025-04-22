import React, { useState } from "react";
import "./addClient.css";
import { Link } from "react-router-dom";
import otherPicture from "../../../Images/profile-other-images.png";
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
                    {/* profile sourced form */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="religion"
                        className="form-label required"
                      >
                        Profile Sourced From:
                      </label>
                      <select
                        onChange={handleChange}
                        id="religion"
                        className="form-select"
                        name="ProfileSourcedFrom"
                        required
                      >
                        <option value="">Select Profile Source</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
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

                    {/* Profile Comment */}
                    <div className="col-md-2 mb-1">
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
                    </div>

                    {/* Gender */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="gender" className="form-label required">
                        Gender<span>*</span>
                      </label>
                      <select
                        id="gender"
                        name="Gender"
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="--Select Gender--">
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Marital Status */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="marital-status"
                        className="form-label required"
                      >
                        Marital Status<span>*</span>
                      </label>
                      <select
                        id="marital-status"
                        name="MaritalStatus"
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="--select Marital Status--">
                          Select Marital Status
                        </option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                      </select>
                    </div>
                    {/* Religion */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="religion"
                        className="form-label required"
                      >
                        Religion<span>*</span>
                      </label>
                      <select
                        onChange={handleChange}
                        id="religion"
                        name="Religion"
                        className="form-select"
                        required
                      >
                        <option value="--Select Religion--">
                          Select Religion
                        </option>
                        <option value="hindu">Hindu</option>
                        <option value="muslim">Muslim</option>
                        <option value="christian">Christian</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Caste */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="caste" className="form-label required">
                        Caste<span>*</span>
                      </label>
                      <select
                        onChange={handleChange}
                        id="caste"
                        name="Caste"
                        className="form-select"
                        required
                      >
                        <option value="--Select Caste--">Select Caste</option>
                        <option value="">-- Select Caste --</option>
                        <optgroup label="General">
                          <option value="brahmin">Brahmin</option>
                          <option value="pandit">Pandit</option>
                          <option value="panchal">Panchal</option>
                          <option value="rajput">Rajput</option>
                          <option value="vaishya">Vaishya</option>
                          <option value="kshatriya">Kshatriya</option>
                          <option value="kayastha">Kayastha</option>
                          <option value="baniya">Baniya</option>
                        </optgroup>

                        <optgroup label="Other Backward Classes (OBC)">
                          <option value="yadav">Yadav</option>
                          <option value="gujjar">Gujjar</option>
                          <option value="kurmi">Kurmi</option>
                          <option value="teli">Teli</option>
                          <option value="saini">Saini</option>
                          <option value="jaiswal">Jaiswal</option>
                          <option value="aggarwal">Aggarwal</option>
                        </optgroup>

                        <optgroup label="Scheduled Caste (SC)">
                          <option value="chamar">Chamar</option>
                          <option value="valmiki">Valmiki</option>
                          <option value="jatav">Jatav</option>
                          <option value="mehtar">Mehtar</option>
                          <option value="dhobi">Dhobi</option>
                        </optgroup>

                        <optgroup label="Scheduled Tribe (ST)">
                          <option value="gond">Gond</option>
                          <option value="santhal">Santhal</option>
                          <option value="bhil">Bhil</option>
                          <option value="munda">Munda</option>
                          <option value="kharia">Kharia</option>
                          <option value="oraon">Oraon</option>
                        </optgroup>
                        <optgroup label="Other">
                          <option value="ews">
                            Economically Weaker Section (EWS)
                          </option>
                          <option value="other">Other</option>
                        </optgroup>
                      </select>
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

                    {/* Astrologically */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="astrologically"
                        className="form-label required"
                      >
                        Astrologically<span>*</span>
                      </label>
                      <select
                        name="Astrologically"
                        id="astrologically"
                        onChange={handleChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

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

                    {/* Complexion */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="complexion"
                        className="form-label required"
                      >
                        Complexion<span>*</span>
                      </label>
                      <select
                        id="complexion"
                        name="Complexion"
                        className="form-select"
                        onChange={handleChange}
                        required
                      >
                        <option value="--Select Complexion--">
                          Select Complexion
                        </option>
                        <option value="fair">Fair</option>
                        <option value="wheatish">Wheatish</option>
                        <option value="dark">Dark</option>
                      </select>
                    </div>

                    {/* Personality */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="Personality :" className="form-label">
                        Personality :
                      </label>
                      <select
                        id="Personality"
                        onChange={handleChange}
                        className="form-select"
                        name="Personality"
                      >
                        <option value="">Select Personality :</option>
                        <option value="Slim">Slim</option>
                        <option value="Average">Average</option>
                        <option value="Athletic">Athletic</option>
                        <option value="Heavy">Heavy</option>
                      </select>
                    </div>

                    {/* Drinking Habits */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="drinking-habits"
                        className="form-label required"
                      >
                        Drinking Habits<span>*</span>
                      </label>
                      <select
                        id="drinking-habits"
                        name="DrinkingHabits"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="--Select Drinking Habits--">
                          Select Drinking Habits
                        </option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="occasionally">Occasionally</option>
                      </select>
                    </div>

                    {/* Eating Habits */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="eating-habits"
                        className="form-label required"
                      >
                        Eating Habits<span>*</span>
                      </label>
                      <select
                        id="eating-habits"
                        name="EatingHabits"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="--Select Eating Habits--">
                          Select Eating Habits
                        </option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non-vegetarian">Non-Vegetarian</option>
                        <option value="both">Both</option>
                      </select>
                    </div>

                    {/* Smoking Habits */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="smoking-habits"
                        className="form-label required"
                      >
                        Smoking Habits<span>*</span>
                      </label>
                      <select
                        name="SmokingHabits"
                        id="smoking-habits"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="--Select Smoking Habits--">
                          Select Smoking Habits
                        </option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="occasionally">Occasionally</option>
                      </select>
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

                    {/* Open for Other Caste */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="open-other-caste"
                        className="form-label"
                      >
                        Open for Other Caste
                      </label>
                      <select
                        id="open-other-caste"
                        name="OpenforOtherCaste"
                        className="form-select"
                        onChange={handleChange}
                      >
                        <option value="Select Other Caste">
                          --Select Other Caste--
                        </option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {/* Open for Divorce */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="open-divorce" className="form-label">
                        Open for Divorce
                      </label>
                      <select
                        id="open-divorce"
                        name="OpenforDivorce"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">--Select Open For Divorce--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {/* Eye sight */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="open-divorce" className="form-label">
                        Eye Sight :
                      </label>
                      <select
                        id="open-divorce"
                        onChange={handleChange}
                        name="EyeSight"
                        className="form-select"
                      >
                        <option value="">--Select Eye Sight--</option>
                        <option value="Normal">Normal</option>
                        <option value="Use Spectales">Use Spectales</option>
                        <option value="Lenses">Lenses</option>
                      </select>
                    </div>

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
                      <label htmlFor="believes-patri" className="form-label">
                        Believes in Patri
                      </label>
                      <select
                        id="believes-patri"
                        name="BelievesinPatri"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">--Select Believes Patri--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

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

                    {/* Native State */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="native-state" className="form-label">
                        Native State
                      </label>
                      <select
                        id="native-state"
                        name="NativeState"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">--Select Native State--</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                      </select>
                    </div>

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

                    {/* Send Biodata */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="send-biodata" className="form-label">
                        Send Biodata
                      </label>
                      <select
                        id="send-biodata"
                        name="SendBiodata"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">--Select Send Bio--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

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

                    {/* Is Premium */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="is-premium" className="form-label">
                        Is Premium
                      </label>
                      <select
                        id="is-premium"
                        name="IsPremium"
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">--Select Is Premium--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {/* Willing to Go Abroad */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="willing-abroad" className="form-label">
                        Willing to Go Abroad
                      </label>
                      <select
                        id="willing-abroad"
                        onChange={handleChange}
                        name="WillingtoGoAbroad"
                        className="form-select"
                      >
                        <option value="">--Select Willing Abroad--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>


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

                    {/* NRI Status */}
                    <div className="col-md-2 mb-1">
                      <label htmlFor="nri-status" className="form-label">
                        NRI Status
                      </label>
                      <select
                        onChange={handleChange}
                        id="nri-status"
                        name="NRIStatus"
                        className="form-select"
                      >
                        <option value="">--Select NRI Status--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {/* Disability */}
                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="disability"
                        className="form-label required"
                      >
                        Disability<span>*</span>
                      </label>
                      <select
                        id="disability"
                        onChange={handleChange}
                        name="Disability"
                        className="form-select"
                      >
                        <option value="">--Select Disability--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
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
                    <div className="col-md-2 mb-1">
                      <label htmlFor="personal income" className="form-label">
                        Personal Income<span>*</span>
                      </label>
                      <select className="form-control" name="PersonalIncome" id="" onChange={handleEducationChange}>
                        <option value="--personal income--">
                          Personal Income
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </div>

                    <div className="col-md-2 mb-1">
                      <label
                        htmlFor="occupation details"
                        className="form-label required"
                      >
                        Occupation Details<span>*</span>
                      </label>
                      <select className="form-control" name="OccupationDetails" id="" onChange={handleEducationChange}>
                        <option value="--select occupation--">
                          --Select Occupation--
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </div>

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

                    <div className="col-md-3 mb-1">
                      <label
                        className="form-label required"
                        htmlFor="Mother's Qualification"
                      >
                        Mother's Qualification <span>*</span>
                      </label>
                      <select className="form-control" name="" id="">
                        <option value="Select Mother Qualification">
                          --Select Mother Qualification--
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </div>

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
                    <div className="col-md-2 mb-1">
                      <label htmlFor="familyType" className="form-label">
                        Family Type
                      </label>
                      <select className="form-control" name="FamilyType" id="" onChange={handleFamilyDetailsChange}>
                        <option value="">--Select Family Type--</option>
                        <option value="Nuclear Family">Nuclear Family</option>
                        <option value="Joint Family">Joint Family</option>
                      </select>
                    </div>
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
                      <label htmlFor="marriageBudget" className="form-label">
                        To Marriage Budget
                      </label>
                      <select className="form-select" id="marriageBudget" name="MarriageBudget" onChange={handleFamilyDetailsChange}>
                        <option value="">Select</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
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
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="houseStatus">
                        House Status
                      </label>
                      <select name="HouseStatus" id="" className="form-control" onChange={handleContactDetailsChange}>
                        <option value="">--Select House Status--</option>
                        <option value="apartment">Apartment</option>
                        <option value="floot/floors">Floot / Floors</option>
                        <option value="banglow">Banglow</option>
                        <option value="kothi">Kothi</option>
                        <option value="rented">Rented</option>
                      </select>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="residingCountry">
                        Residing Country
                      </label>
                      <select id="residingCountry" className="form-control" name="ResidingCountry" onChange={handleContactDetailsChange}>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                      </select>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="residentialState">
                        Residential State
                      </label>
                      <select id="residentialState" className="form-control" name="ResidentialState" onChange={handleContactDetailsChange}>
                        <option value="">Select State</option>
                        <option value="UP">UP</option>
                      </select>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="residentialCity">
                        Residential City
                      </label>
                      <select id="residentialCity" className="form-control" name="ResidentialCity" onChange={handleContactDetailsChange}>
                        <option value="">Select City</option>
                        <option value="Manjhanpur">Manjhanpur</option>

                      </select>
                    </div>
                    <div className="col-md-2 mb-1">
                      <label className="form-label" htmlFor="contactPerson">
                        Name of the Contact Person
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
