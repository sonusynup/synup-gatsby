import React from 'react'

const MainProducts = () => (
  <section className="section_product">
    <div className="container">
    <div className="product_wrapper">
    <div className="product_description">
        <h4>
          Gain complete control over your business’ local marketing.
          Manage your online profiles, interactions, insights, and posts. 
          <span className="primary_text">
            All from one dashboard.
          </span>
        </h4>
      </div>
      <div className="popCard_wrapper">
        <div className="popCard">
          <a href="#">
          <div className="card_transparent">
              <div className="card_body">
                  <img className="card_imgTop" src="images/svg/pop-card-green.svg" alt="" />
                  <h5 className="card_title">ANALYTICS</h5>
                  <p className="card_text">Understand your customers better with profile, ranking,
                      and
                      review insights.
                  </p>
              </div>
              <div className="card_footer">
                <span className="btn_arrow linkText linkText_span">SEE ALL FEATURES<svg width="15px"
                        height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink">
                      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="UI/Components/Buttons/SecondaryBig/hover" transform="translate(-119.000000, -18.000000)"
                            fill="#4865FF">
                          <g id="Group-Copy-2" transform="translate(119.000000, 18.000000)">
                              <polygon id="Rectangle-Copy-2" opacity="0.305966332" points="0 0 9.64285714 9.10714286 0 18.2142857"></polygon>
                              <polygon id="Rectangle-Copy-3" points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"></polygon>
                          </g>
                        </g>
                      </g>
                    </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
)