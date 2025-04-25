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
// import ViewClient from "./Pages/Client/Viewclient/ViewClient";
import ClientReport from "./Pages/Client/ClientReport/ClientReport";
import ClientResponse from "./Pages/Client/ClientResponse/ClientResponse";
import UserListed from "./Pages/Shortlist/UserListed";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Notification from "./Pages/Notification/Notification";
import PDF from "./Pages/ClientPDF/PDF";
// import Proposal from "./Pages/Proposal/Proposal";
import ElitePdf from "./Pages/ClientPDF/ElitePdf";
import PersonalizePdf from "./Pages/ClientPDF/PersonalizePdf";
import AddLeads from "./Pages/Leads/AddLeads";
import AllLeads from "./Pages/Leads/AllLeads";
import AddTask from "./Pages/Task/AddTask";
import ViewTask from "./Pages/Task/ViewTask";

import ActivityLog from "./Pages/Settings/activity-log";
import AddReference from "./Pages/Settings/Add-Reference";
import ViewReferences from "./Pages/Settings/View-preference";
import PackageManager from "./Pages/Proposal/PackageManager";
import AddPackage from "./Pages/Proposal/AddPackage";
import AssignPackage from "./Pages/Proposal/AssignPackage";
import AssignPackageDetails from "./Pages/Proposal/AssignPackageDetails";
import Testing from "./Pages/Client/Viewclient/Testing";
import EditClient from "./Pages/Client/Viewclient/EditClient";
import ShareClient from "./Pages/Client/Viewclient/ShareClient";


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
            {/* <Route path="/view-client" element={<ViewClient />} /> */}
            <Route path="/add-client" element={<AddClient />} />
            <Route path="/client-report" element={<ClientReport />} />
            <Route path="/client-response" element={<ClientResponse />} />
            {/* client section end */}
            {/* shortlisted section  */}
            <Route path="/shortlisted-profile" element={<ShortlistProfile />} />
            <Route path="/approved-profile" element={<ApprovedProfile />} />
            <Route path="/reject-profile" element={<RejectProfile />} />
            <Route path="/user-listed" element={<UserListed />} />

            {/* <Route path="/proposal" element={<Proposal />} /> */}


            <Route path="/pdf" element={<PDF />} />
            <Route path="/elitepdf" element={<ElitePdf />} />
            <Route path="/personalizepdf" element={<PersonalizePdf />} />
            <Route path="/addLeads" element={<AddLeads />} />
            <Route path="/allLeads" element={<AllLeads />} />
            <Route path="/addTask" element={<AddTask />} />
  
          <Route path="/viewTask" element={<ViewTask />} />
           <Route path="/activity-log" element={<ActivityLog />} />
            <Route path="/add-Reference" element={<AddReference />} />
            <Route path="/view-preference" element={<ViewReferences />} />
            <Route path="/package-manager" element={<PackageManager />} />
            <Route path="/addPackage" element={<AddPackage />} />
            <Route path="/assignPackage" element={<AssignPackage />} />
            <Route path="/assignPackageDetails" element={<AssignPackageDetails />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/EditClient" element={<EditClient />} />
            <Route path="/ShareClient" element={<ShareClient />} />
            

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
