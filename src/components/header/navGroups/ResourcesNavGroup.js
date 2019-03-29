import React from "react"

import { Link } from 'gatsby'
import Button from "../../atoms/button"

const resourceList = [
  { title: 'Ebooks', link: '/resources/ebooks' },
  { title: 'Webinars', link: '/resources/webinars' },
  { title: 'Guides', link: '/resources/guides' },
  { title: 'Blog', link: '/resources/blogs' },
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
  console.log('active resource ', resourceList.find(resource => resource.title === activeResource).link)
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
                  <li key={resource.title} to={resource.link}>
                    <a
                      onClick={onChangeActiveResource(resource.title)}
                      data-toggle="tab"
                      className={`${
                        activeResource === resource.title ? "active" : ""
                      }`}
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane active">
                <h3>{activeResource}</h3>
                <Link to={resourceList.find(resource => resource.title === activeResource).link}>
                  <Button type="borderless" text="READ NOW" />
                </Link>
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
