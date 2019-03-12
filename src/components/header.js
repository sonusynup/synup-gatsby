import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="navbar navbar-toggleable-sm header--fixed" id="header">
    <div className="container">
      <h1>
        <a className="navbar-brand js-scroll-trigger" rel="home" href="index.html" title="brand-name" />
        <svg className="desktop-view" width="96px" height="32px" viewBox="0 0 96 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
      </h1>
      <button
        className="navbar-toggler btn-nav_toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
      </button>
      <nav id="navbarNavDropdown" className="collapse navbar-collapse">
        <ul id="main-menu" className="navbar-nav">
          <li><a href="agency.html" className="js-scroll-trigger nav-link">SOLUTIONS</a></li>
          <li><a href="locations-product.html" className="js-scroll-trigger nav-link">PRODUCTS</a></li>
          <li><a href="ebook-download.html" className="js-scroll-trigger nav-link">RESOURCES</a></li>
          <li><a href="case-study.html" className="js-scroll-trigger nav-link">CUSTOMERS</a></li>
          <li><a href="webinar-register.html" className="js-scroll-trigger nav-link">COMPANY</a></li>
        </ul>
      </nav>
      <div className="header_btnwrap">
        <a href="single-location.html" className="btn_link btn_signin">SIGN IN</a>
        <a className="btn btn_primary btn_arrow" href="guide-template.html" role="button">
          <span className="btn_textSpan">
            GET STARTED
            <svg 
              width="15px" 
              height="18px" 
              viewBox="0 0 15 18" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg" 
              xlinkHref="http://www.w3.org/1999/xlink"
            >
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
      </div>
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
