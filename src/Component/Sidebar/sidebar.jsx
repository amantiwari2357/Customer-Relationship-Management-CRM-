import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDropdown = (dropdownName) => {
    setDropdown(dropdown === dropdownName ? null : dropdownName);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`flex ${isSidebarOpen ? "" : "sidebar-closed"}`}>
      <div className={`sidebar ${isSidebarOpen ? "" : "closed"}`}>
        <div className="sidebar-header">
          <Link to="/" className="text-center">
            <img src={logo} className="logo" alt="dashboard logo" />
          </Link>
          <i
            className="fas fa-times close-btn"
            style={{
              cursor: "pointer",
              marginLeft: "auto",
              display: isSidebarOpen ? "none" : "block",
            }}
            onClick={toggleSidebar}
          ></i>
        </div>
        <h5
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/login"
            className={isActive("/login") ? "active" : ""}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <i className="bi bi-speedometer2"></i> Dashboard
          </Link>
          <i
            className="fas fa-bars open-btn"
            style={{
              cursor: "pointer",
              marginLeft: "auto",
              display: isSidebarOpen ? "block" : "none",
            }}
            onClick={toggleSidebar}
          ></i>
        </h5>

        <ul className="sidebar-menu">
          {/* Clients */}
          <li>
            <div onClick={() => toggleDropdown("clients")}>
              <Link to="#">
                <i className="bi bi-people-fill"></i> Clients
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "clients" ? "open" : ""}`}>
              <li>
                <Link to="/Testing" className={isActive("/Testing") ? "active" : ""}>
                  <i className="bi bi-eye-fill"></i> View Clients
                </Link>
              </li>
              <li>
                <Link to="/add-client" className={isActive("/add-client") ? "active" : ""}>
                  <i className="bi bi-person-plus-fill"></i> Add Client
                </Link>
              </li>
              <li>
                <Link to="/client-report" className={isActive("/client-report") ? "active" : ""}>
                  <i className="bi bi-bar-chart-fill"></i> Client Report
                </Link>
              </li>
            </ul>
          </li>

          {/* Shortlist */}
          <li>
            <div onClick={() => toggleDropdown("shortlist")}>
              <Link to="#">
                <i className="bi bi-check2-square"></i> Shortlist
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "shortlist" ? "open" : ""}`}>
              <li>
                <Link to="/shortlisted-profile" className={isActive("/shortlisted-profile") ? "active" : ""}>
                  <i className="bi bi-person-check-fill"></i> Shortlisted Profiles
                </Link>
              </li>
              <li>
                <Link to="/approved-profile" className={isActive("/approved-profile") ? "active" : ""}>
                  <i className="bi bi-patch-check-fill"></i> Approved Profiles
                </Link>
              </li>
              <li>
                <Link to="/reject-profile" className={isActive("/reject-profile") ? "active" : ""}>
                  <i className="bi bi-x-circle-fill"></i> Rejected Profiles
                </Link>
              </li>
            </ul>
          </li>

          {/* Leads */}
          <li>
            <div onClick={() => toggleDropdown("Leads")}>
              <Link to="#">
                <i className="bi bi-person-square"></i> Leads
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Leads" ? "open" : ""}`}>
              <li>
                <Link to="/allLeads" className={isActive("/allLeads") ? "active" : ""}>
                  <i className="bi bi-list-ul"></i> All Leads
                </Link>
              </li>
              <li>
                <Link to="/addLeads" className={isActive("/addLeads") ? "active" : ""}>
                  <i className="bi bi-plus-square-fill"></i> Add Leads
                </Link>
              </li>
            </ul>
          </li>

          {/* Tasks */}
          <li>
            <div onClick={() => toggleDropdown("Tasks")}>
              <Link to="#">
                <i className="bi bi-list-task"></i> Tasks
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Tasks" ? "open" : ""}`}>
              <li>
                <Link to="/viewTask" className={isActive("/viewTask") ? "active" : ""}>
                  <i className="bi bi-card-checklist"></i> View Tasks
                </Link>
              </li>
              <li>
                <Link to="/addTask" className={isActive("/addTask") ? "active" : ""}>
                  <i className="bi bi-plus-circle-fill"></i> Add Tasks
                </Link>
              </li>
            </ul>
          </li>

          {/* Settings */}
          <li>
            <div onClick={() => toggleDropdown("Settings")}>
              <Link to="#">
                <i className="bi bi-gear-fill"></i> Settings
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Settings" ? "open" : ""}`}>
              <li>
                <Link to="/activity-log" className={isActive("/activity-log") ? "active" : ""}>
                  <i className="bi bi-clock-history"></i> Manage Activity Log
                </Link>
              </li>
              <li>
                <Link to="/Add-Reference" className={isActive("/Add-Reference") ? "active" : ""}>
                  <i className="bi bi-person-plus-fill"></i> Add Reference
                </Link>
              </li>
              <li>
                <Link to="/View-preference" className={isActive("/View-preference") ? "active" : ""}>
                  <i className="bi bi-person-lines-fill"></i> View Reference
                </Link>
              </li>
            </ul>
          </li>

          {/* User Management */}
          <li>
            <div onClick={() => toggleDropdown("Management")}>
              <Link to="#">
                <i className="bi bi-person-gear"></i> User Management
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Management" ? "open" : ""}`}>
              <li>
                <Link to="/staffReport" className={isActive("/staffReport") ? "active" : ""}>
                  <i className="bi bi-clipboard-data-fill"></i> Staff Report
                </Link>
              </li>
              <li>
                <Link to="/userManager" className={isActive("/userManager") ? "active" : ""}>
                  <i className="bi bi-person-badge-fill"></i> User Manager
                </Link>
              </li>
            </ul>
          </li>

          {/* Proposal */}
          <li>
            <div onClick={() => toggleDropdown("Proposal")}>
              <Link to="#">
                <i className="bi bi-envelope-paper-fill"></i> Proposal
              </Link>
            </div>
            <ul className={`dropdown ${dropdown === "Proposal" ? "open" : ""}`}>
              <li>
                <Link to="/AssignPackage" className={isActive("/AssignPackage") ? "active" : ""}>
                  <i className="bi bi-arrow-right-circle-fill"></i> Assign Proposal
                </Link>
              </li>
              <li>
                <Link to="/package-manager" className={isActive("/package-manager") ? "active" : ""}>
                  <i className="bi bi-archive-fill"></i> Proposal Manager
                </Link>
              </li>
            </ul>
          </li>

          {/* Logout */}
          <li>
            <div onClick={() => toggleDropdown("logout")}>
              <Link to="#">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
