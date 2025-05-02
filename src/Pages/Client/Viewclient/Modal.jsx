import React from 'react';
import './Modal.css';

const Modal = () => {
  const users = [
    { id: "7K7S34214", name: "Gourav", age: "22yr's", image: "/Images/user4.jpg" },
    { id: "7K7S34214", name: "Vishnu", age: "21yr's", image: "/images/user4.jpg" },
    { id: "7K7S34214", name: "Aman", age: "20yr's", image: "/images/user4.jpg" },
    { id: "7K7S34214", name: "Aman", age: "20yr's", image: "/images/user4.jpg" },
   
  ];

  return (
    <div className="modal-hover-wrapper">
      <div className="modal-trigger"></div>
      {/* Hover me to open modal */}

      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <h2>Modal Title</h2>
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
                  <a href="/client-response" className="response-btn" target='_blank'>Respond</a>
                  <a href="/ShareClient" className="resend-btn" target='_blank'>Resend</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
