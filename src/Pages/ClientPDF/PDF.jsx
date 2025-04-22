import React from "react";
import logo from "../../Images/logo.png";
import "./pdf.css";
import profileImage from "../../Images/client1.png";
const PDF = () => {
  return (
    <>
      <section className="client-pdf">
        <div className="pdf-nav">
          <div className="pdf-nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="pdf-nav-address">
            <p>
              <b>Address:</b>&nbsp; J 30, Sainik Farms, New Delhi - 110062
            </p>
            <p>
              <b>Phone:</b>&nbsp; <span> +91-9310353844</span> ,
              <span>+91-8800719444</span>
            </p>
            <p>
              <b>Email:</b>&nbsp;
              <span>vijay@7knots7steps.com</span>,
              <span>vani@7knots7steps.com</span>
            </p>
            <p>
              <b>Website:</b>&nbsp;
              <a
                className="text-white text-decoration-none"
                target="_blank"
                href="https://7knots7steps.com/"
              >
                https://7knots7steps.com/
              </a>
            </p>
          </div>
        </div>
        <div className="pdf-header">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="pdf-header-profileImage">
                <img src={profileImage} alt="client profile image" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="pdf-header-details">
                <div className="pdf-header-main">
                  <label htmlFor="">Name</label>
                  <p>Gourav Panchal</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Gender</label>
                  <p>Male</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">DOB</label>
                  <p>08-04-2000</p>
                </div>

                <div className="pdf-header-main">
                  <label htmlFor="">Height</label>
                  <p>5.6</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Gotra</label>
                  <p>Pitlera</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Caste</label>
                  <p>Baniya</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Sub caste</label>
                  <p>Baniya</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Complexion</label>
                  <p>Wheatish</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Income</label>
                  <p>5.6 LPA</p>
                </div>

                <div className="pdf-header-main">
                  <label htmlFor="">Diet</label>
                  <p>Vegetarian</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Family Status</label>
                  <p>Nuclear</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Marital Status</label>
                  <p>Single</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Hobbies</label>
                  <p> Travelling and Movies</p>
                </div>
                <div className="pdf-header-main">
                  <label htmlFor="">Time of birth & Place</label>
                  <p>03:35 AM Ghaziabad, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pdf-body">
          <div className="inner-body-border">
            <div className="pdfHeading">
              <p>Occupation Details</p>
            </div>
            <div className="pdf-body-bg">
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Occupation:</b>
                </p>
                <span>Business</span>
              </div>
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Occupation Details:</b>
                </p>
                <span>
                  Businessman & Entrepreneur Textiles,Real
                  Estate,Retail,Artificial Lab Planting,Trading,etc, RENTAL
                  INCOME FROM COMMERCIAL PROPERTIES IN TURAB NAGAR & HOLDING
                  OTHER PROPERTIES INCLUDING AGRICULTURAL LAND,RESIDENTIAL AS
                  WELL AS COMMERCIAL PROPERTIES
                </span>
              </div>
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Educational Information :</b>
                </p>
                <ul>
                  <li>
                    Bachelors of Business Administration: From Sharda
                    University, Greater Noida 
                  </li>
                  <li>
                    Strategical Management from: University of Ljubljana,
                    Slovenia, Europe
                  </li>
                  <li>
                    Masters of Business Administration (Non regular): Amity
                    University, Noida, Uttar Prades
                  </li>
                  <li>Schooling Institution -Private School Passed Out</li>
                </ul>
              </div>
            </div>
            <div className="pdfHeading">
              <p>Family Details</p>
            </div>
            <div>
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Father:</b>
                </p>
                <span>Mr. Lokesh Goe</span>
              </div>
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Father Occupation Details:</b>
                </p>
                <span>
                  *N.G. Tex Print Private Limited, Kavi Nagar Industrial
                  Area,Ghaziabad * Balaji Traders, Nehru Nagar, Ghaziabad *
                  Three Leaf Biotech Limited, Village Noorpur, Ghaziaba
                </span>
              </div>

              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Mother:</b>
                </p>
                <span>Mrs. Priti Goel</span>
              </div>
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Siblings Details:</b>
                </p>
                <span>---</span>
              </div>
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Residence:</b>
                </p>
                <span>Kothi in Ghaziabad,Uttar Pradesh in City Centre</span>
              </div>
            </div>
          </div>

          <div className="inner-body-border">
            <div className="pdfHeading">
              <p>Other Details</p>
            </div>
            <div className="pdf-body-bg">
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>House Status:</b>
                </p>
                <span>Kothi</span>
              </div>
              <div className="pdf-details-main">
                <p className="m-0">
                  <b>Other Details:</b>
                </p>
                <span>
                  Younger Sister (Married), Jija Ji (From reputed family in
                  Delhi), Younger Brother(Unmarried,Businessman)
                </span>
              </div>
              <div className="pdfHeading">
                <p>Partner Preferences</p>
              </div>
              <div className="pdf-details-main">
                <span>
                  I am looking for an educated and understanding accommodative
                  partner, who has a scientific bent of mind and has an
                  independent way of thinking
                </span>
              </div>
              <div className="pdfHeading">
                <p>Other Photos</p>
              </div>
              <div className="pdf-details-main">
                <div className="other-photos-section mb-5">
                  <img src={profileImage} alt="pictures" />
                  <img src={profileImage} alt="pictures" />
                  <img src={profileImage} alt="pictures" />
                  <img src={profileImage} alt="pictures" />
                </div>
              </div>
            </div>
          </div>
          <div className="elephantImage"></div>
        </div>
        <div className="pdf-footer">
          <b>*Note</b>
          <p className="m-0">
            WE ARE SENDING THIS BIODATA AS PER THE INFORMATION PROVIDED BY THE
            SAID PARTY, WE ARE NOT RESPONSIBLE FOR ANY MISREPRESENTATION OF ALL
            OR ANY OF THE FACTS GIVEN ABOVE{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default PDF;
