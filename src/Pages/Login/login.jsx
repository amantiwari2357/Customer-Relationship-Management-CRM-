import React from "react";
import "./login.css";
import loginImage from "../../Images/login-Image.png";
import logo from "../../Images/logo.png";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="login_overlay"></div>
        <div className="login_card">
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <img src={logo} className="login_logo" alt="Login Logo" />
              </div>
              <div className="login-form-section">
                <p>Fill up the below form to get access to our Site</p>
                <form action="">
                  <div className="login-form-field">
                    <label htmlFor="Username / Email">Username / Email</label>
                    <input type="text" className="inputfield" name="userName" />
                  </div>
                  <div className="login-form-field">
                    <label htmlFor="piojkolassword">Password</label>
                    <div className="password-field">
                      <input
                        type="password"
                        className="inputfield"
                        name="userName"
                      />
                    <button className="login-btn">
                      <i class="bi bi-arrow-right-circle"></i>
                    </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={loginImage}
                className="img-fluid w-100"
                alt="Login Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
