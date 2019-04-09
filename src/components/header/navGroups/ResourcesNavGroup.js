import React from "react"

import TargetLink from "../../atoms/targetLink"
import Button from "../../atoms/button"

// TODO: need borderless button component
const ResourcesNavGroup = ({
  onExpand,
  onClose,
  isExpanded,
  onChangeActiveResource,
  activeResource,
  ...props
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
                {props.resourceList.map(resource => (
                  <li key={resource.title} to={resource.link}>
                    <TargetLink
                      to={resource.link}
                      data-toggle="tab"
                      className={`${
                        activeResource === resource.title ? "active" : ""
                      }`}
                    >
                      {resource.title}
                    </TargetLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane active">
                <h3>{activeResource}</h3>
                <TargetLink
                  to={
                    props.resourceList.find(
                      resource => resource.title === activeResource
                    ).link
                  }
                >
                  <Button type="borderless" text="READ NOW" />
                </TargetLink>
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
