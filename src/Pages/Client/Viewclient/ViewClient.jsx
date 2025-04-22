import React, { useRef, useState } from "react";
import "./ViewClient.css"; // Custom CSS file
import client1 from "../../../Images/client1.png";
import call from "../../../Images/call-icon.png";
import gmail from "../../../Images/Gmail-icon.png";
import whatsapp from "../../../Images/WhatsApp-icon.png";
import { Link, useNavigate } from "react-router-dom";
import audio from "../../../Images/testing-audio.mp3";
import { Navigate } from "react-big-calendar";

const ViewClient = () => {
  const navigate = useNavigate();
  const [callDate, setCallDate] = useState("2023-11-11");
  const profiles = [
    {
      id: 1,
      name: "Anil Sharma",
      age: 27,
      gender: "Male",
      height: "5'7\"",
      religion: "Hindu",
      caste: "Baniya",
      dob: "04/07/1996",
      education: "MBA",
      occupation: "Business",
      income: "60,000",
      budget: "25 Lacs",
      manglik: "No",
      status: "Ringing",
      isPremium: true,
      likes: 35,
      clientImage: client1,
    },
    {
      id: 2,
      name: "Neha Verma",
      age: 25,
      gender: "Female",
      height: "5'4\"",
      religion: "Hindu",
      caste: "Khatri",
      dob: "01/12/1998",
      education: "MSc",
      occupation: "Business",
      income: "80,000",
      budget: "30 Lacs",
      manglik: "Yes",
      status: "Interested",
      isPremium: false,
      likes: 28,
      clientImage: client1,
    },
    {
      id: 3,
      name: "Rohit Mehta",
      age: 29,
      gender: "Male",
      height: "5'9\"",
      religion: "Jain",
      caste: "Shwetambar",
      dob: "10/03/1994",
      education: "B.Tech",
      occupation: "Business",
      income: "1,20,000",
      budget: "35 Lacs",
      manglik: "No",
      status: "Matched",
      isPremium: true,
      likes: 45,
      clientImage: client1,
    },
    {
      id: 4,
      name: "Priya Singh",
      age: 26,
      gender: "Female",
      height: "5'5\"",
      religion: "Sikh",
      caste: "Arora",
      dob: "20/08/1997",
      education: "MBBS",
      occupation: "Business",
      income: "1,50,000",
      budget: "50 Lacs",
      manglik: "No",
      status: "Pending",
      clientImage: client1,
      isPremium: false,
      likes: 32,
    },
    {
      id: 5,
      name: "Vikas Gupta",
      age: 31,
      gender: "Male",
      height: "5'8\"",
      religion: "Hindu",
      caste: "Agarwal",
      dob: "15/06/1992",
      education: "CA",
      occupation: "Business",
      income: "2,00,000",
      budget: "75 Lacs",
      manglik: "Yes",
      status: "Ringing",
      clientImage: client1,
      isPremium: true,
      likes: 50,
    },
  ];

  const [activityDate, setActivityDate] = useState("2023-11-11");
  const [note, setNote] = useState("");
  const [conversations, setConversations] = useState([
    {
      type: "N",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "12/10/2024 7:00 PM",
    },
    {
      type: "P",
      text: "Ut enim ad minim veniam, quis nostrud exercitation...",
      date: "12/10/2024 7:00 PM",
    },
    {
      type: "N",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "12/10/2024 7:00 PM",
    },
    {
      type: "P",
      text: "Ut enim ad minim veniam, quis nostrud exercitation...",
      date: "12/10/2024 7:00 PM",
    },
  ]);

  const handleAddNote = () => {
    if (note.trim()) {
      setConversations([
        ...conversations,
        { type: "N", text: note, date: new Date().toLocaleString() },
      ]);
      setNote("");
    }
  };

  // call section
  const [calls, setCalls] = useState([
    {
      type: "Missed",
      icon: "bi-telephone-x",
      label: "Missed Call",
      time: "7:00 PM",
      date: "11/12/2024",
      participant: "P",
      audio: audio,
    },
    {
      type: "Outgoing",
      icon: "bi-telephone-outbound",
      label: "Outgoing Call",
      time: "7:30 PM",
      date: "11/12/2024",
      participant: "P",
    },
    {
      type: "Incoming",
      icon: "bi-telephone-inbound",
      label: "Incoming Call",
      time: "8:00 PM",
      date: "11/12/2024",
      participant: "N",
      audio: audio,
    },
    {
      type: "Incoming",
      icon: "bi-telephone-inbound",
      label: "Incoming Call",
      time: "7:15 PM",
      date: "11/13/2024",
      participant: "N",
    },
    {
      type: "Missed",
      icon: "bi-telephone-x",
      label: "Missed Call",
      time: "8:30 PM",
      date: "11/13/2024",
      participant: "P",
      audio: audio,
    },
    {
      type: "Incoming",
      icon: "bi-telephone-inbound",
      label: "Incoming Call",
      time: "9:00 PM",
      date: "11/13/2024",
      participant: "N",
    },
  ]);

  const [currentAudio, setCurrentAudio] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = (audio) => {
    if (currentAudio === audio) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentAudio(audio);
      setIsPlaying(true);
      setProgress(0);
      audioRef.current.src = audio;
      audioRef.current.play();
    }
  };

  const handleProgressUpdate = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  const groupedCalls = calls.reduce((group, call) => {
    group[call.date] = group[call.date] || [];
    group[call.date].push(call);
    return group;
  }, {});
  // call section end

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Video conference with name123",
      priority: "High",
      priorityColor: "red",
      backgroundColor: "#C92A2A29",
      date: "08/10/1996",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Meeting with name123 family",
      priority: "High",
      priorityColor: "red",
      backgroundColor: "#C92A2A29",
      date: "Today",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Video conference with name123",
      priority: "Low",
      priorityColor: "yellow",
      backgroundColor: "#DBDF2629",
      date: "Yesterday",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Video conference with name123",
      priority: "High",
      priorityColor: "red",
      backgroundColor: "#C92A2A29",
      date: "08/10/1996",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Meeting with name123 family",
      priority: "High",
      priorityColor: "red",
      backgroundColor: "#C92A2A29",
      date: "Today",
      isCompleted: false,
    },
    {
      id: 6,
      title: "Video conference with name123",
      priority: "Low",
      priorityColor: "yellow",
      backgroundColor: "#DBDF2629",
      date: "Yesterday",
      isCompleted: false,
    },
  ]);

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const [selectedProduct, setSelectedProduct] = useState("Proposals");

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setIsOpen(!isOpen);
  };

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
      city: "",
      manglik: "Yes",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/50",
      name: "Name123",
      maritalStatus: "Divorced",
      dob: "08/10/1996",
      height: "5'3",
      religion: "Religion",
      caste: "Caste",
      education: "Education",
      occupation: "Occupation",
      personalIncome: "Personal Income",
      contact: "Contact No., Email",
      state: "Delhi",
      city: "",
      manglik: "No",
    },
  ];
  // const [formData, setFormData] = useState({});

  const fields = [
    // Previous Fields
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmittedData([...submittedData, formData]); // Add data to the list
    setFormData({ date: "", time: "", note: "" }); // Clear form inputs
  };

  const heartProfile = [client1, client1, client1, client1]; // Replace with actual image URLs or data
  const [open, setOpen] = useState(false);

  // const showClientProfile = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  const [addTasks, setAddTask] = useState("");
  const ShowAddTask = () => {
    setAddTask((openTask) => !openTask);
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    note: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="view-client">
        <div className="container">
          <div className="filters mb-3">
            <div className="row">
              <div className="col-md-3">
              <p className="m-0">Filter By: </p>
                <div className="d-flex gap-2 justify-content-center">
                  <select name="" className="form-control" id="">
                    <option value="bulk Actions">Bulk Action</option>
                    <option value="bulk Actions">Bulk Action</option>
                    <option value="bulk Actions">Bulk Action</option>
                    <option value="bulk Actions">Bulk Action</option>
                  </select>
                  <button className="all-buttons">Apply</button>
                </div>
              </div>
              <div className="col-md-7">
                  <p className="m-0">Sort By: </p>
                <div className="d-flex gap-2">
                  <select name="" className="form-control" id="">
                    <option value="date">Date Created</option>
                    <option value="date">Date Created</option>
                    <option value="date">Date Created</option>
                  </select>
                  <select name="" className="form-control" id="">
                    <option value="export cvs">Export To CVS</option>
                    <option value="export cvs">Export To CVS</option>
                    <option value="export cvs">Export To CVS</option>
                  </select>
                  <select name="" className="form-control" id="">
                    <option value="assigned leads">Assigned Leads To</option>
                    <option value="assigned leads">Assigned Leads To</option>
                    <option value="assigned leads">Assigned Leads To</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="gap-2 align-center">
                <p className="m-0">View :</p>
                <select name="" className="form-control" id="">
                  <option value="">12</option>
                  <option value="">10</option>
                  <option value="">8</option>
                  <option value="">6</option>
                </select>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            {profiles.map((profile) => (
              <div className="col-md-3">
                <div className="client-card">
                  <div className="view-client-topbar">
                    <input type="radio" name="" id="" />
                    <p>Premium</p>
                    <div
                      data-bs-toggle="modal"
                      data-bs-target="#heart-btn"
                      // onClick={showClientProfile}
                      className="heart"
                    >
                      <i className="bi bi-heart-fill"></i>
                      <span>20</span>
                    </div>
                    <div
                      class="modal fade"
                      id="heart-btn"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog update-profile-modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header modal-header-costom">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Modal title
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div className="heart-profile-container">
                              <div className="row">
                                {heartProfile.map((profile, index) => (
                                  <div
                                    className="col-md-2 mt-3 mb-3"
                                    key={`heart-profile-${index}`}
                                  >
                                    <div className="heart-profile-image">
                                      <img
                                        src={profile}
                                        className="w-100"
                                        alt={`client-profile-${index}`}
                                      />
                                      <div
                                        className="heart-profile-client-buttons"
                                        style={{ fontSize: "10px" }}
                                      >
                                        <button
                                          data-bs-dismiss="modal"
                                          onClick={() =>
                                            navigate("/client-response")
                                          }
                                          style={{
                                            borderRight: "1px solid white",
                                          }}
                                        >
                                          Response
                                        </button>
                                        <button>Resend</button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="all-buttons"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="all-buttons">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="client-image">
                    <img
                      src={profile.clientImage}
                      className="w-100"
                      alt="client image"
                    />
                  </div>
                  <div className="client-table-main">
                    <div className="client-detail-table">
                      <div className="client-detail-data">
                        <sup>Name</sup>
                        <p>{profile.name}</p>
                      </div>
                      <div className="client-detail-data">
                        <sup>Age / Gender</sup>
                        <p>{profile.name}</p>
                      </div>
                    </div>
                    <div className="client-detail-table">
                      <div className="client-detail-data">
                        <sup>Height</sup>
                        <p>{profile.height}</p>
                      </div>
                      <div className="client-detail-data">
                        <sup>Religion</sup>
                        <p>{profile.religion}</p>
                      </div>
                      <div className="client-detail-data">
                        <sup>Caste</sup>
                        <p>{profile.caste}</p>
                      </div>
                    </div>
                    <div className="client-detail-table">
                      <div className="client-detail-data">
                        <sup>DOB</sup>
                        <p>{profile.dob}</p>
                      </div>
                      <div className="client-detail-data">
                        <sup>Education</sup>
                        <p>{profile.education}</p>
                      </div>
                      <div className="client-detail-data">
                        <sup>Occupation</sup>
                        <p>{profile.occupation}</p>
                      </div>
                    </div>
                    <div className="client-detail-table">
                      <div className="client-detail-data">
                        <sup>Income</sup>
                        <p>{profile.income}</p>
                      </div>
                      <div className="client-detail-data">
                        <sup>Budget</sup>
                        <p>{profile.budget}</p>
                      </div>
                      <div className="client-detail-data">
                        <sup>Manglik</sup>
                        <p>{profile.manglik}</p>
                      </div>
                    </div>
                  </div>

                  <p className="client-status">Lead status: Ringing</p>
                  <div className="client-profile">
                    {/* update profile  */}
                    <button
                      style={{ borderRight: "2px solid white" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="client-profile-buttons"
                    >
                      Update
                    </button>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog update-profile-modal-dialog">
                        <div class="modal-content">
                          <div className="d-flex justify-content-end px-2 py-2">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-header">
                            <div className="update-profile-header">
                              <div className="row align-items-center">
                                <div className="col-md-2">
                                  <div className="update-profile-client-image">
                                    <img
                                      src={client1}
                                      className="w-100"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-7">
                                  <div className="updat-profile-user-detail">
                                    <div className="d-flex gap-3 align-items-center">
                                      <p className="m-0">
                                        <b>Gourav Panchal 0001</b>
                                      </p>
                                      <div className="update-profile-social-icons">
                                        <img src={call} alt="call-icon" />
                                        <img src={gmail} alt="gmail-icon" />
                                        <img
                                          src={whatsapp}
                                          alt="whatsapp-icon"
                                        />
                                      </div>
                                    </div>
                                    <p className="m-0">test@gmail.com</p>
                                    <p>+91 9319846114</p>
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="d-flex justify-content-end gap-3">
                                    <p>
                                      <i className="bi bi-bell"></i>
                                      <span>Status : {"EC/NC"}</span>
                                    </p>
                                    <p>
                                      <i
                                        style={{ cursor: "pointer" }}
                                        className="bi bi-three-dots-vertical"
                                      ></i>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="modal-body">
                            <section className="update-profile">
                              <div className="update-profile-personal-information">
                                <div>
                                  <h6>Personal Information</h6>
                                  <ul>
                                    <li>
                                      <b>Religion : </b>Sikh
                                    </li>
                                    <li>
                                      <b>Caste : </b>Sikh
                                    </li>
                                    <li>
                                      <b>Time of Birth : </b>1343
                                    </li>
                                    <li>
                                      <b>Height : </b>5’7
                                    </li>
                                    <li>
                                      <b>Weight : </b>76
                                    </li>
                                  </ul>
                                </div>
                                <hr />
                                <div>
                                  <h6>More Info</h6>
                                  <ul>
                                    <li>
                                      <b>Status : </b>Actively seekin
                                    </li>
                                    <li>
                                      <b>Occupation : </b>Software
                                    </li>
                                    <li>
                                      <b>State : </b>Delhi
                                    </li>
                                    <li>
                                      <b>Manglik : </b>No
                                    </li>
                                  </ul>
                                </div>
                                <hr />
                                <div>
                                  <h6>Actions</h6>
                                  <ul>
                                    <li>
                                      Share Profile &nbsp;
                                      <b>
                                        <i className="bi bi-upload"></i>
                                      </b>
                                    </li>
                                    <li>
                                      Update Profile &nbsp;
                                      <b>
                                        <i className="bi bi-pen"></i>
                                      </b>
                                    </li>
                                  </ul>
                                </div>
                                <div className="personal-information-social-media">
                                  <h5>Socials:</h5>
                                  <div className="d-flex gap-3">
                                    <Link to={""}>
                                      <i className="bi bi-facebook"></i>
                                    </Link>
                                    <Link to={""}>
                                      <i className="bi bi-twitter"></i>
                                    </Link>
                                    <Link to={""}>
                                      <i className="bi bi-instagram"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="update-profile-schedule-metting">
                                <div className="align-items-center p-1">
                                  {/* Tabs */}
                                  <ul
                                    className="nav nav-tabs w-100"
                                    id="myTab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="activity-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#activity"
                                        type="button"
                                        role="tab"
                                        aria-controls="activity"
                                        aria-selected="true"
                                      >
                                        Activity
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="call-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#call"
                                        type="button"
                                        role="tab"
                                        aria-controls="call"
                                        aria-selected="false"
                                      >
                                        Call
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="task-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#task"
                                        type="button"
                                        role="tab"
                                        aria-controls="task"
                                        aria-selected="false"
                                      >
                                        Task
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="proposal-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#proposal"
                                        type="button"
                                        role="tab"
                                        aria-controls="proposal"
                                        aria-selected="false"
                                      >
                                        Proposal
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="all-buttons"
                                        id="proposal-tab"
                                        style={{ marginLeft: "15rem" }}
                                        data-bs-toggle="tab"
                                        data-bs-target="#scheduleTab"
                                        type="button"
                                        role="tab"
                                        aria-controls="scheduleTab"
                                        aria-selected="false"
                                      >
                                        Schedule Meeting
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                {/* Tab Content */}
                                <div
                                  className="tab-content m-0"
                                  id="myTabContent"
                                >
                                  {/* Tab Content 1 */}
                                  <div
                                    className="tab-pane fade show active"
                                    id="activity"
                                    role="tabpanel"
                                    aria-labelledby="activity-tab"
                                  >
                                    <div
                                      style={{
                                        // padding: "20px",
                                        fontFamily: "Arial, sans-serif",
                                      }}
                                    >
                                      <div className="d-flex">
                                        <label>
                                          <select
                                            className="form-select"
                                            style={{ maxWidth: "200px" }}
                                          >
                                            <option>Contact Activity</option>
                                            <option>Follow-up</option>
                                            <option>Meeting</option>
                                          </select>
                                        </label>
                                        <input
                                          type="date"
                                          value={activityDate}
                                          onChange={(e) =>
                                            setActivityDate(e.target.value)
                                          }
                                          className="form-control"
                                          style={{
                                            maxWidth: "200px",
                                            marginLeft: "10px",
                                          }}
                                        />
                                      </div>
                                      <div style={{ marginTop: "10px" }}>
                                        <textarea
                                          rows="4"
                                          cols="50"
                                          placeholder="Write a note"
                                          value={note}
                                          onChange={(e) =>
                                            setNote(e.target.value)
                                          }
                                          style={{
                                            width: "100%",
                                            resize: "none",
                                            padding: "1rem",
                                          }}
                                        />
                                        <button
                                          onClick={handleAddNote}
                                          style={{ marginTop: "5px" }}
                                          className="all-buttons"
                                        >
                                          Submit
                                        </button>
                                      </div>
                                      <div style={{ marginTop: "20px" }}>
                                        <h6>History</h6>
                                        <hr />
                                        {/* <div>
                                          <h6 className="m-0">
                                            Conversation With Prospects
                                          </h6>
                                          <br />
                                          <div className="d-flex">
                                            <select
                                              style={{ maxWidth: "200px" }}
                                              className="form-select"
                                            >
                                              <option>Choose Prospects</option>
                                              <option>yes</option>
                                              <option>No</option>
                                            </select>

                                            <select
                                              className="form-select"
                                              style={{
                                                maxWidth: "200px",
                                                marginLeft: "10px",
                                              }}
                                            >
                                              <option>Select Date</option>
                                              <option>01-12-2024</option>
                                              <option>02-12-2024</option>
                                              <option>03-12-2024</option>
                                              <option>04-12-2024</option>
                                              <option>05-12-2024</option>
                                            </select>
                                          </div>
                                        </div> */}
                                        <div className="profile-activity-status">
                                          {conversations.map((conv, index) => (
                                            <div
                                              key={index}
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  width: "30px",
                                                  height: "30px",
                                                  borderRadius: "50%",
                                                  backgroundColor:
                                                    conv.type === "N"
                                                      ? "orange"
                                                      : "green",
                                                  color: "white",
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  marginRight: "10px",
                                                }}
                                              >
                                                {conv.type}
                                              </div>
                                              <div>
                                                <div>{conv.text}</div>
                                                <div
                                                  style={{
                                                    fontSize: "12px",
                                                    color: "gray",
                                                  }}
                                                >
                                                  {conv.date}
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Tab Content 2 */}
                                  <div
                                    className="tab-pane fade"
                                    id="call"
                                    role="tabpanel"
                                    aria-labelledby="call-tab"
                                  >
                                    <div className="d-flex align-items-center mb-3">
                                      <select
                                        style={{ maxWidth: "200px" }}
                                        className="form-select me-3"
                                      >
                                        <option>Contact Calls</option>
                                        <option>Missed Calls</option>
                                        <option>Outgoing Calls</option>
                                        <option>Incoming Calls</option>
                                      </select>
                                      <input
                                        type="date"
                                        value={callDate}
                                        onChange={(e) =>
                                          setCallDate(e.target.value)
                                        }
                                        className="form-control"
                                        style={{ width: "200px" }}
                                      />
                                    </div>

                                    {Object.keys(groupedCalls).map(
                                      (date, index) => (
                                        <div key={index} className="mb-4">
                                          {/* Date Header */}
                                          <p
                                            className="m-0"
                                            style={{ fontSize: "12px" }}
                                          >
                                            {date}
                                          </p>

                                          {/* Call Details */}
                                          <div className="list-group">
                                            {groupedCalls[date].map(
                                              (call, idx) => (
                                                <div
                                                  key={idx}
                                                  className="list-group-item d-flex align-items-center"
                                                >
                                                  {/* Participant Icon */}
                                                  <div
                                                    className={`d-flex justify-content-center align-items-center rounded-circle text-white me-3`}
                                                    style={{
                                                      width: "40px",
                                                      height: "40px",
                                                      backgroundColor:
                                                        call.participant === "P"
                                                          ? "purple"
                                                          : "blue",
                                                    }}
                                                  >
                                                    {call.participant}
                                                  </div>

                                                  {/* Call Details */}
                                                  <div className="flex-grow-1">
                                                    <div className="d-flex align-items-center">
                                                      <span
                                                        style={{
                                                          fontSize: "12px",
                                                        }}
                                                        className="me-2"
                                                      >
                                                        {call.label}
                                                      </span>
                                                      <i
                                                        className={`bi ${call.icon} me-1`}
                                                        style={{
                                                          fontSize: "12px",
                                                        }}
                                                      ></i>
                                                    </div>
                                                    <small className="text-muted">
                                                      {call.time}
                                                    </small>
                                                  </div>

                                                  {/* Audio Section (only if audio exists) */}
                                                  {call.audio && (
                                                    <div className="d-flex align-items-center">
                                                      <div
                                                        style={{
                                                          width: "100%",
                                                          maxWidth: "500px",
                                                          margin: "0 auto",
                                                        }}
                                                      >
                                                        <audio
                                                          ref={audioRef}
                                                          onTimeUpdate={
                                                            handleProgressUpdate
                                                          }
                                                          onEnded={() =>
                                                            setIsPlaying(false)
                                                          }
                                                        />
                                                        <div
                                                          style={{
                                                            position:
                                                              "relative",
                                                            height: "2px",
                                                            background:
                                                              "#e0e0e0",
                                                            borderRadius: "2px",
                                                            overflow: "hidden",
                                                            margin: "10px 0",
                                                            display:
                                                              currentAudio ===
                                                                call.audio &&
                                                              isPlaying
                                                                ? "block"
                                                                : "none",
                                                          }}
                                                        >
                                                          <div
                                                            style={{
                                                              height: "100%",
                                                              width: `${progress}%`,
                                                              background:
                                                                "#007bff",
                                                              transition:
                                                                "width 0.1s linear",
                                                            }}
                                                          ></div>
                                                        </div>
                                                        <i class="bi bi-mic"></i>
                                                        <i
                                                          className={`bi ${
                                                            currentAudio ===
                                                              call.audio &&
                                                            isPlaying
                                                              ? "bi-pause-fill"
                                                              : "bi-play-fill"
                                                          } text-secondary`}
                                                          style={{
                                                            fontSize: "18px",
                                                            cursor: "pointer",
                                                          }}
                                                          onClick={() =>
                                                            togglePlay(
                                                              call.audio
                                                            )
                                                          }
                                                        ></i>
                                                      </div>
                                                    </div>
                                                  )}
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                  {/* Tab Content 3 */}
                                  <div
                                    className="tab-pane fade"
                                    id="task"
                                    role="tabpanel"
                                    aria-labelledby="task-tab"
                                  >
                                    {/* Header Section */}
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                      <h5 className="fw-bold">Tasks</h5>
                                      <button
                                        onClick={ShowAddTask}
                                        className="all-buttons"
                                      >
                                        Add Task
                                      </button>
                                    </div>

                                    {addTasks && (
                                      <div className="client-response-section">
                                        {/* Header */}
                                        <h6 className="client-response-title">
                                          Add Task
                                        </h6>
                                        <div className="client-response-form">
                                          <form action="">
                                            <div className="row">
                                              <div className="col-md-6 mb-2">
                                                <label htmlFor="">
                                                  Task Category{" "}
                                                  <span className="required">
                                                    *
                                                  </span>
                                                </label>
                                                <select className="form-control">
                                                  <option value="Task 1">
                                                    Task 1
                                                  </option>
                                                  <option value="Task 2">
                                                    Task 2
                                                  </option>
                                                  <option value="Task 3">
                                                    Task 3
                                                  </option>
                                                  <option value="Task 4">
                                                    Task 4
                                                  </option>
                                                </select>
                                              </div>
                                              <div className="col-md-6 mb-2">
                                                <label htmlFor="">
                                                  Task Assigned To{" "}
                                                  <span className="required">
                                                    *
                                                  </span>
                                                </label>
                                                <select className="form-control">
                                                  <option value="Task 1">
                                                    Task 1
                                                  </option>
                                                  <option value="Task 2">
                                                    Task 2
                                                  </option>
                                                  <option value="Task 3">
                                                    Task 3
                                                  </option>
                                                  <option value="Task 4">
                                                    Task 4
                                                  </option>
                                                </select>
                                              </div>
                                              <div className="col-md-6 mb-2">
                                                <label htmlFor="">
                                                  Task Title
                                                  <span className="required">
                                                    *
                                                  </span>
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
                                                  Task Scheduled On
                                                  <span className="required">
                                                    *
                                                  </span>
                                                </label>
                                                <input
                                                  className="form-control"
                                                  type="text"
                                                  name="task-schedule"
                                                  id=""
                                                />
                                              </div>
                                              <div className="col-md-12 mb-3">
                                                <div className="d-flex gap-4">
                                                  <label htmlFor="task-priority">
                                                    Task Priority <span>*</span>
                                                  </label>
                                                  <div className="d-flex gap-1">
                                                    <input
                                                      type="radio"
                                                      name="task-priority"
                                                      id="priority-normal"
                                                    />
                                                    <label htmlFor="priority-normal">
                                                      Normal
                                                    </label>
                                                  </div>
                                                  <div className="d-flex gap-1">
                                                    <input
                                                      type="radio"
                                                      name="task-priority"
                                                      id="priority-urgent"
                                                    />
                                                    <label htmlFor="priority-urgent">
                                                      Urgent
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="col-md-12 text-center">
                                                <button className="all-buttons">
                                                  Add Task
                                                </button>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    )}

                                    {/* Filters Section */}
                                    <div className="mb-3">
                                      <div
                                        className="position-relative"
                                        style={{ width: "100%" }}
                                      >
                                        <button
                                          className="all-buttons w-50"
                                          onClick={toggleDropdown}
                                        >
                                          Filters
                                        </button>
                                        {isDropdownOpen && (
                                          <div
                                            className="dropdown-menu show p-3"
                                            style={{
                                              display: "block",
                                              width: "100%",
                                              boxShadow:
                                                "0 4px 6px rgba(0, 0, 0, 0.1)",
                                            }}
                                          >
                                            <form action="">
                                              <div className="row filter-labels">
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Task Title
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    // placeholder="Task Title :"
                                                    name="task-title"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Client Name
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="client-name"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Task Category
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Task Priority
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Task Assigned To
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Task Created By
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Status
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Search By
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                                <div className="col-4">
                                                  <label htmlFor="">
                                                    Select Duration
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    {/* Task List */}
                                    <div className="list-group">
                                      {tasks.map((task) => (
                                        <div
                                          key={task.id}
                                          className="list-group-item d-flex align-items-center"
                                        >
                                          {/* Checkbox */}
                                          <input
                                            type="checkbox"
                                            className="form-check-input me-3"
                                            checked={task.isCompleted}
                                            onChange={() =>
                                              toggleCompletion(task.id)
                                            }
                                          />

                                          {/* Star Icon */}
                                          <i
                                            className={`bi ${
                                              task.isCompleted
                                                ? "bi-star-fill"
                                                : "bi-star"
                                            } me-3`}
                                            style={{
                                              fontSize: "16px",
                                              cursor: "pointer",
                                            }}
                                          ></i>

                                          {/* Task Details */}
                                          <div className="flex-grow-1 d-flex gap-3">
                                            <div
                                              style={{ fontSize: "12px" }}
                                              className={`${
                                                task.isCompleted
                                                  ? "text-decoration-line-through text-muted"
                                                  : ""
                                              }`}
                                            >
                                              {task.title}
                                            </div>
                                            {/* Priority Label */}
                                            <span
                                              className="badge"
                                              style={{
                                                border: `1px solid ${task.priorityColor}`,
                                                backgroundColor:
                                                  task.backgroundColor,
                                                color: "black",
                                                fontWeight: "400",
                                                fontSize: "0.6rem",
                                                borderRadius: "1rem",
                                              }}
                                            >
                                              {task.priority} &nbsp;
                                              <i
                                                style={{
                                                  color: task.priorityColor,
                                                }}
                                                class="bi bi-circle-fill"
                                              ></i>
                                            </span>
                                          </div>

                                          {/* Task Date */}
                                          <div
                                            style={{ fontSize: "12px" }}
                                            className="text-muted me-3"
                                          >
                                            {task.date}
                                          </div>

                                          {/* Options Menu */}
                                          <i
                                            className="bi bi-three-dots"
                                            style={{
                                              fontSize: "18px",
                                              cursor: "pointer",
                                            }}
                                          ></i>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  {/* Tab Content 4 */}
                                  <div
                                    className="tab-pane fade"
                                    id="proposal"
                                    role="tabpanel"
                                    aria-labelledby="proposal-tab"
                                  >
                                    <div className="proposal-container">
                                      <div className="form-group d-flex gap-3 align-items-center">
                                        <label
                                          htmlFor="product-select"
                                          className="label"
                                        >
                                          Select product:
                                        </label>
                                        <select
                                          id="product-select"
                                          value={selectedProduct}
                                          onChange={handleProductChange}
                                          className="form-select me-3"
                                          style={{ width: "200px" }}
                                        >
                                          <option value="Proposals">
                                            Proposals
                                          </option>
                                          {/* Add other options if needed */}
                                        </select>
                                      </div>

                                      <div className="details">
                                        <h3 className="mt-3">
                                          Product details
                                        </h3>
                                        <p style={{ fontSize: "14px" }}>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua. Ut enim ad minim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut aliquip ex ea
                                          commodo consequat. Duis aute irure
                                          dolor in reprehenderit in voluptate
                                          velit esse cillum dolore eu fugiat
                                          nulla pariatur. Excepteur sint
                                          occaecat.
                                        </p>
                                        <p>Duration: 6 months</p>
                                        <p className="fs-2">₹ 40,000</p>
                                        <button className="all-buttons">
                                          Send proposal
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Tab Content 5 */}
                                  <div
                                    className="tab-pane fade"
                                    id="scheduleTab"
                                    role="tabpanel"
                                    aria-labelledby="proposal-tab"
                                  >
                                    <div className="proposal-container">
                                      <div className="schedule-meeting-tab">
                                        <h2>Schedule meeting with name123?</h2>
                                        <form onSubmit={handleSubmit}>
                                          <div className="row">
                                            <div className="col-md-6 mb-1">
                                              <label
                                                className="form-label"
                                                htmlFor="date"
                                              >
                                                Date:
                                              </label>
                                              <input
                                                className="form-control"
                                                type="date"
                                                name="date"
                                                id="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                required
                                              />
                                            </div>
                                            <div className="col-md-6 mb-1">
                                              <label
                                                className="form-label"
                                                htmlFor="time"
                                              >
                                                Time:
                                              </label>
                                              <input
                                                className="form-control"
                                                type="time"
                                                name="time"
                                                id="time"
                                                value={formData.time}
                                                onChange={handleInputChange}
                                                required
                                              />
                                            </div>
                                            <div className="col-md-12">
                                              <textarea
                                                className="form-control w-100 mb-3"
                                                placeholder="Add Note"
                                                name="note"
                                                value={formData.note}
                                                onChange={handleInputChange}
                                                required
                                              ></textarea>
                                              <button
                                                type="submit"
                                                className="all-buttons"
                                              >
                                                Create Proposal
                                              </button>
                                            </div>
                                          </div>
                                        </form>
                                      </div>

                                      {/* Submitted Data Section */}
                                      {submittedData.length > 0 && (
                                        <div className="submitted-data mt-4">
                                          <h3>Meeting Schedule</h3>
                                          {submittedData.map((data, index) => (
                                            <div
                                              key={index}
                                              className="proposal-item"
                                            >
                                              <span>
                                                <strong>Date:</strong>{" "}
                                                {data.date}
                                              </span>
                                              <span>
                                                <strong>Time:</strong>{" "}
                                                {data.time}
                                              </span>
                                              <span>
                                                <strong>Note:</strong>{" "}
                                                {data.note}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="all-buttons"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* update profile end */}

                    <button
                      className="client-profile-buttons"
                      data-bs-toggle="modal"
                      data-bs-target="#shareProfile"
                    >
                      Share
                    </button>
                    <div
                      class="modal fade"
                      id="shareProfile"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog update-profile-modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Share Profile
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div>
                            <div
                              onClick={toggleDropdown}
                              className="view-client-filter"
                            >
                              <p>Filter </p>
                              <i>
                                <i class="bi bi-caret-down"></i>
                              </i>
                            </div>
                            {/* <select onClick={toggleDropdown} id="filter-select">
                              <option>Filter</option>
                            </select> */}

                            {isOpen && (
                              <div id="filter-options">
                                <form
                                  onSubmit={handleSubmit}
                                  className="container mt-4"
                                >
                                  <div className="row">
                                    {fields.map((field, index) => (
                                      <div className="col-md-3" key={index}>
                                        <label
                                          htmlFor={field.name}
                                          className="form-label"
                                        >
                                          {field.label}
                                        </label>
                                        <select
                                          id={field.name}
                                          name={field.name}
                                          value={formData[field.name] || ""}
                                          onChange={handleChange}
                                          className="form-control"
                                          required
                                        >
                                          <option value="">
                                            Select {field.label}
                                          </option>
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
                                    <button
                                      type="submit"
                                      className="all-buttons mt-3"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            )}
                          </div>
                          <div class="modal-body">
                            <div className="container mt-4">
                              <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                  <thead className="admin-table">
                                    <tr>
                                      <th>Select</th>
                                      <th>Photo</th>
                                      <th>Name</th>
                                      <th>Marital Status</th>
                                      <th>Date of Birth</th>
                                      <th>Height</th>
                                      <th>Religion / Caste</th>
                                      <th>
                                        Education / Occupation / Personal Income
                                      </th>
                                      <th>Contact No. / Email</th>
                                      <th>State / City</th>
                                      <th>Manglik</th>
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
                                          <img
                                            src={profile.photo}
                                            alt="Profile"
                                            width="50"
                                          />
                                        </td>
                                        <td>{profile.name}</td>
                                        <td>{profile.maritalStatus}</td>
                                        <td>{profile.dob}</td>
                                        <td>{profile.height}</td>
                                        <td>
                                          {profile.religion} / {profile.caste}
                                        </td>
                                        <td>
                                          {profile.education} /
                                          {profile.occupation} /
                                          {profile.personalIncome}
                                        </td>
                                        <td>{profile.contact}</td>
                                        <td>
                                          {profile.state} / {profile.city}
                                        </td>
                                        <td>{profile.manglik}</td>
                                        <td>
                                          <button className="all-buttons">
                                            Send
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="all-buttons"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="all-buttons">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewClient;
