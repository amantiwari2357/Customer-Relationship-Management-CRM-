import React from "react";
import "./elitePdf.css";
import logo from "../../Images/logo.png";
import image from "../../Pages/ClientPDF/elite-couple-image.png";
import image2 from "../../Pages/ClientPDF/elite-couple-image2.png";
import image3 from "../../Pages/ClientPDF/best-wedding-dates.webp";
import elite1 from "../../Pages/ClientPDF/elite1.png";
import elite2 from "../../Pages/ClientPDF/elite2.png";
import elite3 from "../../Pages/ClientPDF/elite3.png";
const ElitePdf = () => {
  return (
    <>
      <div className="elite-pdf">
        <section className="elite-section1">
          <div className="eliteheader">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <h1>We help you find your perfect life partner</h1>
          </div>
          <div className="elite-couple-image">
            <img src={image} className="w-100" alt="couple image" />
          </div>
          <div className="text-center mt-3">
            <a target="_blank" href="www.7knots7steps.com">
              w w w . 7 k n o t s 7 s t e p s . c o m
            </a>
          </div>
        </section>

        <section className="elite-section2">
          <div className="elite-content">
            <p>
              Seven Knots Seven Steps Marriage Bureau, is a professionally
              managed Matrimonial company, catering to the requirements of a
              large number of people in India and abroad, maintaining an
              exclusive database of marriage prospects for providing customized
              service to its esteemed, HNI, Top Notched, Affluent, High profile
              clients based in India and Abroad. The team operates in harmony to
              deliver the best and bring as many people together as possible, to
              provide customized services to the different sections of
            </p>
          </div>
          <div className="elite-img2">
            <div className="background-line"></div>
            <img src={image2} alt="elite-img-2" />
          </div>
          <div className="elite-footer">
            <div className="text-center mt-3">
              <a
                className="text-white text-decoration-none"
                target="_blank"
                href="www.7knots7steps.com"
              >
                w w w . 7 k n o t s 7 s t e p s . c o m
              </a>
            </div>
          </div>
        </section>
        <section className="elite-section3">
          <div className="elite-content">
            <h2 className="text-center mb-3">What does Elite offer you?</h2>
            <h5>Elite Membership</h5>
            <p>
              Signing up for Elite service, you shall form a part of the
              exclusive and confidential group of elite members. It’s a premium
              database that is not accessible on site and is shared with other
              premium members only post authorization.
            </p>
            <h5>Dedicated Relationship Manager (RM)</h5>
            <p>
              A dedicated Relationship Manager will be at your service to handle
              all your qualms, from profile creation to searching outstanding
              profiles to arranging meetings and finally getting the match
              finalized
            </p>
            <h5>Personal Session by RM</h5>
            <p>
              Relationship manager will pay a visit to your home (applicable for
              members residing in Delhi/ NCR region ONLY) to have a better
              understanding of your profile and also the verification of
              necessary documents. For locations other than Delhi/NCR, a
              detailed “oncall” or “video” session will be arranged
            </p>
            <img src={image3} className="elite-offer-image" alt="elite image" />
            <div className="text-center mt-5">
              <a
                className="text-dark text-decoration-none"
                target="_blank"
                href="www.7knots7steps.com"
              >
                w w w . 7 k n o t s 7 s t e p s . c o m
              </a>
            </div>
          </div>
        </section>
        <section className="elite-section4">
          <div className="elite-content">
            <h5>Exclusive Profile Creation</h5>
            <p>
              With the proper understanding of your profile, your exclusive
              matchmaking profile will be created, to be shared with other
              relevant profiles.
            </p>
            <h5>Print Advertisement in Matrimonial section of Newspaper</h5>
            <p>
              7K7S will place a Matrimonial Classified Advertisement derived
              from your profile in newspaper or any other media masking the Name
              and Address. There will be a maximum of one ad in the entire
              tenure of 7K7S Elite service. *This will be at the sole discretion
              of 7K7S.
            </p>
            <h5>Handpicked Premium Matches</h5>
            <p>
              The Relationship Manager will endeavor to provide handpicked
              profile(s) as per your set partner preference subject to
              availability of profiles in Elite database. You can expect 2-3
              premium profiles every week, meeting your requirements.
            </p>
            <h5>Kindle ice-breaking dialogue with your own Wish List</h5>
            <p>
              If you have your own wish list but you are hesitant to approach
              them directly or are looking for an ice-breaker with them, our
              experts will help cut the first turf, working as a mediator to
              initiate the discussion and help set up the meeting.
            </p>
            <h5>Making Calls & Fixing Meeting</h5>
            <p>
              Relationship Manager will make calls and follow-up calls to the
              selected elite members and try to fix meetings with them on your
              behalf. www.7knots7steps.comKundli
            </p>
            <div className="text-center mt-5">
              <a
                className="text-dark text-decoration-none"
                target="_blank"
                href="www.7knots7steps.com"
              >
                w w w . 7 k n o t s 7 s t e p s . c o m
              </a>
            </div>
          </div>
        </section>
        <section className="elite-section5">
          <div className="combine-image">
            <img src={elite1} alt="comple imaeg" />
            <img src={elite2} alt="comple imaeg" />
            <img src={elite3} alt="comple imaeg" />
          </div>
          <div className="elite-content">
            <h5>Kundli Matching</h5>
            <p>
              Understanding the importance and need for Kundli matching in
              matrimony, Relationship manager will offer you complimentary
              Kundli matching with the Shortlisted Profiles (subject to
              availability of the details of both elite members)
            </p>
            <h5>Weekly Feedback Session</h5>
            <p>
              A weekly feedback session will be conducted by the Relationship
              manager to update you on the progress of your profile and profile
              management.
            </p>
            <h6>
              <b>
              For availing above services you need to make the following
              payments:
              </b>
            </h6>
            <h5>Membership Fee:</h5>
            <ul class="list-unstyled">
              <li>Rs.21,000/-(50 profiles)</li>
              <li>Rs.31,000/-(80 profiles)</li>
              <li>Rs.81,000/-(120 profiles)</li>
            </ul>
            <h5><b>Closure Fee:</b></h5>
            <p>
              1% of the budget or Rs 3,00,000/- (whichever is higher) Payable at
              Roka Ceremony
            </p>
            <div className="text-center mt-5">
              <a
                className="text-dark text-decoration-none"
                target="_blank"
                href="www.7knots7steps.com"
              >
                w w w . 7 k n o t s 7 s t e p s . c o m
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ElitePdf;
