// App.tsx or App.jsx

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Topbar from "./Component/Topbar/topbar";
import Dashboard from "./Pages/Dashboard/dashboard";
import Login from "./Pages/Login/login";

import AddClient from "./Pages/Client/AddClient/AddClient";
import ViewClient from "./Pages/Client/Viewclient/ViewClient";
import ClientReport from "./Pages/Client/ClientReport/ClientReport";
import ClientResponse from "./Pages/Client/ClientResponse/ClientResponse";
import EditClient from "./Pages/Client/Viewclient/EditClient";
import ShareClient from "./Pages/Client/Viewclient/ShareClient";
import Modal from "./Pages/Client/Viewclient/Modal";
import Testing from "./Pages/Client/Viewclient/Testing";

import AdminProfile from "./Pages/AdminProfile/AdminProfile";
import ShortlistProfile from "./Pages/Shortlist/ShortlistProfile";
import ApprovedProfile from "./Pages/Shortlist/ApprovedProfile";
import RejectProfile from "./Pages/Shortlist/RejectProfile";
import UserListed from "./Pages/Shortlist/UserListed";

import Notification from "./Pages/Notification/Notification";
import PDF from "./Pages/ClientPDF/PDF";
import ElitePdf from "./Pages/ClientPDF/ElitePdf";
import PersonalizePdf from "./Pages/ClientPDF/PersonalizePdf";

import AddLeads from "./Pages/Leads/AddLeads";
import AllLeads from "./Pages/Leads/AllLeads";

import AddTask from "./Pages/Task/AddTask";
import ViewTask from "./Pages/Task/ViewTask";

import StaffReport from "./Pages/UserManagement/StaffReport";
import UserManager from "./Pages/UserManagement/UserManager";
import EditUser from "./Pages/UserManagement/EditUser";

import ActivityLog from "./Pages/Settings/activity-log";
import AddReference from "./Pages/Settings/Add-Reference";
import ViewReferences from "./Pages/Settings/View-preference";

import PackageManager from "./Pages/Proposal/PackageManager";
import AddPackage from "./Pages/Proposal/AddPackage";
import AssignPackage from "./Pages/Proposal/AssignPackage";
import AssignPackageDetails from "./Pages/Proposal/AssignPackageDetails";

import UserProfilePage from "./Pages/Client/Viewclient/UserProfilePage";

import "./App.css";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className={`app-container ${isLoginPage ? "login-page" : ""}`}>
      {!isLoginPage && <Topbar />}
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/notification" element={<Notification />} />

          {/* Client Section */}
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/viewclient" element={<ViewClient />} />
          <Route path="/client-report" element={<ClientReport />} />
          <Route path="/client-response" element={<ClientResponse />} />
          <Route path="/Editclient" element={<EditClient />} />
          <Route path="/Shareclient" element={<ShareClient />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/testing" element={<Testing />} />

          {/* Shortlist Section */}
          <Route path="/shortlisted-profile" element={<ShortlistProfile />} />
          <Route path="/approved-profile" element={<ApprovedProfile />} />
          <Route path="/reject-profile" element={<RejectProfile />} />
          <Route path="/user-listed" element={<UserListed />} />

          {/* PDFs */}
          <Route path="/pdf" element={<PDF />} />
          <Route path="/elitepdf" element={<ElitePdf />} />
          <Route path="/personalizepdf" element={<PersonalizePdf />} />

          {/* Leads */}
          <Route path="/addLeads" element={<AddLeads />} />
          <Route path="/allLeads" element={<AllLeads />} />

          {/* Tasks */}
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/viewTask" element={<ViewTask />} />

          {/* User Management */}
          <Route path="/staffReport" element={<StaffReport />} />
          <Route path="/userManager" element={<UserManager />} />
          <Route path="/editUser" element={<EditUser />} />

          {/* Settings */}
          <Route path="/activity-log" element={<ActivityLog />} />
          <Route path="/add-reference" element={<AddReference />} />
          <Route path="/view-preference" element={<ViewReferences />} />

          {/* Proposal Packages */}
          <Route path="/package-manager" element={<PackageManager />} />
          <Route path="/addPackage" element={<AddPackage />} />
          <Route path="/assignPackage" element={<AssignPackage />} />
          <Route path="/assignPackageDetails" element={<AssignPackageDetails />} />

          <Route path="/UserProfilePage" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
