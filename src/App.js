import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Component/Sidebar/sidebar";
import Topbar from "./Component/Topbar/topbar";
import Dashboard from "./Pages/Dashboard/dashboard";
import Login from "./Pages/Login/login";
import "./App.css";
// import ViewClient from "./Pages/Viewclient/ViewClient";
import AddClient from "./Pages/Client/AddClient/AddClient";
import AdminProfile from "./Pages/AdminProfile/AdminProfile";
import ShortlistProfile from "./Pages/Shortlist/ShortlistProfile";
import ApprovedProfile from "./Pages/Shortlist/ApprovedProfile";
import RejectProfile from "./Pages/Shortlist/RejectProfile";
import ViewClient from "./Pages/Client/Viewclient/ViewClient";
import ClientReport from "./Pages/Client/ClientReport/ClientReport";
import ClientResponse from "./Pages/Client/ClientResponse/ClientResponse";
import UserListed from "./Pages/Shortlist/UserListed";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Notification from "./Pages/Notification/Notification";
import PDF from "./Pages/ClientPDF/PDF";
import Proposal from "./Pages/Proposal/Proposal";
import ElitePdf from "./Pages/ClientPDF/ElitePdf";
import PersonalizePdf from "./Pages/ClientPDF/PersonalizePdf";
import AddLeads from "./Pages/Leads/AddLeads";
import AllLeads from "./Pages/Leads/AllLeads";
import AddTask from "./Pages/Task/AddTask";
import ViewTask from "./Pages/Task/ViewTask";
import StaffReport from "./Pages/UserManagement/StaffReport";
import UserManager from "./Pages/UserManagement/UserManager";
import EditUser from "./Pages/UserManagement/EditUser";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className={`app-container ${isLoginPage ? "login-page" : ""}`}>
      {!isLoginPage && <Sidebar />}
      <div className="main-container">
        {!isLoginPage && <Topbar />}

        {/* Center Content */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/notification" element={<Notification />} />
            {/* client section */}
            <Route path="/view-client" element={<ViewClient />} />
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/client-report" element={<ClientReport />} />
            <Route path="/client-response" element={<ClientResponse />} />
            {/* client section end */}
            {/* shortlisted section  */}
            <Route path="/shortlisted-profile" element={<ShortlistProfile />} />
            <Route path="/approved-profile" element={<ApprovedProfile />} />
            <Route path="/reject-profile" element={<RejectProfile />} />
            <Route path="/user-listed" element={<UserListed />} />
            <Route path="/proposal" element={<Proposal />} />

            <Route path="/pdf" element={<PDF />} />
            <Route path="/elitepdf" element={<ElitePdf />} />
            <Route path="/personalizepdf" element={<PersonalizePdf />} />
            <Route path="/addLeads" element={<AddLeads />} />
            <Route path="/allLeads" element={<AllLeads />} />
            <Route path="/addTask" element={<AddTask />} />
            <Route path="/viewTask" element={<ViewTask />} />
            <Route path="/staffReport" element={<StaffReport />} />
            <Route path="/userManager" element={<UserManager />} />
            <Route path="/editUser" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
