import React from 'react'

import networks from '../../../images/svg/network.svg'

const Features = () => (
  <section className="section_network">
    <div className="container">
      <div className="blockWrapper">
          <div className="network_wrapper">
              <h3>Synup Premium Network</h3>
              <p className="network_text">Whether your business has 1 or 1000 locations, managing multiple
                  clients, we are here to
                  help managing multiple clients. Whether your business has 1 or 1000 locations, managing
                  multiple clients, we are
                  here to help managing multiple clients.</p>
              <button className="btn btn_primary  btn_arrow">
                  <span className="btn_textSpan">see our network<svg width="15px" height="18px" viewBox="0 0 15 18"
                          version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="UI/Components/Buttons/PrimaryBig/hover" transform="translate(-119.000000, -15.000000)"
                                  fill="#FFFFFF">
                                  <g id="Arrow/white" transform="translate(119.000000, 15.000000)">
                                      <polygon id="Rectangle-Copy-2" opacity="0.305966332" points="-1.33226763e-14 0 9.52941176 9 -1.33226763e-14 18"></polygon>
                                      <polygon id="Rectangle-Copy-3" points="5.29411765 0 14.8235294 9 5.29411765 18"></polygon>
                                  </g>
                              </g>
                          </g>
                      </svg>
                  </span>
              </button>
          </div>
          <div className="rightBlock">
              <figure><img src={networks} className="img_fluid" alt="" /></figure>
          </div>
        </div>
    </div>
  </section>
)

export default Features