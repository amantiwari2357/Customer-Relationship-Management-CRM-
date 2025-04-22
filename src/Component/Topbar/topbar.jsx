import React from "react";
import './topbar.css'
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="topbar-search">
        <input type="search" placeholder="search..." name="search" />
      </div>
      <div className="d-flex gap-2">
        <div className="topbarIcon1">
          <i onClick={(()=>navigate("/notification"))} className="bi bi-bell"></i>
        </div>
        <div className="topbarIcon2">
          <i onClick={(()=>navigate('/admin-profile'))} class="bi bi-person-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
