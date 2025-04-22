import React, { useState } from "react";
import "./AdminProfile.css";  
import image from "../../Images/admin-profile.jpeg";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    username: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+91 22335588",
    address: "32/4 Rohini, Delhi",
  });

  const [newPassword, setNewPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [editProfile, setEditProfile] = useState({
    username: profile.username,
    email: profile.email,
    phone: profile.phone,
    address: profile.address,
  });

  // Handle changes in profile form
  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setEditProfile({
      ...editProfile,
      [name]: value,
    });
  };

  // Handle changes in password form
  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  // Handle saving the profile
  const handleSaveProfile = () => {
    setProfile(editProfile);
    alert("Profile updated successfully!");
  };

  // Handle saving the password
  const handleSavePassword = () => {
    if (newPassword.newPassword === newPassword.confirmPassword) {
      alert("Password changed successfully!");
      setNewPassword({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <>
      <section className="admin-profile">
        <div className="container">
          <h2 className="section-title">Admin Profile</h2>
          <div className="row align-items-center profile-container">
            {/* Profile Image */}
            <div className="col-md-2 text-center">
              <img
                src={image}
                alt="Profile"
                className="profile-img shadow-sm rounded-circle"
              />
            </div>

            {/* Profile Details */}
            <div className="col-md-6">
              <div className="profile-details">
                <p>
                  <strong>Name:</strong> {profile.username}
                </p>
                <p>
                  <strong>Phone:</strong> {profile.phone}
                </p>
                <p>
                  <strong>Email:</strong> {profile.email}
                </p>
                <p>
                  <strong>Address:</strong> {profile.address}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="col-md-4 text-end">
              {/* Change Password Button */}
              <button
                className="all-buttons mb-2"
                data-bs-toggle="modal"
                data-bs-target="#changePasswordModal"
              >
                Change Password &nbsp;
                <i className="bi bi-key-fill"></i>
              </button>
              <br />

              {/* Edit Profile Button */}
              <button
                className="all-buttons"
                data-bs-toggle="modal"
                data-bs-target="#editProfileModal"
              >
                Edit Profile &nbsp;
                <i className="bi bi-pencil-fill"></i>
              </button>
            </div>
          </div>
        </div>

        <hr />
        {/* Attendance Table */}
        <div className="admin-profile-table mt-4">
          <div className="container">
            <h4 className="section-subtitle">Attendance</h4>
            <table className="table table-bordered table-hover attendance-table">
              <thead className="admin-table">
                <tr>
                  <th>Date</th>
                  <th>Log in Time</th>
                  <th>Log out Time</th>
                  <th>Total Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09/12/2024</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>08/12/2024</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>07/12/2024</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>06/12/2024</td>
                  <td>9:00 AM</td>
                  <td>5:00 PM</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Edit Profile Modal */}
      <div
        className="modal fade"
        id="editProfileModal"
        tabIndex="-1"
        aria-labelledby="editProfileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content admin-profile-modal">
            <div className="modal-header modal-header-costom">
              <h5 className="modal-title" id="editProfileModalLabel">
                Edit Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={editProfile.username}
                    onChange={handleChangeProfile}
                    placeholder="Enter username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={editProfile.email}
                    onChange={handleChangeProfile}
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={editProfile.phone}
                    onChange={handleChangeProfile}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    name="address"
                    id="address"
                    value={editProfile.address}
                    onChange={handleChangeProfile}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="all-buttons"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="all-buttons"
                onClick={handleSaveProfile}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <div
        className="modal fade"
        id="changePasswordModal"
        tabIndex="-1"
        aria-labelledby="changePasswordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content admin-profile-modal">
            <div className="modal-header modal-header-costom">
              <h5 className="modal-title" id="changePasswordModalLabel">
                Change Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="currentPassword"
                    className="form-label"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    name="currentPassword"
                    value={newPassword.currentPassword}
                    onChange={handleChangePassword}
                    placeholder="Enter current password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword.newPassword}
                    onChange={handleChangePassword}
                    placeholder="Enter new password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={newPassword.confirmPassword}
                    onChange={handleChangePassword}
                    placeholder="Confirm new password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="all-buttons"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="all-buttons"
                onClick={handleSavePassword}
              >
                Save Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
