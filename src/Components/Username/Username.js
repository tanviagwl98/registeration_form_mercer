import React from "react";
import "./Username.css";

function Username() {
  return (
    <div class="single_row">
      <div className="single_column">
        <div>
          <label className="form__label" for="firstName">
            First Name{" "}<span class="star">*</span>
          </label>
        </div>
        <div>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="Enter First Name"
          />
        </div>
      </div>
      <div className="single_column">
        <label className="form__label" for="lastName">
          Last Name{" "}<span class="star">*</span>
        </label>
        <input
          type="text"
          name=""
          id="lastName"
          className="form__input"
          placeholder="Enter Last Name"
        />
      </div>
    </div>
  );
}

export default Username;
