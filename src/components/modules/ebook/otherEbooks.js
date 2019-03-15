import React from 'react'
import { Link } from 'gatsby'

import ContentHoverActionImage from '../../images/svgComponents/contentHoverActionImage'
import Button from '../../atoms/Buttons';

const OtherEbooks = ({
  latestBooksLimited
}) => (
  <section className="ebook">
    <div className="container">
      <div className="ebook_other">
        <h3>Other Ebooks</h3>
        <div className="ebook_wrapper">
          <div className="ebook_lists">
            {
              latestBooksLimited.reverse().map((ebook) => (
                <Link to={`/resources/ebook/${ebook.node.id}`} className="ebook_anchor">
                  <div className="overlay_content">
                    <div className="content-overlay"></div>
                      <figure>
                        <img
                          src={ebook.node.bookCoverImage.file.url}
                          className="img_fluid"
                          alt=""
                        />
                      </figure>
                    <div className="content-details">
                      <ContentHoverActionImage />
                    </div>
                  </div>
                </Link>  
              ))
            }  
          </div>
            <Link to={'/resources/ebooks'}><Button type="secondary" text="VIEW ALL EBOOKS"> </Button></Link>
        </div>
      </div>
    </div>
  </section>
)

export default OtherEbooks