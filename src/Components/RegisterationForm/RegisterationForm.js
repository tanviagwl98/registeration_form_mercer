import React from "react";
import "./RegisterationForm.css";
import Username from "../Username/Username.js";
import UserDetails from "../UserDetails/UserDetails.js";
import Email from "../UserEmail/UserEmail.js";

function RegistrationForm() {
  return (
    <div className="formBox">
      <div className="topBar">
        <div className="highlight">1. Registeration Details</div>
      </div>
      <div className="form">
        <div className="form-body">
          <Email />
          <Username />
          <UserDetails />
        </div>
        <div class="space">
          <span className="muteText">Terms and Conditions<span className="star">*</span></span>
        </div>
        <div className="textContent">Consent</div>
        <div className="checkBox">
          <input type="checkbox" className="styleCheck" />
          <label class="spacing">
            By using our offerings and services, you are agreeing to the <span class="highlightText">Terms
            of Services</span> and <span class="highlightText">License Agreement</span> and understand that your use and
            access will be subject to the terms & conditions and <span class="highlightText">Privacy Notice </span>
             contained therein.
          </label>
        </div>
        <div className="buttonDiv">
          <button type="submit" className="buttonStyle">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default RegistrationForm;
