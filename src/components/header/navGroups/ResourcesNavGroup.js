import React from "react"

import { Link } from 'gatsby'
import Button from "../../atoms/button"

const resourceList = [
  { title: 'Ebooks', link: '/resources' },
  { title: 'Webinars', link: '/resources' },
  { title: 'Guides', link: '/resources' },
  { title: 'Blog', link: '/resources' },
  { title: 'Checklists', link: '/resources/checklists' },
  { title: 'Free Tools', link: '/resources/free-tools' },
  { title: 'Case Study', link: '/resources/case-study' }
]

// TODO: need borderless button component
const ResourcesNavGroup = ({
  onExpand,
  onClose,
  isExpanded,
  onChangeActiveResource,
  activeResource,
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
    <li
      className="dropdown-accord"
      onMouseEnter={onMouseEnterOrExit}
      onClick={onTapOnOrOff}
      onMouseLeave={onMouseEnterOrExit}
    >
      <span href="#" className="dropdown js-scroll-trigger nav-link">
        RESOURCES
      </span>
      <div
        className={`dropdown-content ${
          isExpanded ? "active" : ""
        } accordion-content resource-content`}
      >
        <div className="resource-submenu arrow_box">
          <div className="tab-block">
            <div className="tabs-left">
              <ul className="nav nav-tabs nav-stacked">
                {resourceList.map(resource => (
                  <Link key={resource.title} to={resource.link}>
                    <li
                      onClick={onChangeActiveResource(resource.title)}
                      data-toggle="tab"
                      className={`${
                        activeResource === resource.title ? "active" : ""
                      }`}
                    >
                      {resource.title}
                    </li>
                  </Link>
                  
                ))}
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane active">
                <h3>{activeResource}</h3>
                <Button type="borderless" text="READ NOW" />
              </div>
            </div>
          </div>
          <div className="tab-support">
            <a href="#">SUPPORT and product FAQ</a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ResourcesNavGroup
