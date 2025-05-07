import React from "react";
import "./Elite.css"; // Ensure this points to your CSS file correctly

const ElitePdf = () => {
  return (
    <section className="all-pdf-section">
      <div className="elite-pdf">
        {/* Section 1 */}
        <section className="elite-section1">
          <div className="eliteheader">
            <div className="logo">
              <img src="./logo.png" alt="Logo" />
            </div>
            <h1>We help you find your perfect life partner</h1>
          </div>
          <div className="elite-couple-image">
            <img src="./elite-couple-image.png" alt="Couple" />
          </div>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <a
              style={{ color: "rgb(26 29 32)", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.7knots7steps.com"
            >
              www.7knots7steps.com
            </a>
          </div>
        </section>

        {/* Section 2 */}
        <section className="elite-section2">
          <div className="elite-content">
            <p>
              Seven Knots Seven Steps Marriage Bureau, is a professionally managed Matrimonial company, catering to the
              requirements of a large number of people in India and abroad, maintaining an exclusive database of marriage
              prospects...
            </p>
          </div>
          <div className="elite-img2">
            <div className="background-line"></div>
            <img src="./elite-couple-image2.png" alt="Elite Image 2" />
          </div>
          <div className="elite-footer">
            <div style={{ textAlign: "center" }}>
              <a
                className="text-white text-decoration-none"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.7knots7steps.com"
              >
                www.7knots7steps.com
              </a>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="elite-section3">
          <div className="elite-content">
            <h2 className="text-center mb-3">What does Elite offer you?</h2>

            <h5>Elite Membership</h5>
            <p>Signing up for Elite service, you shall form a part of the exclusive and confidential group...</p>

            <h5>Dedicated Relationship Manager (RM)</h5>
            <p>A dedicated Relationship Manager will be at your service to handle all your qualms...</p>

            <h5>Personal Session by RM</h5>
            <p>Relationship manager will pay a visit to your home (Delhi/NCR) or arrange a remote session...</p>

            <img src="./best-wedding-dates.jpg" className="elite-offer-image" alt="Elite Offer" />

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                style={{ color: "rgb(26 29 32)", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.7knots7steps.com"
              >
                www.7knots7steps.com
              </a>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="elite-section4">
          <div className="elite-content">
            <h5>Exclusive Profile Creation</h5>
            <p>With the proper understanding of your profile, your exclusive matchmaking profile will be created...</p>

            <h5>Print Advertisement</h5>
            <p>A Matrimonial ad will be published in a newspaper, masking name/address, once during the tenure...</p>

            <h5>Handpicked Premium Matches</h5>
            <p>Expect 2-3 premium profiles weekly that meet your requirements...</p>

            <h5>Ice-breaking with Your Wish List</h5>
            <p>Experts will help initiate communication with profiles you are hesitant to approach...</p>

            <h5>Calls & Meeting Arrangements</h5>
            <p>RM will call selected elite members and try to fix meetings on your behalf...</p>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                style={{ color: "rgb(26 29 32)", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.7knots7steps.com"
              >
                www.7knots7steps.com
              </a>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="elite-section5">
          <div className="combine-image">
            <img src="./elite1.png" alt="Elite 1" />
            <img src="./elite2.png" alt="Elite 2" />
            <img src="./elite3.png" alt="Elite 3" />
          </div>
          <div className="elite-content">
            <h5>Kundli Matching</h5>
            <p>Complimentary Kundli matching with shortlisted profiles...</p>

            <h5>Weekly Feedback</h5>
            <p>Weekly feedback sessions from your RM...</p>

            <h4 style={{ margin: 0 }}>
              <b>For availing above services, you need to make the following payments:</b>
            </h4>

            <h5>Membership Fee:</h5>
            <ul style={{ margin: 0 }} className="list-unstyled">
              <li>Rs.21,000/- (50 profiles)</li>
              <li>Rs.31,000/- (80 profiles)</li>
              <li>Rs.81,000/- (120 profiles)</li>
            </ul>

            <h5>
              <b>Closure Fee:</b>
            </h5>
            <p>1% of the budget or Rs 3,00,000/- (whichever is higher) Payable at Roka Ceremony</p>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                style={{ color: "rgb(26 29 32)", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.7knots7steps.com"
              >
                www.7knots7steps.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ElitePdf;
