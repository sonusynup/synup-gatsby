import React from 'react'

import Button from '../../atoms/button'

const resourceList = ['Ebooks', 'Webinars', 'Guides', 'Blog', 'Checklists', 'Free Tools', 'Case Study'];

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
    <li className="dropdown-accord"
      onMouseEnter={onMouseEnterOrExit}
      onClick={onTapOnOrOff}
      onMouseLeave={onMouseEnterOrExit}
    >
      <span href="#" className="dropdown js-scroll-trigger nav-link">RESOURCES</span>
      <div className={`dropdown-content ${isExpanded ? 'active' : ''} accordion-content resource-content`}>
        <div className="resource-submenu arrow_box">
          <div className="tab-block">
            <div className="tabs-left">
              <ul className="nav nav-tabs nav-stacked">
                {
                  resourceList.map((resource) => (
                  <li key={resource}>
                    <a
                      onClick={onChangeActiveResource(resource)} 
                      data-toggle="tab"
                      className={`${activeResource === resource ? 'active' : ''}`}
                    >
                      {resource}
                    </a>
                  </li>  
                ))}
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane active">
                <h3>{activeResource}</h3>
                <Button 
                  type="borderless"
                  text="READ NOW"
                />
              </div>    
            </div>
          </div>
          <div className="tab-support">
            <a href="#">
              SUPPORT and product FAQ
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ResourcesNavGroup