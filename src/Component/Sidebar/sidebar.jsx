import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./sidebar.css";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setDropdown(dropdown === dropdownName ? null : dropdownName);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="hamburger" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="text-center">
            <img src={logo} className="logo" alt="dashboard logo" />
          </Link>
        </div>

        {/* Sidebar Links */}
        <h5>
          <Link to="/login">
            <i className="bi bi-speedometer2"></i>{" "}
            {!isCollapsed && "Dashboard"}
          </Link>
        </h5>

        <ul>
          {/* Clients */}
          <li>
            <div onClick={() => toggleDropdown("clients")}>
              <Link to="#">
                <i className="bi bi-people-fill"></i>{" "}
                {!isCollapsed && "Clients"}
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "clients" ? "open" : ""}`}>
              <li>
                <Link to="/Testing">
                  <i className="bi bi-eye-fill"></i>{" "}
                  {!isCollapsed && "View Clients"}
                </Link>
              </li>
              <li>
                <Link to="/add-client">
                  <i className="bi bi-person-plus-fill"></i>{" "}
                  {!isCollapsed && "Add Client"}
                </Link>
              </li>
              <li>
                <Link to="/client-report">
                  <i className="bi bi-bar-chart-fill"></i>{" "}
                  {!isCollapsed && "Client Report"}
                </Link>
              </li>
              <li>
                <Link to="/client-response">
                  <i className="bi bi-chat-dots-fill"></i>{" "}
                  {!isCollapsed && "Client Response"}
                </Link>
              </li>
            </ul>
          </li>

          {/* Shortlist */}
          <li>
            <div onClick={() => toggleDropdown("shortlist")}>
              <Link to="#">
                <i className="bi bi-check2-square"></i>{" "}
                {!isCollapsed && "Shortlist"}
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "shortlist" ? "open" : ""}`}>
              <li>
                <Link to="/shortlisted-profile">
                  <i className="bi bi-person-check-fill"></i>{" "}
                  {!isCollapsed && "Shortlisted Profiles"}
                </Link>
              </li>
              <li>
                <Link to="/approved-profile">
                  <i className="bi bi-patch-check-fill"></i>{" "}
                  {!isCollapsed && "Approved Profiles"}
                </Link>
              </li>
              <li>
                <Link to="/reject-profile">
                  <i className="bi bi-x-circle-fill"></i>{" "}
                  {!isCollapsed && "Rejected Profiles"}
                </Link>
              </li>
            </ul>
          </li>

          {/* Leads */}
          <li>
            <div onClick={() => toggleDropdown("Leads")}>
              <Link to="#">
                <i className="bi bi-person-square"></i> {!isCollapsed && "Leads"}
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Leads" ? "open" : ""}`}>
              <li>
                <Link to="/allLeads">
                  <i className="bi bi-list-ul"></i> {!isCollapsed && "All Leads"}
                </Link>
              </li>
              <li>
                <Link to="/addLeads">
                  <i className="bi bi-plus-square-fill"></i>{" "}
                  {!isCollapsed && "Add Leads"}
                </Link>
              </li>
            </ul>
          </li>

          {/* Tasks */}
          <li>
            <div onClick={() => toggleDropdown("Tasks")}>
              <Link to="#">
                <i className="bi bi-list-task"></i> {!isCollapsed && "Tasks"}
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Tasks" ? "open" : ""}`}>
              <li>
                <Link to="/viewTask">
                  <i className="bi bi-card-checklist"></i>{" "}
                  {!isCollapsed && "View Tasks"}
                </Link>
              </li>
              <li>
                <Link to="/addTask">
                  <i className="bi bi-plus-circle-fill"></i>{" "}
                  {!isCollapsed && "Add Tasks"}
                </Link>
              </li>
            </ul>
          </li>

          {/* Settings */}
          <li>
            <div onClick={() => toggleDropdown("Settings")}>
              <Link to="#">
                <i className="bi bi-gear-fill"></i> {!isCollapsed && "Settings"}
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Settings" ? "open" : ""}`}>
              <li>
                <Link to="/activity-log">
                  <i className="bi bi-clock-history"></i>{" "}
                  {!isCollapsed && "Manage Activity Log"}
                </Link>
              </li>
              <li>
                <Link to="/Add-Reference">
                  <i className="bi bi-person-plus-fill"></i>{" "}
                  {!isCollapsed && "Add Reference"}
                </Link>
              </li>
              <li>
                <Link to="/View-preference">
                  <i className="bi bi-person-lines-fill"></i>{" "}
                  {!isCollapsed && "View Reference"}
                </Link>
              </li>
            </ul>
          </li>

          {/* User Management */}
          <li>
            <div onClick={() => toggleDropdown("Management")}>
              <Link to="#">
                <i className="bi bi-person-gear"></i>{" "}
                {!isCollapsed && "User Management"}
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Management" ? "open" : ""}`}>
              <li>
                <Link to="/staff-report">
                  <i className="bi bi-clipboard-data-fill"></i>{" "}
                  {!isCollapsed && "Staff Report"}
                </Link>
              </li>
              <li>
                <Link to="/user-manager">
                  <i className="bi bi-person-badge-fill"></i>{" "}
                  {!isCollapsed && "User Manager"}
                </Link>
              </li>
            </ul>
          </li>

          {/* Proposal */}
          <li>
            <div onClick={() => toggleDropdown("Proposal")}>
              <Link to="#">
                <i className="bi bi-envelope-paper-fill"></i>{" "}
                {!isCollapsed && "Proposal"}
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Proposal" ? "open" : ""}`}>
              <li>
                <Link to="/AssignPackage">
                  <i className="bi bi-arrow-right-circle-fill"></i>{" "}
                  {!isCollapsed && "Assign Proposal"}
                </Link>
              </li>
              <li>
                <Link to="/package-manager">
                  <i className="bi bi-archive-fill"></i>{" "}
                  {!isCollapsed && "Proposal Manager"}
                </Link>
              </li>
            </ul>
          </li>

          {/* Logout */}
          <li>
            <div>
              <Link to="/logout">
                <i className="bi bi-box-arrow-right"></i>{" "}
                {!isCollapsed && "Logout"}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
