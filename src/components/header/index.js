import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'

import Button from '../atoms/Buttons'
import SynupLogo from '../../components/images/svgComponents/synupLogo';

import ResourcesNavGroup from './ResourcesNavGroup'
import SolutionNavGroup from './SolutionNavGroup'
import CompanyNavGroup from "./CompanyNavGroup";
import ProductNavGroup from "./ProductNavGroup";

// TODO: Refactor this as per new layout
const Header = ({ siteTitle }) => (
  <header className="navbar navbar-toggleable-sm" id="header">
    <div className="container">
      <h1>
        <Link to="/">
          <SynupLogo />
        </Link>
      </h1>
      {/* Why this */}
      <button
        className="navbar-toggler btn-nav_toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown1"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </button>
      <nav id="navbarNavDropdown1" className="collapse navbar-collapse">
        <ul id="main-menu1" className="navbar-nav">
          <SolutionNavGroup />
          <ProductNavGroup />
          <ResourcesNavGroup />
          <CompanyNavGroup />
          <li>
            <Link to="/" className="js-scroll-trigger nav-link">
              CUSTOMERS
            </Link>
          </li>
          <li>
            <Link to="/" className="btn_link btn_signin">
              SIGN IN
            </Link>
          </li>
          <li>
          <Link to="/">
            <Button
              type="primary"
              text="GET STARTED"
            />
          </Link>
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
