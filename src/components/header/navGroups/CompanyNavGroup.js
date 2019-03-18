import React from 'react'
import { Link } from 'gatsby'

const CompanyNavGroup = ({
  onExpand,
  isExpanded,
  onClose
}) => {
  const onMouseEnterOrExit = () => {
    if (window.outerWidth > 992) {
      isExpanded ? onClose() : onExpand()
    }
    
  }

  const onTapOnOrOff = () => {
    if (window.outerWidth <= 992) {
      isExpanded ? onClose() : onExpand()
    }
  }

  return (
    <li className="dropdown-accord"
      onMouseEnter={onMouseEnterOrExit}
      onClick={onTapOnOrOff}
      onMouseLeave={onMouseEnterOrExit}
    >
      <span href="#" className="dropdown js-scroll-trigger nav-link">COMPANY</span>
        <div className={`dropdown-content ${isExpanded ? 'active' : ''} accordion-content company-content`}>
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
}

export default CompanyNavGroup