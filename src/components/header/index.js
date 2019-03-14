import PropTypes from "prop-types"
import React from "react"

import SynupLogo from '../../components/images/svgComponents/synupLogo';

// TODO: Refactor this as per new layout
const Header = ({ siteTitle }) => (
  <header class="navbar navbar-toggleable-sm" id="header">
    <div class="container">
      <h1>
        <a class="navbar-brand js-scroll-trigger" rel="home" href="index.html" title="brand-name">
          <svg class="desktop-view" width="96px" height="32px" viewBox="0 0 96 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="UI/Topbars/Full-Light" transform="translate(-80.000000, -24.000000)" fill="#4865FF">
                      <g id="Group-2" transform="translate(72.000000, 16.000000)">
                          <g id="Group-3" transform="translate(8.000000, 8.000000)">
                              <text id="synup" font-family="Sailec" font-size="16" font-weight="800"
                                  line-spacing="14" letter-spacing="-0.400000006">
                                  <tspan x="40" y="24">SYNU</tspan>
                                  <tspan x="85.568" y="24">P</tspan>
                              </text>
                              <g id="Group-7">
                                  <path d="M14.0952381,3.80952381 C21.8798231,3.80952381 28.1904762,10.1201769 28.1904762,17.9047619 C28.1904762,25.6893469 21.8798231,32 14.0952381,32 L0,32 L0,17.9047619 C-9.53336716e-16,10.1201769 6.31065305,3.80952381 14.0952381,3.80952381 Z M14.0952381,22.8571429 C16.8303626,22.8571429 19.047619,20.6398864 19.047619,17.9047619 C19.047619,15.1696374 16.8303626,12.952381 14.0952381,12.952381 C11.3601136,12.952381 9.14285714,15.1696374 9.14285714,17.9047619 C9.14285714,20.6398864 11.3601136,22.8571429 14.0952381,22.8571429 Z"
                                      id="Combined-Shape"></path>
                                  <circle id="Oval-Copy-3" cx="28.5714286" cy="3.42857143" r="3.42857143"></circle>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
        </a>
      </h1>
      <button class="navbar-toggler btn-nav_toggle" type="button" data-toggle="collapse" data-target="#navbarNavDropdown1"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>
      </button>
      <nav id="navbarNavDropdown1" class="collapse navbar-collapse">
          <ul id="main-menu1" class="navbar-nav">
              <li class="dropdown-accord"><a href="#" class="dropdown js-scroll-trigger nav-link">SOLUTIONS</a>
                  <div class="dropdown-content accordion-content solutions-content">
                      <div class="solutions-submenu arrow_box">
                          <a href="#" class="flex-submenu">
                              <figure>
                                  <svg width="47px" height="80px" viewBox="0 0 47 80" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                      xlinkHref="http://www.w3.org/1999/xlink">
                                      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                          <g id="UI/Topbars/Nav/Solutions" transform="translate(-259.000000, -38.000000)">
                                              <g id="Group-8">
                                                  <g id="Group-3" transform="translate(260.000000, 39.000000)">
                                                      <g id="Front">
                                                          <g id="Group">
                                                              <g id="Group-5" class="solutionnav-icon" stroke="#060E3D">
                                                                  <ellipse id="Oval" cx="22.1356837" cy="21.8481446"
                                                                      rx="22.1356837" ry="21.8481446"></ellipse>
                                                                  <ellipse id="Oval" cx="22.1356837" cy="21.8481446"
                                                                      rx="9.64888778" ry="9.52355021"></ellipse>
                                                                  <path d="M0.797989231,22.3481446 L22.1356837,66.3704583 L43.4733782,22.3481446 L0.797989231,22.3481446 Z"
                                                                      id="Rectangle"></path>
                                                              </g>
                                                              <g class="solutionnav-icon" id="Group-5-Copy"
                                                                  opacity="0.19687035" transform="translate(0.941944, 1.909444)"
                                                                  fill="#060E3D">
                                                                  <path d="M36.0252611,38.8608861 L22.1356837,67.5168092 L8.24610635,38.8608861 C3.21694822,34.8558981 -1.07291953e-12,28.7228206 -1.07291953e-12,21.8481446 C-1.07291953e-12,9.78174752 9.91048318,3.69482223e-13 22.1356837,3.69482223e-13 C34.3608843,3.69482223e-13 44.2713675,9.78174752 44.2713675,21.8481446 C44.2713675,28.7228206 41.0544192,34.8558981 36.0252611,38.8608861 Z M22.1356837,31.3716948 C27.4646173,31.3716948 31.7845715,27.1078561 31.7845715,21.8481446 C31.7845715,16.5884331 27.4646173,12.3245944 22.1356837,12.3245944 C16.8067502,12.3245944 12.4867959,16.5884331 12.4867959,21.8481446 C12.4867959,27.1078561 16.8067502,31.3716948 22.1356837,31.3716948 Z"
                                                                      id="Combined-Shape"></path>
                                                              </g>
                                                          </g>
                                                          <g id="Shadow" class="solutionnav-icon" transform="translate(11.494910, 74.341028)">
                                                              <ellipse id="Oval" class="solutionnav-icon" stroke="#060E3D"
                                                                  cx="10.9278275" cy="1.85852569" rx="10.9278275"
                                                                  ry="1.85852569"></ellipse>
                                                              <ellipse id="Oval-Copy" class="solutionnav-icon"
                                                                  fill="#060E3D" opacity="0.203999256" cx="12.8283192"
                                                                  cy="2.78778853" rx="10.9278275" ry="1.85852569"></ellipse>
                                                          </g>
                                                      </g>
                                                  </g>
                                              </g>
                                          </g>
                                      </g>
                                  </svg>
                                </figure>
                                <h5>SINGLE - LOCATION BUSINESS</h5>
                                <p>Manage all your business locations and whatever comes here</p>
                              </a>
                              <a href="#" class="flex-submenu">
                                  <figure>
                                      <svg width="47px" height="80px" viewBox="0 0 47 80" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                          xlinkHref="http://www.w3.org/1999/xlink">
                                          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                              <g id="UI/Topbars/Nav/Solutions" transform="translate(-259.000000, -38.000000)">
                                                  <g id="Group-8">
                                                      <g id="Group-3" transform="translate(260.000000, 39.000000)">
                                                          <g id="Front">
                                                              <g id="Group">
                                                                  <g id="Group-5" class="solutionnav-icon" stroke="#060E3D">
                                                                      <ellipse id="Oval" cx="22.1356837" cy="21.8481446"
                                                                          rx="22.1356837" ry="21.8481446"></ellipse>
                                                                      <ellipse id="Oval" cx="22.1356837" cy="21.8481446"
                                                                          rx="9.64888778" ry="9.52355021"></ellipse>
                                                                      <path d="M0.797989231,22.3481446 L22.1356837,66.3704583 L43.4733782,22.3481446 L0.797989231,22.3481446 Z"
                                                                          id="Rectangle"></path>
                                                                  </g>
                                                                  <g class="solutionnav-icon" id="Group-5-Copy"
                                                                      opacity="0.19687035" transform="translate(0.941944, 1.909444)"
                                                                      fill="#060E3D">
                                                                      <path d="M36.0252611,38.8608861 L22.1356837,67.5168092 L8.24610635,38.8608861 C3.21694822,34.8558981 -1.07291953e-12,28.7228206 -1.07291953e-12,21.8481446 C-1.07291953e-12,9.78174752 9.91048318,3.69482223e-13 22.1356837,3.69482223e-13 C34.3608843,3.69482223e-13 44.2713675,9.78174752 44.2713675,21.8481446 C44.2713675,28.7228206 41.0544192,34.8558981 36.0252611,38.8608861 Z M22.1356837,31.3716948 C27.4646173,31.3716948 31.7845715,27.1078561 31.7845715,21.8481446 C31.7845715,16.5884331 27.4646173,12.3245944 22.1356837,12.3245944 C16.8067502,12.3245944 12.4867959,16.5884331 12.4867959,21.8481446 C12.4867959,27.1078561 16.8067502,31.3716948 22.1356837,31.3716948 Z"
                                                                          id="Combined-Shape"></path>
                                                                  </g>
                                                              </g>
                                                              <g id="Shadow" class="solutionnav-icon" transform="translate(11.494910, 74.341028)">
                                                                  <ellipse id="Oval" class="solutionnav-icon" stroke="#060E3D"
                                                                      cx="10.9278275" cy="1.85852569" rx="10.9278275"
                                                                      ry="1.85852569"></ellipse>
                                                                  <ellipse id="Oval-Copy" class="solutionnav-icon"
                                                                      fill="#060E3D" opacity="0.203999256" cx="12.8283192"
                                                                      cy="2.78778853" rx="10.9278275" ry="1.85852569"></ellipse>
                                                              </g>
                                                          </g>
                                                      </g>
                                                  </g>
                                              </g>
                                          </g>
                                      </svg>
                                  </figure>
                                  <h5>MULTI - LOCATION BUSINESS</h5>
                                  <p>Manage all your business locations and whatever comes here</p>
                              </a>
                              <a href="#" class="flex-submenu">
                                  <figure>
                                      <svg width="47px" height="80px" viewBox="0 0 47 80" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                          xlinkHref="http://www.w3.org/1999/xlink">
                                          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                              <g id="UI/Topbars/Nav/Solutions" transform="translate(-259.000000, -38.000000)">
                                                  <g id="Group-8">
                                                      <g id="Group-3" transform="translate(260.000000, 39.000000)">
                                                          <g id="Front">
                                                              <g id="Group">
                                                                  <g id="Group-5" class="solutionnav-icon" stroke="#060E3D">
                                                                      <ellipse id="Oval" cx="22.1356837" cy="21.8481446"
                                                                          rx="22.1356837" ry="21.8481446"></ellipse>
                                                                      <ellipse id="Oval" cx="22.1356837" cy="21.8481446"
                                                                          rx="9.64888778" ry="9.52355021"></ellipse>
                                                                      <path d="M0.797989231,22.3481446 L22.1356837,66.3704583 L43.4733782,22.3481446 L0.797989231,22.3481446 Z"
                                                                          id="Rectangle"></path>
                                                                  </g>
                                                                  <g class="solutionnav-icon" id="Group-5-Copy"
                                                                      opacity="0.19687035" transform="translate(0.941944, 1.909444)"
                                                                      fill="#060E3D">
                                                                      <path d="M36.0252611,38.8608861 L22.1356837,67.5168092 L8.24610635,38.8608861 C3.21694822,34.8558981 -1.07291953e-12,28.7228206 -1.07291953e-12,21.8481446 C-1.07291953e-12,9.78174752 9.91048318,3.69482223e-13 22.1356837,3.69482223e-13 C34.3608843,3.69482223e-13 44.2713675,9.78174752 44.2713675,21.8481446 C44.2713675,28.7228206 41.0544192,34.8558981 36.0252611,38.8608861 Z M22.1356837,31.3716948 C27.4646173,31.3716948 31.7845715,27.1078561 31.7845715,21.8481446 C31.7845715,16.5884331 27.4646173,12.3245944 22.1356837,12.3245944 C16.8067502,12.3245944 12.4867959,16.5884331 12.4867959,21.8481446 C12.4867959,27.1078561 16.8067502,31.3716948 22.1356837,31.3716948 Z"
                                                                          id="Combined-Shape"></path>
                                                                  </g>
                                                              </g>
                                                              <g id="Shadow" class="solutionnav-icon" transform="translate(11.494910, 74.341028)">
                                                                  <ellipse id="Oval" class="solutionnav-icon" stroke="#060E3D"
                                                                      cx="10.9278275" cy="1.85852569" rx="10.9278275"
                                                                      ry="1.85852569"></ellipse>
                                                                  <ellipse id="Oval-Copy" class="solutionnav-icon"
                                                                      fill="#060E3D" opacity="0.203999256" cx="12.8283192"
                                                                      cy="2.78778853" rx="10.9278275" ry="1.85852569"></ellipse>
                                                              </g>
                                                          </g>
                                                      </g>
                                                  </g>
                                              </g>
                                          </g>
                                      </svg>
                                    </figure>
                                  <h5>MARKETING AGENCY</h5>
                                  <p>Manage all your business locations and whatever comes here</p>
                                </a>
                              </div>
                            </div>
                        </li>
                        <li class="dropdown-accord"><a href="#" class="dropdown js-scroll-trigger nav-link">PRODUCTS</a>
                            <div class="dropdown-content accordion-content product-content">
                                <div class="product-submenu arrow_box">
                                    <a href="#" class="flex-submenu">
                                        <figure>
                                            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xlinkHref="http://www.w3.org/1999/xlink">
                                                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="UI/Topbars/Nav/Products" class="square-black" transform="translate(-253.000000, -40.000000)"
                                                        stroke="#060E3D">
                                                        <g id="Group-10">
                                                            <g id="Group-9">
                                                                <g id="Group-Copy" transform="translate(33.000000, 40.000000)">
                                                                    <rect id="Rectangle-Copy-8" x="220.5" y="0.5" width="31"
                                                                        height="31" rx="4"></rect>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </figure>
                                        <h5>LOCATIONS</h5>
                                        <p>Manage all your business locations</p>
                                    </a>
                                    <a href="#" class="flex-submenu">
                                        <figure>
                                            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xlinkHref="http://www.w3.org/1999/xlink">
                                                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="UI/Topbars/Nav/Products" class="square-black" transform="translate(-253.000000, -40.000000)"
                                                        stroke="#060E3D">
                                                        <g id="Group-10">
                                                            <g id="Group-9">
                                                                <g id="Group-Copy" transform="translate(33.000000, 40.000000)">
                                                                    <rect id="Rectangle-Copy-8" x="220.5" y="0.5" width="31"
                                                                        height="31" rx="4"></rect>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </figure>
                                        <h5>LOCATIONS</h5>
                                        <p>Manage all your business locations</p>
                                    </a>
                                    <a href="#" class="flex-submenu">
                                        <figure>
                                            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xlinkHref="http://www.w3.org/1999/xlink">
                                                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="UI/Topbars/Nav/Products" class="square-black" transform="translate(-253.000000, -40.000000)"
                                                        stroke="#060E3D">
                                                        <g id="Group-10">
                                                            <g id="Group-9">
                                                                <g id="Group-Copy" transform="translate(33.000000, 40.000000)">
                                                                    <rect id="Rectangle-Copy-8" x="220.5" y="0.5" width="31"
                                                                        height="31" rx="4"></rect>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </figure>
                                        <h5>MANALYTICS</h5>
                                        <p>Manage all your business locations</p>
                                    </a>
                                    <a href="#" class="flex-submenu">
                                        <figure>
                                            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xlinkHref="http://www.w3.org/1999/xlink">
                                                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="squareBlack" class="square-black" transform="translate(-253.000000, -40.000000)"
                                                        stroke="#060E3D">
                                                        <g id="Group-10">
                                                            <g id="Group-9">
                                                                <g id="Group-Copy" transform="translate(33.000000, 40.000000)">
                                                                    <rect id="Rectangle-Copy-8" x="220.5" y="0.5" width="31"
                                                                        height="31" rx="4"></rect>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </figure>
                                        <h5>AGENCY TOOLS</h5>
                                        <p>Manage all your business locations</p>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown-accord"><a href="#" class="dropdown js-scroll-trigger nav-link">RESOURCES</a>
                            <div class="dropdown-content accordion-content resource-content">
                                <div class="resource-submenu arrow_box">
                                    <div class="tab-block">
                                        <div class="tabs-left">
                                            <ul class="nav nav-tabs nav-stacked">
                                                <li><a href="#item-one" class="active" data-toggle="tab">Ebooks</a></li>
                                                <li><a href="#item-two" data-toggle="tab">WEBINARS</a></li>
                                                <li><a href="#item-three" data-toggle="tab">GUIDES</a></li>
                                                <li><a href="#item-four" data-toggle="tab">Blog</a></li>
                                                <li><a href="#item-five" data-toggle="tab">CHECKLISTS</a></li>
                                                <li><a href="#item-six" data-toggle="tab">Free Tools</a></li>
                                                <li><a href="#item-seven" data-toggle="tab">Case Studies</a></li>
                                            </ul>
                                        </div>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="item-one">
                                                <h3>Ebooks</h3>
                                                <span class="btn_arrow linkText linkText_span">READ NOW<svg width="15px"
                                                        height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                        xlinkHref="http://www.w3.org/1999/xlink">
                                                        <g id="Symbols" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <g id="UI/Components/Buttons/SecondaryBig/hover" transform="translate(-119.000000, -18.000000)"
                                                                fill="#4865FF">
                                                                <g id="Group-Copy-2" transform="translate(119.000000, 18.000000)">
                                                                    <polygon id="Rectangle-Copy-2" opacity="0.305966332"
                                                                        points="0 0 9.64285714 9.10714286 0 18.2142857"></polygon>
                                                                    <polygon id="Rectangle-Copy-3" points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"></polygon>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <figure>
                                                    <img src="images/svg/pablo-downloading.svg" class="img_fluid" alt="" />
                                                </figure>
                                            </div>
                                            <div class="tab-pane" id="item-two">
                                                <h3>Webinars</h3>
                                                <p>sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit
                                                    amet
                                                    vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae.</p>
                                            </div>
                                            <div class="tab-pane" id="item-three">
                                                <h3>Guides</h3>
                                                <span class="btn_arrow linkText linkText_span">READ NOW<svg width="15px"
                                                        height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                        xlinkHref="http://www.w3.org/1999/xlink">
                                                        <g id="Symbols" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <g id="UI/Components/Buttons/SecondaryBig/hover" transform="translate(-119.000000, -18.000000)"
                                                                fill="#4865FF">
                                                                <g id="Group-Copy-2" transform="translate(119.000000, 18.000000)">
                                                                    <polygon id="Rectangle-Copy-2" opacity="0.305966332"
                                                                        points="0 0 9.64285714 9.10714286 0 18.2142857"></polygon>
                                                                    <polygon id="Rectangle-Copy-3" points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"></polygon>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <p>sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit
                                                    amet
                                                    vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae.</p>
                                            </div>
                                            <div class="tab-pane" id="item-four">
                                                <h3>Blog</h3>
                                                <p>ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan.
                                                    Aliquam
                                                    in felis sit amet augue.</p>
                                            </div>
                                            <div class="tab-pane" id="item-five">
                                                <h3>Checklists</h3>
                                                <span class="btn_arrow linkText linkText_span">READ NOW<svg width="15px"
                                                        height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                        xlinkHref="http://www.w3.org/1999/xlink">
                                                        <g id="Symbols" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <g id="UI/Components/Buttons/SecondaryBig/hover" transform="translate(-119.000000, -18.000000)"
                                                                fill="#4865FF">
                                                                <g id="Group-Copy-2" transform="translate(119.000000, 18.000000)">
                                                                    <polygon id="Rectangle-Copy-2" opacity="0.305966332"
                                                                        points="0 0 9.64285714 9.10714286 0 18.2142857"></polygon>
                                                                    <polygon id="Rectangle-Copy-3" points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"></polygon>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="tab-pane" id="item-six">
                                                <h3>Free Tools</h3>
                                                <span class="btn_arrow linkText linkText_span">READ NOW<svg width="15px"
                                                        height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                        xlinkHref="http://www.w3.org/1999/xlink">
                                                        <g id="Symbols" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <g id="UI/Components/Buttons/SecondaryBig/hover" transform="translate(-119.000000, -18.000000)"
                                                                fill="#4865FF">
                                                                <g id="Group-Copy-2" transform="translate(119.000000, 18.000000)">
                                                                    <polygon id="Rectangle-Copy-2" opacity="0.305966332"
                                                                        points="0 0 9.64285714 9.10714286 0 18.2142857"></polygon>
                                                                    <polygon id="Rectangle-Copy-3" points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"></polygon>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="tab-pane" id="item-seven">
                                                <h3>Case Study</h3>
                                                <span class="btn_arrow linkText linkText_span">READ NOW<svg width="15px"
                                                        height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                        xlinkHref="http://www.w3.org/1999/xlink">
                                                        <g id="Symbols" stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <g id="UI/Components/Buttons/SecondaryBig/hover" transform="translate(-119.000000, -18.000000)"
                                                                fill="#4865FF">
                                                                <g id="Group-Copy-2" transform="translate(119.000000, 18.000000)">
                                                                    <polygon id="Rectangle-Copy-2" opacity="0.305966332"
                                                                        points="0 0 9.64285714 9.10714286 0 18.2142857"></polygon>
                                                                    <polygon id="Rectangle-Copy-3" points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"></polygon>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-support">
                                        <a href="#">
                                            SUPPORT and product FAQ
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown-accord"><a href="#" class="dropdown js-scroll-trigger nav-link">COMPANY</a>
                            <div class="dropdown-content accordion-content company-content">
                                <div class="company-submenu arrow_box">
                                    <ul>
                                        <li><a href="#">ABOUT</a></li>
                                        <li><a href="#">PRESS</a></li>
                                        <li><a href="#">CAREERS</a></li>
                                        <li><a href="#">CONTACT</a></li>
                                        <li><a href="#">CUSTOMERS</a></li>
                                        <li><a href="#">SYNUP NETWORK</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="webinar-register.html" class="js-scroll-trigger nav-link">CUSTOMERS</a>
                        </li>
                        <li> <a href="single-location.html" class="btn_link btn_signin">SIGN IN</a>
                        </li>
                        <li> <a class="btn btn_primary btn_arrow" href="guide-template.html" role="button"><span class="btn_textSpan">GET
                                    STARTED<svg width="15px" height="18px" viewBox="0 0 15 18" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xlinkHref="http://www.w3.org/1999/xlink">
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
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
