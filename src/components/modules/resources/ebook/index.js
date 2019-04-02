import React from "react"
import Button from '../../../atoms/button'
import { Link } from "gatsby";

import ContentHoverActionImage from "../../../images/svgComponents/contentHoverActionImage"

const Ebook = (props) =>  (
    
<section class="ebook">
  <div class="container">
    <div class="ebook_other">
        <h3>other Ebooks</h3>
        <div class="ebook_wrapper">
        <div class="ebook_lists">
          {props.ebookData.edges.map (Ebook => (
            <Link to ="/modules/ebook" className="ebook_anchor">
              <div class="overlay_content">
                <div class="content-overlay"></div>
                  <figure>
                    <img src={Ebook.node.bookCoverImage.file.url} class="img_fluid" alt="" />
                  </figure>
                  <div class="content-details">
                    <ContentHoverActionImage />
                  </div>
              </div>
            </Link>
          ))}
        </div>
          <Link to ="/resources/ebooks">
            <Button type="secondary" text="VIEW ALL EBOOKS" />
          </Link>
        </div>
      </div>
    </div>
</section>
)

export default Ebook