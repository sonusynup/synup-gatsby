import PropTypes from "prop-types"
import React from "react"

import SynupLogo from '../../components/images/svgComponents/synupLogo';

// TODO: Refactor this as per new layout
const Header = ({ siteTitle }) => (
  <header className="navbar navbar-toggleable-sm header--fixed" id="header">
    <div className="container">
      <h1>
        <a
          className="navbar-brand js-scroll-trigger"
          rel="home"
          href="index.html"
          title="brand-name"
        />
        <SynupLogo />
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
              <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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
