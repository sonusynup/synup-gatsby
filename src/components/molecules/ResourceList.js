import React from 'react'
import { Link } from 'gatsby'
import ContentHoverActionImage from '../../components/images/svgComponents/contentHoverActionImage'

const ResourceList = ({
  resources
}) => (
  <div className="ebook_wrapper">
    <div className="ebook_lists">
      {
        resources.map((resource) => (
          <Link to={resource.to} className="ebook_anchor" key={resource.to}>
            <div className="overlay_content">
              <div className="content-overlay"></div>
                <figure>
                  {
                    resource.noImage ? <span>{resource.title}</span> : (
                      <img
                        src={resource.image}
                        className="img_fluid"
                        alt=""
                      />
                    )
                  }
                </figure>
              <div className="content-details">
                <ContentHoverActionImage />
              </div>
            </div>
          </Link>  
        ))
      }  
    </div>
  </div>
)

export default ResourceList