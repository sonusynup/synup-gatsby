import React from 'react'

const HamburgerItem = ({
  onClick,
  isMenuExpanded
}) => (
  <button
    className={`navbar-toggler btn-nav_toggle ${isMenuExpanded ? '' : 'collapsed'}`}
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown1"
    aria-controls="navbarNavDropdown"
    aria-expanded={isMenuExpanded ? 'true' : 'false'}
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    <span className="icon-bar top-bar"></span>
    <span className="icon-bar middle-bar"></span>
    <span className="icon-bar bottom-bar"></span>
  </button>
)

export default HamburgerItem