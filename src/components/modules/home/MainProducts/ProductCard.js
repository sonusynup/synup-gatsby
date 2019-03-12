import React from 'react'
import PopGreenCard from '../../../images/svg/pop-card-green.svg'
const ProductCard = ({
  title,
  description,
  action
}) => (
  <div className="popCard">
    <a href="#"></a>
      <div className="card_transparent">
        <div className="card_body">
          <img className="card_imgTop" src={PopGreenCard} alt="" />
          <h5 className="card_title">{title}</h5>
          <p className="card_text">
            {description}
          </p>
        </div>
          <div className="card_footer">
            <span className="btn_arrow linkText linkText_span">
              {action}
              <svg width="15px"
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
  </div>
)

export default ProductCard