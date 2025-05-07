import React, { useRef, useState } from "react";
import "./EditClient.css"; // Make sure to keep your custom CSS file
import client1 from "../../../Images/client1.png";
import call from "../../../Images/call-icon.png";
import gmail from "../../../Images/Gmail-icon.png";
import whatsapp from "../../../Images/WhatsApp-icon.png";
import { useNavigate, Link } from "react-router-dom";
import audio from "../../../Images/testing-audio.mp3";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaEdit, FaShareAlt } from 'react-icons/fa';

// import { Modal } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

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
      type: "Missed",
      icon: "bi-telephone-x",
      label: "Missed Call",
      time: "7:00 PM",
      date: "11/12/2024",
      participant: "P",
      audio: audio,
    },
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
      type: "Missed",
      icon: "bi-telephone-x",
      label: "Missed Call",
      time: "7:00 PM",
      date: "11/12/2024",
      participant: "P",
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
      id: 1,
      title: "Video conference with name123",
      priority: "High",
      priorityColor: "red",
      backgroundColor: "#C92A2A29",
      date: "08/10/1996",
      isCompleted: false,
    },
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
      id: 1,
      title: "Video conference with name123",
      priority: "High",
      priorityColor: "red",
      backgroundColor: "#C92A2A29",
      date: "08/10/1996",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Video conference with name123",
      priority: "High",
      priorityColor: "red",
      backgroundColor: "#C92A2A29",
      date: "08/10/1996",
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

  return (
    <div className="content-area">
    <div className="aman">
      {/* <div className="modal-header">  
        <h5 className="modal-title">View Client</h5>
      </div> */}
      <div>
        <div className="flex justify-end p-4">
          {/* <div className="button"> */}
            <div>
              {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button> */}
            </div>
           <div className="unique-modal-header">
          <div className="unique-profile-header">
          <div className="profile-row">
         <div className="profile-image-col">
        <div className="unique-client-image">
          <img src={client1} className="client-img" alt="client" />
        </div>
        
      </div>
      <div className="profile-info-col">
        <div className="unique-user-detail">
          <div className="user-header">
            <p className="user-name">Aman Tiwari 0001</p>
            <div className="unique-social-icons">
              <img src={call} alt="call-icon" className="social-icon" />
              <img src={gmail} alt="gmail-icon" className="social-icon" />
              <img src={whatsapp} alt="whatsapp-icon" className="social-icon" />
            </div>
          </div>
          <p className="user-email">amankumartiwari5255gmail.com</p>
          <p className="user-phone">+91 9319846114</p>
          <div className="user-location-row">
          <p className="user-location">
            Delhi, India</p>
          </div>

        </div>
      </div>
    </div>
</div>
{/* /////////////////////1.1//////////// */}


{/* <div className="new-option">
  <div className="new-option-item"></div>
    <div className="new-option-icon">
      <h1>h</h1>
      </div> */}

          {/* /////////////////2///////////// */}
  <div className="modal-body">
  <section className="update-profile">
    <div className="update-profile-section">
      <div>
        <h6>Personal Information</h6>
        <ul>
          <li><b>Religion :</b> Hindu</li>
          <li><b>Caste :</b> Pandit</li>
          <li><b>Time of Birth :</b> 1343</li>
          <li><b>Height :</b> 5'10</li>
        </ul>
      </div>
      <hr />
      <div>
        <h6>More Info</h6>
        <ul>
          <li><b>Status :</b>Seeking</li>
          <li><b>Occupation :</b>Engineer</li>
          <li><b>State :</b> Delhi</li>
          <li><b>Manglik :</b> No</li>
        </ul>
      </div>

      <hr />

      <div>
  <h6>Action</h6>
  <ul className="action-list">
    <li>
      <button className="action-button" onClick={() => console.log('Share clicked')}>
        <FaShareAlt className="action-icon" /><a href="/ShareClient"><span>Share Profile</span></a> 
      </button>
    </li>
    <li>
      <button className="action-button" onClick={() => console.log('Edit clicked')}>
        <FaEdit className="action-icon" /> <a href="/add-client"><span>Update Profile</span></a>
      </button>
    </li>
  </ul>
</div>

      <hr />
      <div className="social-icons">
      <FaFacebook className="icon" />
      <FaInstagram className="icon" />
     <FaTwitter className="icon" />
      </div>
    </div>
    <hr></hr>


{/* /////////////////////3///////////////// */}
                
                <div className="update-profile-schedule-metting">
                  <div className="align-items-center p-1">
                    <ul
                      className="nav nav-tabs w-100"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="activity-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#activity"
                          type="button"
                          role="tab"
                          aria-controls="activity"
                          aria-selected="true">
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
                                      conv.type === "N" ? "orange" : "green",
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
                                    style={{ fontSize: "12px", color: "gray" }}
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
                                    backgroundColor:
                                      call.participant === "P"
                                        ? "purple"
                                        : "blue",
                                  }}
                                >
                                  {call.participant}
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex align-items-center">
                                    <span
                                      style={{ fontSize: "12px" }}
                                      className="me-2"
                                    >
                                      {call.label}
                                    </span>
                                    <i
                                      className={`bi ${call.icon} me-1`}
                                      style={{ fontSize: "12px" }}
                                    ></i>
                                  </div>
                                  <small className="text-muted">
                                    {call.time}
                                  </small>
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
                                            currentAudio === call.audio &&
                                            isPlaying
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
                                          currentAudio === call.audio &&
                                          isPlaying
                                            ? "bi-pause-fill"
                                            : "bi-play-fill"
                                        } text-secondary`}
                                        style={{
                                          fontSize: "18px",
                                          cursor: "pointer",
                                        }}
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
                                    Task Category{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <select className="form-control">
                                    <option value="Task 1">Task 1</option>
                                  </select>
                                </div>
                                <div className="col-md-6 mb-2">
                                  <label htmlFor="">
                                    Task Assigned To{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <select className="form-control">
                                    <option value="Task 1">Task 1</option>
                                  </select>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <p>Duration: 6 months</p>
                          <p className="fs-2">₹ 40,000</p>
                          <Link to="/elitepdf">
                                       <button className="all-buttons">
                                       Send proposal
                                     </button>
                                     </Link>                        </div>
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
              {/* <button */}
              {/* type="button" */}
              {/* className="all-buttons" */}
              {/* data-bs-dismiss="modal" */}
              {/* > */}
              {/* Close */}
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewClient;
