import React from "react"

import TargetLink from "../../atoms/targetLink"
import Button from "../../atoms/button"
import isNull from '../../../helpers/isNull'

const ResourcesNavGroup = ({
  onExpand,
  onClose,
  isExpanded,
  onChangeActiveResource,
  featuredResources,
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

  const renderFeaturedResource = (type, resourceData) => {
    if (type === 'caseStudy') {
      return (!isNull(resourceData.caseStudy) && !isNull(resourceData.caseStudy.casestudyTitle)) ? (
        <TargetLink
          to={`/resources/casestudy/${resourceData.caseStudy.id}`}
        >
          <h3>{resourceData.caseStudy.casestudyTitle.casestudyTitle}</h3>
          <div>
            <Button type="borderless" text="READ NOW" />
          </div>
        </TargetLink>
      ) : null
    } else if (type === 'webinar') {
      
      return (
        !isNull(resourceData.webinar.id) && 
        !isNull(resourceData.webinar.webinarTitle) &&
        !isNull(resourceData.webinar.webinarCover)
      ) ? (
        <TargetLink
          to={`/resources/webinar/${resourceData.webinar.id}`}
        >
          <h3>{resourceData.webinar.webinarTitle}</h3>
          <div>
            <img src={resourceData.webinar.webinarCover.file.url} className="img_fluid" style={{ maxWidth: '100px '}} />
          </div>
          <div>
            <Button type="borderless" text="READ NOW" />
          </div>
        </TargetLink>
      ) : null
    } else if (type === 'ebooks') {
      return (
        <TargetLink
          to={`/resources/ebook/${resourceData.ebooks.id}`}
        >
          <h3>{resourceData.ebooks.bookTitle}</h3>
          <img src={resourceData.ebooks.bookCoverImage.file.url} className="img_fluid" style={{ maxWidth: '100px '}} />
          <div>
            <Button type="borderless" text="READ NOW" />
          </div>
        </TargetLink>
      )
    } else if (type === 'guides') {
      return (
        <TargetLink
          to={`/resources/guide/${resourceData.guides.id}`}
        >
          <h3>{resourceData.guides.guideTitle}</h3>
          <div>
            <img src={resourceData.guides.guideCover.file.url} className="img_fluid" style={{ maxWidth: '100px '}} />
          </div>
          <Button type="borderless" text="READ NOW" />
        </TargetLink>
      )
    }
  }
  return (
    <li
      className="dropdown-accord"
      onMouseEnter={onMouseEnterOrExit}
      onClick={onTapOnOrOff}
      onMouseLeave={onMouseEnterOrExit}
    >
      <span className={`dropdown js-scroll-trigger nav-link ${isExpanded ? "expanded" : ""}`}>RESOURCES</span>
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
                    >
                      {resource.title}
                    </TargetLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane active">
                {renderFeaturedResource(featuredResources.edges[0].node.activeFeatured, featuredResources.edges[0].node)}
              </div>
            </div>
          </div>
          <div className="tab-support">
            <TargetLink to="/support">SUPPORT and product FAQ</TargetLink>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ResourcesNavGroup
