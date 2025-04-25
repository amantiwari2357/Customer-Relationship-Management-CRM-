import React, { useRef, useState } from "react";
import bootstrap from "bootstrap"; // Import Bootstrap's JavaScript module
import "./ViewClient.css"; // Make sure to keep your custom CSS file
import client1 from "../../../Images/client1.png";
import call from "../../../Images/call-icon.png";
import gmail from "../../../Images/Gmail-icon.png";
import whatsapp from "../../../Images/WhatsApp-icon.png";
import { Link, useNavigate } from "react-router-dom";
import audio from "../../../Images/testing-audio.mp3";
// Removed duplicate import of bootstrap


const ViewClient = () => {
  const navigate = useNavigate();
  const [callDate, setCallDate] = useState("2023-11-11");
  const [activityDate, setActivityDate] = useState("2023-11-11");
  const [note, setNote] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("Proposals");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addTasks, setAddTask] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    note: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

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
  ];

  const [conversations, setConversations] = useState([
    {
      type: "N",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "12/10/2024 7:00 PM",
    },
  ]);

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
  ]);

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
  ]);

  // Audio player state and handlers
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

  // Other handlers
  const handleAddNote = () => {
    if (note.trim()) {
      setConversations([
        ...conversations,
        { type: "N", text: note, date: new Date().toLocaleString() },
      ]);
      setNote("");
    }
  };

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setIsOpen(!isOpen);
  };

  const ShowAddTask = () => {
    setAddTask((openTask) => !openTask);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ date: "", time: "", note: "" });
  };

//   const myModalEl = document.getElementById('exampleModal');
// const myModal = new bootstrap.Modal(myModalEl, {
//   backdrop: 'static' // or true/false
// });
// myModal.show();  


  return (
    <div className="">
      <div className="">
        
       
        </div>
        <div>
          <div className="modal-dialog update-profile-modal-dialog">
            <div className="modal-content">
              <div className="d-flex justify-content-end px-2 py-2">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-header">
                <div className="update-profile-header">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <div className="update-profile-client-image">
                        <img src={client1} className="w-100" alt="" />
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
                            <img src={whatsapp} alt="whatsapp-icon" />
                          </div>
                        </div>
                        <p className="m-0">test@gmail.com</p>
                        <p>+91 9319846114</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-body">
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
                          <b>Height : </b>5'7
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div>
                      <h6>More Info</h6>
                      <ul>
                        <li>
                          <b>Status : </b>Actively seeking
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
                  </div>
                  <div className="update-profile-schedule-metting">
                    <div className="align-items-center p-1">
                      <ul className="nav nav-tabs w-100" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
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
                        <li className="nav-item" role="presentation">
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
                        <li className="nav-item" role="presentation">
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
                        <li className="nav-item" role="presentation">
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
                        <li className="nav-item" role="presentation">
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
                    <div className="tab-content m-0" id="myTabContent">
                      {/* Activity Tab */}
                      <div
                        className="tab-pane fade show active"
                        id="activity"
                        role="tabpanel"
                        aria-labelledby="activity-tab"
                      >
                        <div style={{ fontFamily: "Arial, sans-serif" }}>
                          <div className="d-flex">
                            <label>
                              <select className="form-select" style={{ maxWidth: "200px" }}>
                                <option>Contact Activity</option>
                                <option>Follow-up</option>
                                <option>Meeting</option>
                              </select>
                            </label>
                            <input
                              type="date"
                              value={activityDate}
                              onChange={(e) => setActivityDate(e.target.value)}
                              className="form-control"
                              style={{ maxWidth: "200px", marginLeft: "10px" }}
                            />
                          </div>
                          <div style={{ marginTop: "10px" }}>
                            <textarea
                              rows="4"
                              cols="50"
                              placeholder="Write a note"
                              value={note}
                              onChange={(e) => setNote(e.target.value)}
                              style={{ width: "100%", resize: "none", padding: "1rem" }}
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
                                      backgroundColor: conv.type === "N" ? "orange" : "green",
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
                                    <div style={{ fontSize: "12px", color: "gray" }}>
                                      {conv.date}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Call Tab */}
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
                            onChange={(e) => setCallDate(e.target.value)}
                            className="form-control"
                            style={{ width: "200px" }}
                          />
                        </div>

                        {Object.keys(groupedCalls).map((date, index) => (
                          <div key={index} className="mb-4">
                            <p className="m-0" style={{ fontSize: "12px" }}>
                              {date}
                            </p>
                            <div className="list-group">
                              {groupedCalls[date].map((call, idx) => (
                                <div
                                  key={idx}
                                  className="list-group-item d-flex align-items-center"
                                >
                                  <div
                                    className={`d-flex justify-content-center align-items-center rounded-circle text-white me-3`}
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      backgroundColor: call.participant === "P" ? "purple" : "blue",
                                    }}
                                  >
                                    {call.participant}
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="d-flex align-items-center">
                                      <span style={{ fontSize: "12px" }} className="me-2">
                                        {call.label}
                                      </span>
                                      <i
                                        className={`bi ${call.icon} me-1`}
                                        style={{ fontSize: "12px" }}
                                      ></i>
                                    </div>
                                    <small className="text-muted">{call.time}</small>
                                  </div>
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
                                          onTimeUpdate={handleProgressUpdate}
                                          onEnded={() => setIsPlaying(false)}
                                        />
                                        <div
                                          style={{
                                            position: "relative",
                                            height: "2px",
                                            background: "#e0e0e0",
                                            borderRadius: "2px",
                                            overflow: "hidden",
                                            margin: "10px 0",
                                            display:
                                              currentAudio === call.audio && isPlaying
                                                ? "block"
                                                : "none",
                                          }}
                                        >
                                          <div
                                            style={{
                                              height: "100%",
                                              width: `${progress}%`,
                                              background: "#007bff",
                                              transition: "width 0.1s linear",
                                            }}
                                          ></div>
                                        </div>
                                        <i className="bi bi-mic"></i>
                                        <i
                                          className={`bi ${
                                            currentAudio === call.audio && isPlaying
                                              ? "bi-pause-fill"
                                              : "bi-play-fill"
                                          } text-secondary`}
                                          style={{ fontSize: "18px", cursor: "pointer" }}
                                          onClick={() => togglePlay(call.audio)}
                                        ></i>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Task Tab */}
                      <div
                        className="tab-pane fade"
                        id="task"
                        role="tabpanel"
                        aria-labelledby="task-tab"
                      >
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="fw-bold">Tasks</h5>
                          <button onClick={ShowAddTask} className="all-buttons">
                            Add Task
                          </button>
                        </div>

                        {addTasks && (
                          <div className="client-response-section">
                            <h6 className="client-response-title">Add Task</h6>
                            <div className="client-response-form">
                              <form action="">
                                <div className="row">
                                  <div className="col-md-6 mb-2">
                                    <label htmlFor="">
                                      Task Category <span className="required">*</span>
                                    </label>
                                    <select className="form-control">
                                      <option value="Task 1">Task 1</option>
                                      <option value="Task 2">Task 2</option>
                                      <option value="Task 3">Task 3</option>
                                      <option value="Task 4">Task 4</option>
                                    </select>
                                  </div>
                                  <div className="col-md-6 mb-2">
                                    <label htmlFor="">
                                      Task Assigned To <span className="required">*</span>
                                    </label>
                                    <select className="form-control">
                                      <option value="Task 1">Task 1</option>
                                      <option value="Task 2">Task 2</option>
                                      <option value="Task 3">Task 3</option>
                                      <option value="Task 4">Task 4</option>
                                    </select>
                                  </div>
                                  <div className="col-md-12 text-center">
                                    <button className="all-buttons">Add Task</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        )}

                        <div className="list-group">
                          {tasks.map((task) => (
                            <div
                              key={task.id}
                              className="list-group-item d-flex align-items-center"
                            >
                              <input
                                type="checkbox"
                                className="form-check-input me-3"
                                checked={task.isCompleted}
                                onChange={() => toggleCompletion(task.id)}
                              />
                              <i
                                className={`bi ${
                                  task.isCompleted ? "bi-star-fill" : "bi-star"
                                } me-3`}
                                style={{ fontSize: "16px", cursor: "pointer" }}
                              ></i>
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
                                <span
                                  className="badge"
                                  style={{
                                    border: `1px solid ${task.priorityColor}`,
                                    backgroundColor: task.backgroundColor,
                                    color: "black",
                                    fontWeight: "400",
                                    fontSize: "0.6rem",
                                    borderRadius: "1rem",
                                  }}
                                >
                                  {task.priority} &nbsp;
                                  <i
                                    style={{ color: task.priorityColor }}
                                    className="bi bi-circle-fill"
                                  ></i>
                                </span>
                              </div>
                              <div
                                style={{ fontSize: "12px" }}
                                className="text-muted me-3"
                              >
                                {task.date}
                              </div>
                              <i
                                className="bi bi-three-dots"
                                style={{ fontSize: "18px", cursor: "pointer" }}
                              ></i>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Proposal Tab */}
                      <div
                        className="tab-pane fade"
                        id="proposal"
                        role="tabpanel"
                        aria-labelledby="proposal-tab"
                      >
                        <div className="proposal-container">
                          <div className="form-group d-flex gap-3 align-items-center">
                            <label htmlFor="product-select" className="label">
                              Select product:
                            </label>
                            <select
                              id="product-select"
                              value={selectedProduct}
                              onChange={handleProductChange}
                              className="form-select me-3"
                              style={{ width: "200px" }}
                            >
                              <option value="Proposals">Proposals</option>
                            </select>
                          </div>
                          <div className="details">
                            <h3 className="mt-3">Product details</h3>
                            <p style={{ fontSize: "14px" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>Duration: 6 months</p>
                            <p className="fs-2">₹ 40,000</p>
                            <button className="all-buttons">Send proposal</button>
                          </div>
                        </div>
                      </div>

                      {/* Schedule Meeting Tab */}
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
                                  <label className="form-label" htmlFor="date">
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
                                  <label className="form-label" htmlFor="time">
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
                                  <button type="submit" className="all-buttons">
                                    Create Proposal
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>

                          {submittedData.length > 0 && (
                            <div className="submitted-data mt-4">
                              <h3>Meeting Schedule</h3>
                              {submittedData.map((data, index) => (
                                <div key={index} className="proposal-item">
                                  <span>
                                    <strong>Date:</strong> {data.date}
                                  </span>
                                  <span>
                                    <strong>Time:</strong> {data.time}
                                  </span>
                                  <span>
                                    <strong>Note:</strong> {data.note}
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="all-buttons"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Share Profile Modal */}
        <div
          className="modal fade"
          id="shareProfile"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog update-profile-modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Share Profile
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Share profile functionality would go here</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="all-buttons"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ViewClient;