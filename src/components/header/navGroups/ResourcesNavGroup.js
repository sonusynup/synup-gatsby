import React from 'react'

import Button from '../../atoms/Buttons'

const resourceList = ['Ebooks', 'Webinars', 'Guides', 'Blog', 'Checklists', 'Free Tools', 'Case Study'];

// TODO: need borderless button component
const ResourcesNavGroup = ({
  onHover,
  onBlur,
  isHovered,
  onChangeActiveResource,
  activeResource,
}) => (
  <li className="dropdown-accord" onMouseOver={onHover} onMouseLeave={onBlur}>
    <a href="#" className="dropdown js-scroll-trigger nav-link">RESOURCES</a>
    <div className={`dropdown-content ${isHovered ? 'active' : ''} accordion-content resource-content`}>
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

export default ResourcesNavGroup