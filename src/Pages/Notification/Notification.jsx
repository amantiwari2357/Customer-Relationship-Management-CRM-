import React, { useState } from "react";
import "./Notification.css" ;
const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New User Registered",
      message: "A new user has registered on your website.",
      timestamp: "2024-12-31 10:00 AM",
      isRead: false,
    },
    {
      id: 2,
      title: "System Maintenance",
      message: "Scheduled system maintenance will take place at midnight.",
      timestamp: "2024-12-30 08:00 PM",
      isRead: true,
    },
    {
      id: 3,
      title: "Account Update",
      message: "Your account information has been successfully updated.",
      timestamp: "2024-12-29 02:00 PM",
      isRead: false,
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);

  const toggleReadStatus = (id) => {
    setNotifications((prevState) =>
      prevState.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: !notification.isRead }
          : notification
      )
    );
  };

  const handleDeleteNotification = (id) => {
    setNotifications((prevState) => prevState.filter((notification) => notification.id !== id));
  };

  const handleViewNotification = (notification) => {
    setSelectedNotification(notification);
    const modal = new window.bootstrap.Modal(document.getElementById('notificationModal'));
    modal.show();
  };

  return (
    <section className="notification-page">
      <div className="container">
        <h2 className="section-title text-center">Your Notifications</h2>

        <div className="notification-list">
          {notifications.length === 0 ? (
            <p className="text-center">No notifications available.</p>
          ) : (
            notifications.map((notification) => (
              <div
                className={`notification-item ${notification.isRead ? "read" : "unread"}`}
                key={notification.id}
                onClick={() => handleViewNotification(notification)}
              >
                <div className="notification-header">
                  <h5>{notification.title}</h5>
                  <span className="timestamp">{notification.timestamp}</span>
                </div>
                <p className="notification-message">{notification.message}</p>
                <div className="notification-footer">
                  <button
                    className="all-buttons"
                    onClick={(e) => { e.stopPropagation(); toggleReadStatus(notification.id); }}
                  >
                    {notification.isRead ? "Mark as Unread" : "Mark as Read"}
                  </button>
                  <button
                    className="all-buttons"
                    onClick={(e) => { e.stopPropagation(); handleDeleteNotification(notification.id); }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bootstrap Modal for detailed view */}
      <div className="modal fade" id="notificationModal" tabIndex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="notificationModalLabel">{selectedNotification?.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{selectedNotification?.message}</p>
              <p className="timestamp">{selectedNotification?.timestamp}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="all-buttons" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
