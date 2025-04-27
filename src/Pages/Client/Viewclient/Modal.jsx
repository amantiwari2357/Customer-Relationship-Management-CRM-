import React from 'react';
import './Modal.css'; // Import the CSS

const Modal = () => {
  // Dummy data (you can replace it dynamically later)
  const users = [
    { id: "7K7S34214", name: "Gourav", age: "17yr's", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: "7K7S34214", name: "Gourav", age: "17yr's", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: "7K7S34214", name: "Gourav", age: "17yr's", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: "7K7S34214", name: "Gourav", age: "17yr's", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: "7K7S34214", name: "Gourav", age: "17yr's", image: "https://randomuser.me/api/portraits/men/75.jpg" },
   
  ];

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Modal Title</h2>
        <button className="close-button">&times;</button>
      </div>

      <div className="modal-body">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <img src={user.image} alt={user.name} />
            <div className="card-info">
              <p>ID: ({user.id})</p>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </div>
            <div className="card-buttons">
              {/* Updated buttons with links */}
              <a href={"/client-response"} className="response-btn">Response</a>
              <a href={`/resend/${user.id}`} className="resend-btn">Resend</a>
            </div>
          </div>
        ))}
      </div>

      <div className="modal-footer">
        {/* <button className="close-footer-btn">Close</button> */}
        {/* <button className="save-footer-btn">Save changes</button> */}
      </div>
    </div>
  );
};

export default Modal;
