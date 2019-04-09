import React from "react"

const Header = ({ activeScreen }) => (
  <div className="tabs-center">
    <ul className="nav">
      <li>
        <a
          className={`flowStep ${
            activeScreen === "businessType" ? "active" : ""
          }`}
        >
          <span>SELECT YOUR BUSINESS TYPE</span>
        </a>
      </li>
      <li>
        <a
          className={`flowStep ${
            activeScreen === "businessDetails" ? "active" : ""
          }`}
        >
          <span>FILL IN YOUR BUSINESS DETAILS</span>
        </a>
      </li>
      <li>
        <a
          className={`flowStep ${activeScreen === "bookSlot" ? "active" : ""}`}
        >
          <span>BOOK A SLOT</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Header
