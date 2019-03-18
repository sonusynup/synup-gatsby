import React from 'react'
import { Link } from 'gatsby'

const CompanyNavGroup = () => (
  <li className="dropdown-accord"><a href="#" className="dropdown js-scroll-trigger nav-link">COMPANY</a>
    <div className="dropdown-content accordion-content company-content">
      <div className="company-submenu arrow_box">
        <ul>
          <li><Link href="#">ABOUT</Link></li>
          <li><Link href="#">PRESS</Link></li>
          <li><Link href="#">CAREERS</Link></li>
          <li><Link href="#">CONTACT</Link></li>
          <li><Link href="#">CUSTOMERS</Link></li>
          <li><Link href="#">SYNUP NETWORK</Link></li>
        </ul>
      </div>
    </div>
  </li>
)

export default CompanyNavGroup