  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import './topbar.css';

  const Topbar = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const [isSidebarOpen] = useState(false);
    // const [searchQuery, setSearchQuery] = useState("");

    // const handleSearch = () => {
    //   const trimmedQuery = searchQuery.trim();
    //   if (trimmedQuery !== "") {
    //     navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`);
    //   }
    // };
    // const handleKeyPress = (e) => {
    //   if (e.key === "Enter") {
    //     handleSearch();
    //   }
    // };

    // const handleHamburgerClick = () => {
    //   toggleSidebar();           // Call parent's sidebar toggle
    //   setIsSidebarOpen(prev => !prev);  // Update local hamburger state
    // };


    return (
      
      <div className="topbar">
        {/* <Topbar toggleSidebar={toggleSidebar} />   ✅ correctly passing */}
      <div className="d-flex gap-3 align-items-center">
        {/* Hamburger Menu */}
        <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`} >
          <i className="bi bi-list"></i>
        </div>

          {/* Search */}
          <div className="topbar-search">
            <input type="search" placeholder="Search..." name="search" />
            {/* //  onChange={(e) => setSearchQuery(e.target.value)}
            //  onKeyDown={handleKeyPress} */}
            
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
