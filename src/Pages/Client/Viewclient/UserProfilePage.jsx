import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './UserProfilePage.css';

const userProfile = {
  clientName: 'Aman',
  gender: 'Male',
  caste: 'General',
  occupation: 'Engineer',
  mobileNumber: '1234567890',
  profileId: 'JD123',
  openForDivorce: 'No',
  country: 'India',
  state: 'DELHI',
  isNRI: 'Yes',
  city: 'Rithala',
  membershipStatus: 'Active',
  fromDate: '2024-01-01',
  toDate: '2025-01-01',
};

const UserProfilePage = () => {
  const profileRef = useRef(null);

  const downloadPDF = async () => {
    const input = profileRef.current;
    const buttonContainer = input.querySelector('.button-container');

    // Hide the export button before capturing
  if (buttonContainer) {
    buttonContainer.style.display = 'none';
  }


 const canvas = await html2canvas(input, {
    scale: 2, // increase quality by scaling (default is 1)
    useCORS: true, // allow cross-origin images if needed
    // logging: false,
    backgroundColor: null, // keep background transparent
  });

  // Show the export button again
  if (buttonContainer) {
    buttonContainer.style.display = 'block';
  }


  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');

     const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('user-profile.pdf');
};

  return (
    <div className="hover-profile-wrapper">
      <div className="hover-trigger"></div>   
      {/* view profile */}

      <div className="hover-profile-popup">
        <div className="profile-card" ref={profileRef}>
          <div className="profile-header">
            <h2 className="profile-title">
              Profile Of : {userProfile.clientName}
            </h2>
            <img src="/images/user4.jpg" alt="Profile" className="profile-image" />
          </div>
          <div className="profile-grid">
            {Object.entries(userProfile).map(([key, value]) => (
              <div key={key} className="profile-item">
                <label className="profile-label">
                  {key.replace(/([A-Z])/g, ' $1')}
                </label>
                <span className="profile-value">{value || '—'}</span>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button className="download-btn" onClick={downloadPDF}>
              Export To PDF 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
