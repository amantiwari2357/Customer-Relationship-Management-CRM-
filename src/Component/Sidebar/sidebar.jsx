import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./sidebar.css";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setDropdown(dropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="sidebar">
      <div>
        <a href="/" className="text-center">
          <img src={logo} className="logo" alt="dashboard logo" />
        </a>
      </div>
      <h5>
        <Link to="/login">
          <i className="bi bi-speedometer2"></i> Dashboard
        </Link>
      </h5>

      <ul>
        <li>
          <div onClick={() => toggleDropdown("clients")}>
            <Link to="#">
              <i className="bi bi-people-fill"></i> Clients
            </Link>
          </div>

          <ul className={`dropdown ${dropdown === "clients" ? "open" : ""}`}>
            <li>
              <Link to={"/view-client"}>
                <i class="bi bi-eye"></i> View Clients
              </Link>
            </li>
            <li>
              <Link to={"/add-client"}>
                <i class="bi bi-person-plus"></i> Add Client
              </Link>
            </li>
            <li>
              <Link to={"/client-report"}>
                <i class="bi bi-file-earmark-text"></i> Client Report
              </Link>
            </li>
            <li>
              <Link to={"/client-response"}>
                <i class="bi bi-chat-left-text"></i> Client Response
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div onClick={() => toggleDropdown("shortlist")}>
            <Link to="#">
              <i className="bi bi-person-lines-fill"></i> Shortlist
            </Link>
          </div>

          <ul className={`dropdown ${dropdown === "shortlist" ? "open" : ""}`}>
            <li>
              <Link to={"/shortlisted-profile"}>
                <i class="bi bi-person-check"></i> Shortlisted Profiles
              </Link>
            </li>
            <li>
              <Link to={"/approved-profile"}>
                <i class="bi bi-check-circle"></i> Approved Profiles
              </Link>
            </li>
            <li>
              <Link to={"/reject-profile"}>
                <i class="bi bi-x-circle"></i> Rejected Profiles
              </Link>
            </li>
          </ul>
        </li>
        <li>
        <div>
            <Link to="/proposal">
              <i className="bi bi-file-earmark-text"></i> Proposal
            </Link>
          </div>
        </li>
        <li>
          <div onClick={() => toggleDropdown("tasks")}>
            <Link to="#">
              <i className="bi bi-calendar4-event"></i> Tasks
            </Link>
          </div>
          <ul className={`dropdown ${dropdown === "tasks" ? "open" : ""}`}>
            <li>
              <Link to={"/add-task-event"}>
                <i class="bi bi-list-check"></i> To Do List
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
