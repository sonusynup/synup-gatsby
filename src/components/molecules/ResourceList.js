import React from 'react'
import { Link } from 'gatsby'
import ContentHoverActionImage from '../../components/images/svgComponents/contentHoverActionImage'
import Button from '../../components/atoms/Buttons'
import Layout from '../../components/layout'

const EachItem = ({
  heading,
  buttonText,
  to
}) => (
  <div className="blogWrapper_inner"  style={{ width: '800px', float: 'left', marginLeft: '30px', height: '240px' }}>
    <a href="#" className="blogcard_anchor">
      <p className="blogcard_text">
        {heading}
      </p>
      <Link
        to={to}
      >
        <Button type="secondary" text={buttonText} />
      </Link>
    </a>
  </div>
)

const ResourceList = ({
  resources
}) => (
  <Layout>
    <div className="ebook_wrapper">
      <div className="ebook_lists">
        {
          resources.map((resource) => (
            <Link to={resource.to} key={resource.to}>
              {
                resource.noImage ? (
                  <EachItem
                    heading={resource.title}
                    buttonText="VIEW"
                    to={resource.to}
                  />
                ) : (
                  <div className="overlay_content">
                    <div className="content-overlay">
                      <figure>
                        <img
                          src={resource.image}
                          className="image_fluid"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="content-details">
                      <ContentHoverActionImage />
                    </div>
                  </div>
                )
              }
            </Link>  
          ))
        }  
      </div>
    </div>
  </Layout>
)

export default ResourceList