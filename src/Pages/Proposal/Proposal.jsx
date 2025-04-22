import React, { useState } from "react";
import "./proposal.css";

const Proposal = () => {
  const [elitePlans, setElitePlans] = useState([
    {
      name: "Elite",
      price: "₹501",
      duration: "3 months",
    },
    {
      name: "Elite",
      price: "₹2100",
      duration: "6 months",
    },
    {
      name: "Elite",
      price: "₹5100",
      duration: "12 months",
    },
    {
      name: "Elite",
      price: "₹5100",
      duration: "12 months",
    },
  ]);
  const [personalisedPlans, setPersonalisedPlans] = useState([
    {
      name: "Personalized",
      price: "₹501",
      duration: "Access to 50 profiles",
    },
    {
      name: "Personalized",
      price: "₹2100",
      duration: "Access to 80 profiles",
    },
    {
      name: "Personalized",
      price: "₹5100",
      duration: "Access to 120 profiles",
    },
  ]);

  const [newProposal, setNewProposal] = useState({
    proposalType: "",
    price: "",
    duration: "",
    totalDuration: "",
    features: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProposal({
      ...newProposal,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProposal.proposalType === "Elite") {
      setElitePlans([
        ...elitePlans,
        {
          name: newProposal.proposalType,
          price: newProposal.price,
          duration: newProposal.totalDuration,
        },
      ]);
    } else if (newProposal.proposalType === "Personalized") {
      setPersonalisedPlans([
        ...personalisedPlans,
        {
          name: newProposal.proposalType,
          price: newProposal.price,
          duration: newProposal.totalDuration,
        },
      ]);
    }
    // Reset the form after submission
    setNewProposal({
      proposalType: "",
      price: "",
      duration: "",
      totalDuration: "",
      features: "",
    });
  };

  return (
    <section className="proposal">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mb-3">Membership Packages</h2>

          <button
            className="proposal-add-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Create Proposal <i className="bi bi-patch-plus"></i>
          </button>

          {/* Modal for Adding Custom Proposal */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{
                    backgroundColor: "rgb(130, 38, 49)",
                    color: "white",
                  }}
                >
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Customize Proposal
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body p-3">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="proposalType" className="form-label">
                            Proposal Type:
                          </label>
                          <select
                            className="form-select"
                            id="proposalType"
                            name="proposalType"
                            value={newProposal.proposalType}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="Elite">Elite</option>
                            <option value="Personalized">Personalized</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label">
                            Price:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="price"
                            name="price"
                            value={newProposal.price}
                            onChange={handleInputChange}
                            placeholder="Price"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="duration" className="form-label">
                            Duration:
                          </label>
                          <select
                            className="form-select"
                            id="duration"
                            name="duration"
                            value={newProposal.duration}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>

                      {/* Conditionally render fields based on duration */}
                      {newProposal.duration === "yes" && (
                        <>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="totalDuration"
                                className="form-label"
                              >
                                Total Duration:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="totalDuration"
                                name="totalDuration"
                                value={newProposal.totalDuration}
                                onChange={handleInputChange}
                                placeholder="1, 3, 6, 12, 24, 36, 48 months"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="profileGiven"
                                className="form-label"
                              >
                                Profile Given:
                              </label>
                              <select
                                className="form-control"
                                name="profileGiven"
                                onChange={handleInputChange}
                                value={newProposal.profileGiven}
                                id="profileGiven"
                              >
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="totalProfilesGiven"
                                className="form-label"
                              >
                                Total Profiles Given:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="totalProfilesGiven"
                                name="totalProfilesGiven"
                                value={newProposal.totalProfilesGiven}
                                onChange={handleInputChange}
                                placeholder="Enter Given Profile"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {/* Render Profile Given and Total Profiles Given if duration is "no" */}
                      {newProposal.duration === "no" && (
                        <>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="profileGiven"
                                className="form-label"
                              >
                                Profile Given:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="profileGiven"
                                name="profileGiven"
                                value={newProposal.profileGiven}
                                onChange={handleInputChange}
                                placeholder="1, 3, 6, 12, 24, 36, 48 profiles"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="totalProfilesGiven"
                                className="form-label"
                              >
                                Total Profiles Given:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="totalProfilesGiven"
                                name="totalProfilesGiven"
                                value={newProposal.totalProfilesGiven}
                                onChange={handleInputChange}
                                placeholder="1, 3, 6, 12, 24, 36, 48 profiles"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="features" className="form-label">
                          Features:
                        </label>
                        <textarea
                          className="form-control"
                          id="features"
                          name="features"
                          value={newProposal.features}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Add features"
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="proposal-add-btn">
                          Create Proposal
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Display Elite and Personalized Plans */}
        <div className="proposal-card">
          <div className="row">
            {elitePlans.map((plan, index) => (
              <div key={index} className="col-md-3">
                <div className="eliteCart">
                  <div className="text-center">
                    <h5 className="text-center">{plan.name}</h5>
                    <h4 className="proposal-price">{plan.price}</h4>
                    <p>
                      <i
                        style={{ color: "green", fontSize: "20px" }}
                        className="bi bi-check2-circle"
                      ></i>
                      Duration: {plan.duration}
                    </p>
                  </div>
                  <div>
                    <div className="text-center d-flex gap-3 justify-content-center">
                      <button
                        style={{
                          backgroundColor: "#fff",
                          color: "#822631",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Download
                      </button>
                      <button
                        style={{
                          backgroundColor: "#fff",
                          color: "#822631",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: "12px",
                          borderRadius: "4px",
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {personalisedPlans.map((plan, index) => (
              <div key={index} className="col-md-3">
                <div className="eliteCart">
                  <div className="text-center">
                    <h5 className="text-center">{plan.name}</h5>
                    <h4 className="proposal-price">{plan.price}</h4>
                    <p>
                      <i
                        style={{ color: "green", fontSize: "20px" }}
                        className="bi bi-check2-circle"
                      ></i>
                      Duration: {plan.duration}
                    </p>
                  </div>
                  <div>
                    <div className="text-center d-flex gap-3 justify-content-center">
                      <button
                        style={{
                          backgroundColor: "#fff",
                          color: "#822631",
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "4px",
                          fontSize: "12px",
                        }}
                      >
                        Download
                      </button>
                      <button
                        style={{
                          backgroundColor: "#fff",
                          color: "#822631",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: "12px",
                          borderRadius: "4px",
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
