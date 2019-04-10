import React from "react"
import Button from "../../../atoms/button"
import TargetLink from "../../../atoms/targetLink"

import ContentHoverActionImage from "../../../images/svgComponents/contentHoverActionImage"

const Ebook = props => (
  <section className="ebook">
    <div className="container">
      <div className="ebook_other">
        <h3>other Ebooks</h3>
        <div className="ebook_wrapper">
          <div className="ebook_lists">
            {props.ebookData.edges.map((Ebook, index) => (
              <TargetLink to="/modules/ebook" className="ebook_anchor" key={index}>
                <div className="overlay_content">
                  <div className="content-overlay" />
                  <figure>
                    <img
                      
                      src={Ebook.node.bookCoverImage.file.url}
                      className="img_fluid"
                      alt=""
                    />
                  </figure>
                  <div className="content-details">
                    <ContentHoverActionImage />
                  </div>
                </div>
              </TargetLink>
            ))}
          </div>
          <TargetLink to="/resources/ebooks">
            <Button type="secondary" text="VIEW ALL EBOOKS" />
          </TargetLink>
        </div>
      </div>
    </div>
  </section>
)

export default Ebook
