import React from "react";
import "./Divider.css";
import { FaUser, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

function Divider() {
  return (
    <div>
    <div class='inactiveLineTop'></div>
    <nav className="navmenu">
      <ul>
        <li>
          <FaLaptopCode class="circleIcon" color="white" size="35px" />
          <div class='verticalLine'></div>
        </li>
        <li>
          <FaUser class="circleIcon" color="white" size="35px" />
          <div class='inactiveLine'></div>
          </li>
        <li>
          <FaMobileAlt color="gray" class='inactiveIcon' size="35px" />
          <div class='inactiveLineBottom'></div>
        </li>
      </ul>
    </nav>
    </div>
  );
}
export default Divider;
