import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const users = [
    { id: "7K7S34214", name: "Gourav", age: "22yr's", image: "/Images/user4.jpg" },
    { id: "7K7S34214", name: "Vishnu", age: "21yr's", image: "/images/user4.jpg" },
    { id: "7K7S34214", name: "Aman", age: "20yr's", image: "/images/user4.jpg" },
    { id: "7K7S34214", name: "Aman", age: "20yr's", image: "/images/user4.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modal-hover-wrapper">
      <div className="modal-trigger"></div>

      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <h2>Modal Title</h2>
          </div>

          <div className="modal-body">
            {users.map((user, index) => (
              <div className="card" key={index}>
                <img
                  src={user.image}
                  alt={user.name}
                  onClick={() => handleImageClick(user.image)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-info">
                  <p>ID: ({user.id})</p>
                  <p>{user.name}</p>
                  <p>{user.age}</p>
                </div>
                <div className="card-buttons">
                  <a href="/client-response" className="response-btn" target='_blank' rel="noreferrer">Respond</a>
                  <a href="/ShareClient" className="resend-btn" target='_blank' rel="noreferrer">Resend</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Enlarged View" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default Modal;
