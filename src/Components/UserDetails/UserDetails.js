import React from "react";
import "./UserDetails.css";

function UserDetails() {
    return (
        <div className="single_row">
            <div className="single_column">
              <div>
                <label className="form__label" for="gender">
                  Gender{" "}
                </label>
              </div>
              <div>
                <input
                  className="form__input"
                  type="text"
                  id="gender"
                  placeholder="Enter Gender"
                />
              </div>
            </div>
            <div className="single_column">
              <label className="form__label" for="country">
                Country{" "}
              </label>
              <input
                type="text"
                id="country"
                className="form__input"
                placeholder="Enter Country"
              />
            </div>
          </div>
    )}

    export default UserDetails; 