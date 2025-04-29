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
        <Link to="/" className="text-center">
          <img src={logo} className="logo" alt="dashboard logo" />
        </Link>
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
              <Link to="/view-client">
                <i className="bi bi-eye-fill"></i> View Clients
              </Link>
            </li>
            <li>
              <Link to="/add-client">
                <i className="bi bi-person-plus-fill"></i> Add Client
              </Link>
            </li>
            <li>
              <Link to="/client-report">
                <i className="bi bi-bar-chart-fill"></i> Client Report
              </Link>
            </li>
            <li>
              <Link to="/client-response">
                <i className="bi bi-chat-dots-fill"></i> Client Response
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div onClick={() => toggleDropdown("shortlist")}>
            <Link to="#">
              <i className="bi bi-check2-square"></i> Shortlist
            </Link>
          </div>
          <ul className={`dropdown ${dropdown === "shortlist" ? "open" : ""}`}>
            <li>
              <Link to="/shortlisted-profile">
                <i className="bi bi-person-check-fill"></i> Shortlisted Profiles
              </Link>
            </li>
            <li>
              <Link to="/approved-profile">
                <i className="bi bi-patch-check-fill"></i> Approved Profiles
              </Link>
            </li>
            <li>
              <Link to="/reject-profile">
                <i className="bi bi-x-circle-fill"></i> Rejected Profiles
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div onClick={() => toggleDropdown("Leads")}>
            <Link to="#">
              <i className="bi bi-person-square"></i> Leads
            </Link>
          </div>
          <ul className={`dropdown ${dropdown === "Leads" ? "open" : ""}`}>
            <li>
              <Link to="/allLeads">
                <i className="bi bi-list-ul"></i> All Leads
              </Link>
            </li>
            <li>
              <Link to="/addLeads">
                <i className="bi bi-plus-square-fill"></i> Add Leads
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div onClick={() => toggleDropdown("Tasks")}>
            <Link to="#">
              <i className="bi bi-list-task"></i> Tasks
            </Link>
          </div>
          <ul className={`dropdown ${dropdown === "Tasks" ? "open" : ""}`}>
            <li>
              <Link to="/viewTask">
                <i className="bi bi-card-checklist"></i> View Tasks
              </Link>
            </li>
            <li>
              <Link to="/addTask">
                <i className="bi bi-plus-circle-fill"></i> Add Tasks
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div onClick={() => toggleDropdown("Settings")}>
            <Link to="#">
              <i className="bi bi-gear-fill"></i> Settings
            </Link>
          </div>
          <ul className={`dropdown ${dropdown === "Settings" ? "open" : ""}`}>
            <li>
              <Link to="/shortlisted-profile">
                <i className="bi bi-clock-history"></i> Manage Activity Log
              </Link>
            </li>
            <li>
              <Link to="/approved-profile">
                <i className="bi bi-person-plus-fill"></i> Add Reference
              </Link>
            </li>
            <li>
              <Link to="/approved-profile">
                <i className="bi bi-person-lines-fill"></i> View Reference
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div onClick={() => toggleDropdown("Management")}>
            <Link to="#">
              <i className="bi bi-person-gear"></i> User Management
            </Link>
          </div>
          <ul className={`dropdown ${dropdown === "Management" ? "open" : ""}`}>
            <li>
              <Link to="/staffReport">
                <i className="bi bi-clipboard-data-fill"></i> Staff Report
              </Link>
            </li>
            <li>
              <Link to="/userManager">
                <i className="bi bi-person-badge-fill"></i> User Manager
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div onClick={() => toggleDropdown("Proposal")}>
            <Link to="#">
              <i className="bi bi-envelope-paper-fill"></i> Proposal
            </Link>
          </div>
          <ul className={`dropdown ${dropdown === "Proposal" ? "open" : ""}`}>
            <li>
              <Link to="/shortlisted-profile">
                <i className="bi bi-arrow-right-circle-fill"></i> Assign
                Proposal
              </Link>
            </li>
            <li>
              <Link to="/approved-profile">
                <i className="bi bi-archive-fill"></i> Proposal Manager
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <div onClick={() => toggleDropdown("logout")}>
            <Link to="#">
              <i className="bi bi-box-arrow-right"></i> Logout
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
