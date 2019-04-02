import React from "react"
import Button from "../../../atoms/button"
import Image from "../../../images/customerstatic.png"
import { Link } from "gatsby"

const CustomersBlock = props => (
  <section className="section_blog">
    <div className="container">
      <h3>Customer Stories</h3>
      <div className="blogWrapper blogWrapper_reverse">
        <div className="blogWrapper_img">
          <figure>
            Static image
            <img src={Image} className="img_fluid" alt="" />
          </figure>
        </div>
        <div className="blogWrapper_right">
          <div className="card_deck">
            <div className="blogWrapper_inner">
              <Link to={`resources/casestudy/${props.casestudyData.edges[0].node.id}`} className="blogcard_anchor">
                <p className="blogcard_text">
                  {
                    props.casestudyData.edges[0].node.casestudyTitle
                      .casestudyTitle
                  }
                </p>
                <Button type="borderlessArrow" text="READ STORY" />
              </Link>
            </div>
            <div className="blogWrapper_inner">
              <Link to={`resources/casestudy/${props.casestudyData.edges[1].node.id}`} className="blogcard_anchor">
                <p className="blogcard_text">
                  {
                    props.casestudyData.edges[1].node.casestudyTitle
                      .casestudyTitle
                  }
                </p>
                <Button type="borderlessArrow" text="READ STORY" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/resources/casestudies">
        <Button type="secondary" text="VIEW ALL STORIES" />
      </Link>
    </div>
  </section>
)

export default CustomersBlock
