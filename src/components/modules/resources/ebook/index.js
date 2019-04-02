import React from "react"
import Button from "../../../atoms/button"
import { Link } from "gatsby"

import ContentHoverActionImage from "../../../images/svgComponents/contentHoverActionImage"

const Ebook = props => (
  <section className="ebook">
    <div className="container">
      <div className="ebook_other">
        <h3>other Ebooks</h3>
        <div className="ebook_wrapper">
          <div className="ebook_lists">
            {props.ebookData.edges.map(Ebook => (
              <Link to="/modules/ebook" className="ebook_anchor">
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
              </Link>
            ))}
          </div>
          <Link to="/resources/ebooks">
            <Button type="secondary" text="VIEW ALL EBOOKS" />
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Ebook
