import React from "react";
import { useNavigate } from "react-router-dom";
import './topbar.css';

const Topbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <div className="d-flex gap-3 align-items-center">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </div>

        {/* Search */}
        <div className="topbar-search">
          <input type="search" placeholder="Search..." name="search" />
        </div>
      </div>

      {/* Icons */}
      <div className="d-flex gap-2">
        <div className="topbarIcon1">
          <i onClick={() => navigate("/notification")} className="bi bi-bell"></i>
        </div>
        <div className="topbarIcon2">
          <i onClick={() => navigate("/admin-profile")} className="bi bi-person-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
