import React from 'react'

import Button from '../../atoms/Buttons'

const resourceList = ['Ebooks', 'Webinars', 'Guides', 'Blog', 'Checklists', 'Free Tools', 'Case Study'];

// TODO: need borderless button component
const ResourcesNavGroup = () => (
  <li className="dropdown-accord">
    <a href="#" className="dropdown js-scroll-trigger nav-link">RESOURCES</a>
    <div className="dropdown-content accordion-content resource-content">
      <div className="resource-submenu arrow_box">
        <div className="tab-block">
          <div className="tabs-left">
            <ul className="nav nav-tabs nav-stacked">
              {
                resourceList.map((resource) => (
                <li>
                  <a href="#item-one" className="active" data-toggle="tab">
                    {resource}
                  </a>
                </li>  
              ))}
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active">
              <h3>Ebooks</h3>
              <Button 
                type="secondary"
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