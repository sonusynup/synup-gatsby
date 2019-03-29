import React from "react"
import { Link } from "gatsby"

const resourceList = [
  { title: 'About', link: '/about' },
  { title: 'Press', link: '/press' },
  { title: 'Careers', link: '/careers' },
  { title: 'Contact', link: '/contact' },
  { title: 'Customers', link: '/customers' },
  { title: 'Free Tools', link: '/free-tools' },
  { title: 'Synp Network', link: '/synp-network' }
]

const CompanyNavGroup = ({ onExpand, isExpanded, onClose }) => {
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
    <li
      className="dropdown-accord"
      onMouseEnter={onMouseEnterOrExit}
      onClick={onTapOnOrOff}
      onMouseLeave={onMouseEnterOrExit}
    >
      <span href="#" className="dropdown js-scroll-trigger nav-link">
        COMPANY
      </span>
      <div
        className={`dropdown-content ${
          isExpanded ? "active" : ""
        } accordion-content company-content`}
      >
        <div className="company-submenu arrow_box">
          <ul>
            {
              resourceList.map(resource => (
              <Link key={resource.title} to={resource.link}>
                <li
                  data-toggle="tab"
                >
                  {resource.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default CompanyNavGroup
