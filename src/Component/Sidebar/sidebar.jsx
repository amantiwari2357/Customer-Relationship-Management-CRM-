import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./sidebar.css";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDropdown = (dropdownName) => {
    setDropdown(dropdown === dropdownName ? null : dropdownName);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-container">
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
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "inherit",
              }}
              onClick={() => setIsSidebarOpen(false)}
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
            <DropdownItem
              label="Clients"
              icon="bi bi-people-fill"
              isOpen={dropdown === "clients"}
              toggle={() => toggleDropdown("clients")}
              links={[
                { to: "/Testing", icon: "bi bi-eye-fill", label: "View Clients" },
                { to: "/add-client", icon: "bi bi-person-plus-fill", label: "Add Client" },
                { to: "/client-report", icon: "bi bi-bar-chart-fill", label: "Client Report" },
              ]}
              closeDropdown={() => setDropdown(null)}
            />

            <DropdownItem
              label="Shortlist"
              icon="bi bi-check2-square"
              isOpen={dropdown === "shortlist"}
              toggle={() => toggleDropdown("shortlist")}
              links={[
                { to: "/shortlisted-profile", icon: "bi bi-person-check-fill", label: "Shortlisted Profiles" },
                { to: "/approved-profile", icon: "bi bi-patch-check-fill", label: "Approved Profiles" },
                { to: "/reject-profile", icon: "bi bi-x-circle-fill", label: "Rejected Profiles" },
              ]}
              closeDropdown={() => setDropdown(null)}
            />

            <DropdownItem
              label="Leads"
              icon="bi bi-person-square"
              isOpen={dropdown === "Leads"}
              toggle={() => toggleDropdown("Leads")}
              links={[
                { to: "/allLeads", icon: "bi bi-list-ul", label: "All Leads" },
                { to: "/addLeads", icon: "bi bi-plus-square-fill", label: "Add Leads" },
              ]}
              closeDropdown={() => setDropdown(null)}
            />

            <DropdownItem
              label="Tasks"
              icon="bi bi-list-task"
              isOpen={dropdown === "Tasks"}
              toggle={() => toggleDropdown("Tasks")}
              links={[
                { to: "/viewTask", icon: "bi bi-card-checklist", label: "View Tasks" },
                { to: "/addTask", icon: "bi bi-plus-circle-fill", label: "Add Tasks" },
              ]}
              closeDropdown={() => setDropdown(null)}
            />

            <DropdownItem
              label="Settings"
              icon="bi bi-gear-fill"
              isOpen={dropdown === "Settings"}
              toggle={() => toggleDropdown("Settings")}
              links={[
                { to: "/activity-log", icon: "bi bi-clock-history", label: "Manage Activity Log" },
                { to: "/Add-Reference", icon: "bi bi-person-plus-fill", label: "Add Reference" },
                { to: "/View-preference", icon: "bi bi-person-lines-fill", label: "View Reference" },
              ]}
              closeDropdown={() => setDropdown(null)}
            />

            <DropdownItem
              label="User Management"
              icon="bi bi-person-gear"
              isOpen={dropdown === "Management"}
              toggle={() => toggleDropdown("Management")}
              links={[
                { to: "/staffReport", icon: "bi bi-clipboard-data-fill", label: "Staff Report" },
                { to: "/userManager", icon: "bi bi-person-badge-fill", label: "User Manager" },
              ]}
              closeDropdown={() => setDropdown(null)}
            />

            <DropdownItem
              label="Proposal"
              icon="bi bi-envelope-paper-fill"
              isOpen={dropdown === "Proposal"}
              toggle={() => toggleDropdown("Proposal")}
              links={[
                { to: "/AssignPackage", icon: "bi bi-arrow-right-circle-fill", label: "Assign Proposal" },
                { to: "/package-manager", icon: "bi bi-archive-fill", label: "Proposal Manager" },
              ]}
              closeDropdown={() => setDropdown(null)}
            />

            <li>
              <Link to="/logout" onClick={() => setIsSidebarOpen(false)}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DropdownItem = ({ label, icon, isOpen, toggle, links, closeDropdown }) => (
  <li>
    <div onClick={toggle}>
      <Link to="#">
        <i className={icon}></i> {label}
      </Link>
    </div>
    <ul className={`dropdown ${isOpen ? "open" : ""}`}>
      {links.map(({ to, icon, label }) => (
        <li key={to}>
          <Link to={to} onClick={closeDropdown}>
            <i className={icon}></i> {label}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

export default Sidebar;
