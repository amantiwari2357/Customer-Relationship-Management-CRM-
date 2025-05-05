import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import "./UserProfilePage.css";

const PdfProfile = () => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const element = pdfRef.current;
    const opt = {
      margin: 0.5,
      filename: 'user_profile.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section className="pdfmain">
      <div className="client-pdf">
        {/* Header */}
        <div className="pdf-nav">
          <div className="pdf-nav-logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="pdf-nav-address">
            <p><b>Address:</b> J 30, Sainik Farms, New Delhi - 110062</p>
            <p><b>Phone:</b> <span>+91-9310353844</span>, <span>+91-8800719444</span></p>
            <p><b>Email:</b> <span>vijay@7knots7steps.com</span>, <span>vani@7knots7steps.com</span></p>
            <p><b>Website:</b>{" "}
              <a style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noopener noreferrer" href="https://7knots7steps.com/">
                https://7knots7steps.com/
              </a>
            </p>
          </div>
        </div>

        {/* Profile Body (Only this will be converted to PDF) */}
        <div className="pdf-body">
          <div className="inner-body-border" ref={pdfRef}>
            {/* Profile Header */}
            <div className="pdf-header">
              <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                <div className="pdf-header-profileImage">
                  <img src="/images/client1.png" alt="client profile" />
                </div>
                <div className="pdf-header-details">
                  {[
                    ["Name", "Gourav Panchal"],
                    ["Gender", "Male"],
                    ["DOB", "08-04-2000"],
                    ["Height", "5.6"],
                    ["Gotra", "Pitlera"],
                    ["Caste", "Baniya"],
                    ["Sub caste", "Baniya"],
                    ["Complexion", "Wheatish"],
                    ["Income", "5.6 LPA"],
                    ["Diet", "Vegetarian"],
                    ["Family Status", "Nuclear"],
                    ["Marital Status", "Single"],
                    ["Hobbies", "Travelling and Movies"],
                    ["Time of birth & Place", "03:35 AM Ghaziabad, Uttar Pradesh"]
                  ].map(([label, value]) => (
                    <div className="pdf-header-main" key={label}>
                      <label>{label}</label>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Occupation Details */}
            <div className="pdfHeading"><p>Occupation Details</p></div>
            <div className="pdf-body-bg">
              <div className="pdf-details-main"><b>Occupation:</b> <span>Business</span></div>
              <div className="pdf-details-main">
                <b>Occupation Details:</b> <span>
                  Businessman & Entrepreneur in Textiles, Real Estate, Retail, Artificial Lab Planting, Trading, etc.
                  Rental income from commercial properties in Turab Nagar & holding other properties including
                  agricultural land, residential as well as commercial properties.
                </span>
              </div>
              <div className="pdf-details-main">
                <b>Educational Information:</b>
                <ul>
                  <li>Bachelors of Business Administration: From Sharda University, Greater Noida</li>
                  <li>Strategical Management from University of Ljubljana, Slovenia, Europe</li>
                  <li>Masters of Business Administration (Non-regular): Amity University, Noida</li>
                  <li>Schooling Institution - Private School Passed Out</li>
                </ul>
              </div>
            </div>

            {/* Family Details */}
            <div className="pdfHeading"><p>Family Details</p></div>
            <div>
              <div className="pdf-details-main"><b>Father:</b> <span>Mr. Lokesh Goel</span></div>
              <div className="pdf-details-main"><b>Father Occupation Details:</b> <span>Business in Textiles, Biotech, and Trade</span></div>
              <div className="pdf-details-main"><b>Mother:</b> <span>Mrs. Priti Goel</span></div>
              <div className="pdf-details-main"><b>Siblings Details:</b> <span>---</span></div>
              <div className="pdf-details-main"><b>Residence:</b> <span>Ghaziabad, Uttar Pradesh</span></div>
            </div>

            {/* Other Details */}
            <div className="pdfHeading"><p>Other Details</p></div>
            <div>
              <div className="pdf-details-main"><b>House Status:</b> <span>Kothi</span></div>
              <div className="pdf-details-main"><b>Other Details:</b> <span>Younger Sister (Married), Jija Ji (From a reputed family in Delhi)</span></div>
            </div>

            {/* Partner Preferences */}
            <div className="pdfHeading"><p>Partner Preferences</p></div>
            <div className="pdf-details-main">
              <span>
                I am looking for an educated and understanding accommodative partner, who has a scientific bent of mind
                and has an independent way of thinking.
              </span>
            </div>

            {/* Other Photos */}
            <div className="pdfHeading"><p>Other Photos</p></div>
            <div className="pdf-details-main other-photos-section mb-5">
              {[...Array(4)].map((_, i) => (
                <img src="/images/client1.png" alt="pictures" key={i} />
              ))}
            </div>

            {/* Optional Footer */}
            <div className="pdf-footer">
              <b>*Note</b>
              <p className="m-0">WE ARE SENDING THIS BIODATA AS PER THE INFORMATION PROVIDED BY THE SAID PARTY.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Download Button */}
      <div className="download-btn-wrapper">
        <button className="pdf-download-btn" onClick={handleDownload}>
          <i className="bi bi-download"></i> Download PDF
        </button>
      </div>
    </section>
  );
};

export default PdfProfile;
