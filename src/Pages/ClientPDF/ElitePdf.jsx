import React from "react";
import "./elitePdf.css";
import html2pdf from "html2pdf.js"; // ✅ PDF Generator
import logo from "../../Images/logo.png";
import image from "../../Pages/ClientPDF/elite-couple-image.png";
import image2 from "../../Pages/ClientPDF/elite-couple-image2.png";
import image3 from "../../Pages/ClientPDF/best-wedding-dates.webp";
import elite1 from "../../Pages/ClientPDF/elite1.png";
import elite2 from "../../Pages/ClientPDF/elite2.png";
import elite3 from "../../Pages/ClientPDF/elite3.png";

const ElitePdf = () => {
  const downloadPDF = () => {
    const element = document.getElementById("elite-pdf-content");
    const opt = {
      margin: [0, 0, 0, 0], // No margins
      filename: "elite_membership_proposal.pdf",
      image: { type: "jpeg", quality: 1 }, // Max quality
      html2canvas: { scale: 3, useCORS: true }, // Higher scale for sharpness
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      {/* 🧾 PDF content to download */}
      <div className="elite-pdf" id="elite-pdf-content">
        <section className="elite-section1">
          <div className="eliteheader">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h1>We help you find your perfect life partner</h1>
          </div>
          <div className="elite-couple-image">
            <img src={image} className="w-100" alt="couple" />
          </div>
          <div className="text-center mt-3">
            <a target="_blank" href="https://www.7knots7steps.com" rel="noreferrer">
              www.7knots7steps.com
            </a>
          </div>
        </section>

        <section className="elite-section2">
          <div className="elite-content">
            <p>
              Seven Knots Seven Steps Marriage Bureau, is a professionally managed Matrimonial company...
            </p>
          </div>
          <div className="elite-img2">
            <div className="background-line"></div>
            <img src={image2} alt="elite-img-2" />
          </div>
          <div className="elite-footer text-center mt-3">
            <a
              className="text-white text-decoration-none"
              target="_blank"
              href="https://www.7knots7steps.com"
              rel="noreferrer"
            >
              www.7knots7steps.com
            </a>
          </div>
        </section>

        <section className="elite-section3">
          <div className="elite-content">
            <h2 className="text-center mb-3">What does Elite offer you?</h2>
            <h5>Elite Membership</h5>
            <p>
              Signing up for Elite service, you shall form a part of the exclusive and confidential group...
            </p>
            <h5>Dedicated Relationship Manager (RM)</h5>
            <p>...</p>
            <h5>Personal Session by RM</h5>
            <p>...</p>
            <img src={image3} className="elite-offer-image" alt="elite" />
            <div className="text-center mt-5">
              <a
                className="text-dark text-decoration-none"
                target="_blank"
                href="https://www.7knots7steps.com"
                rel="noreferrer"
              >
                www.7knots7steps.com
              </a>
            </div>
          </div>
        </section>

        <section className="elite-section4">
          <div className="elite-content">
            <h5>Exclusive Profile Creation</h5>
            <p>...</p>
            <h5>Print Advertisement...</h5>
            <p>...</p>
            <h5>Handpicked Premium Matches</h5>
            <p>...</p>
            <h5>Kindle ice-breaking dialogue</h5>
            <p>...</p>
            <h5>Making Calls & Fixing Meeting</h5>
            <p>...</p>
            <div className="text-center mt-5">
              <a
                className="text-dark text-decoration-none"
                target="_blank"
                href="https://www.7knots7steps.com"
                rel="noreferrer"
              >
                www.7knots7steps.com
              </a>
            </div>
          </div>
        </section>

        <section className="elite-section5">
          <div className="combine-image">
            <img src={elite1} alt="elite1" />
            <img src={elite2} alt="elite2" />
            <img src={elite3} alt="elite3" />
          </div>
          <div className="elite-content">
            <h5>Kundli Matching</h5>
            <p>...</p>
            <h5>Weekly Feedback Session</h5>
            <p>...</p>
            <h6><b>For availing above services you need to make the following payments:</b></h6>
            <h5>Membership Fee:</h5>
            <ul className="list-unstyled">
              <li>Rs.21,000/- (50 profiles)</li>
              <li>Rs.31,000/- (80 profiles)</li>
              <li>Rs.81,000/- (120 profiles)</li>
            </ul>
            <h5><b>Closure Fee:</b></h5>
            <p>1% of the budget or Rs 3,00,000/- (whichever is higher) Payable at Roka Ceremony</p>
            <div className="text-center mt-5">
              <a
                className="text-dark text-decoration-none"
                target="_blank"
                href="https://www.7knots7steps.com"
                rel="noreferrer"
              >
                www.7knots7steps.com
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 🔘 Button placed outside PDF content */}
      <div className="text-center my-5">
        <button className="elite-button" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </>
  );
};

export default ElitePdf;
