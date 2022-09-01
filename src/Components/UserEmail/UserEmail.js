import React from "react";
import "./UserEmail.css";
import { FaRegAddressBook } from 'react-icons/fa';

function UserEmail() {
  return (
    <div className="email">
      <div class="email">
        <label className="form__label" for="email">
          Email Address{" "}<span class="star">*</span>
        </label>
      </div>
      <div>
        <input
          type="email"
          id="email"
          class="emailInput"
          placeholder="Enter Email Address"
        />
        <FaRegAddressBook class="iconInput"/>
      </div>
    </div>
  );
}

export default UserEmail;
