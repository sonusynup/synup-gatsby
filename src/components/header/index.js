import PropTypes from "prop-types"
import React from "react"

import Button from "../atoms/button"
import TargetLink from "../atoms/targetLink"
import SynupLogo from "../../components/images/svgComponents/synupLogo"
import HamburgerIcon from "./navItem/HamburgerItem"

import ResourcesNavGroup from "./navGroups/ResourcesNavGroup"
import SolutionNavGroup from "./navGroups/SolutionNavGroup"
import CompanyNavGroup from "./navGroups/CompanyNavGroup"
import ProductNavGroup from "./navGroups/ProductNavGroup"
import isNull from "../../helpers/isNull"
import CloseIcon from "../images/svgComponents/CloseIcon"

const ref = React.createRef()

class Header extends React.Component {
  state = {
    activeExpandedNavItem: "",
    isMenuExpanded: false,
    scrollBarFixed: false,
    activeResource: "Ebooks",
    isAnnouncementVisible: true,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset === 0) {
      this.setState({
        scrollBarFixed: false,
      })
    } else {
      this.setState({
        scrollBarFixed: true,
      })
    }
  }

  toggleHamburgerMenu = () => {
    this.setState({
      isMenuExpanded: !this.state.isMenuExpanded,
    })
  }

  setActiveHoverNavItem = activeExpandedNavItem => {
    return e => {
      this.setState({
        activeExpandedNavItem,
      })
    }
  }

  onChangeActiveResource = activeResource => {
    return e => {
      this.setState({
        activeResource,
      })
    }
  }

  render() {
    const { isMenuExpanded } = this.state
    const {
      announcementMessage,
      announcementLink,
      announcementButtonText,
      announcementTheme,
      navbarSticky,
      announcementSticky,
      navbarTheme,
    } = this.props
    const filterItemsByGroup = group =>
      this.props.data.allContentfulWebpage.edges.filter(
        edge => edge.node.navbar && edge.node.navbar.navbarGroup === group
      )
    const withAnnouncementClass =
      !isNull(announcementMessage) &&
      !isNull(announcementLink) &&
      this.state.isAnnouncementVisible
        ? "with-announcement"
        : null
    let theme = ""
    if (navbarTheme === "full-dark") {
      theme = "secoundary-topbar"
    }
    if (navbarTheme === "minimal-light") {
      theme = "primary-topbar"
    }

    let announcementClass = 'announcement-blue-accent';

    if (announcementTheme === 'GreenAccent') {
      announcementClass = 'announcement-green-accent';
    }
    if (announcementTheme === 'RedAccent') {
      announcementClass = 'announcement-red-accent'
    }

    return (
      <>
        <header
          ref={ref}
          className={`navbar ${withAnnouncementClass} navbar-toggleable-sm ${
            this.state.scrollBarFixed ? "header--fixed active" : "header--fixed"
          } ${theme}`}
          id="header"
        >
          {!isNull(announcementMessage) &&
          !isNull(announcementLink) &&
          !isNull(announcementButtonText) &&
          !isNull(announcementSticky) &&
          this.state.isAnnouncementVisible ? (
            <>
              <TargetLink
                className={`announcementWrapper annoucement_bar ${announcementClass}`}
                to={announcementLink}
              >
                <div className="">
                  <p className="annoucement_pre">
                    <span className="label">{announcementButtonText}</span>
                    {announcementMessage}
                    <span
                      className="closeIcon"
                      onClick={() => {
                        console.log("clicked ")
                        this.setState({ isAnnouncementVisible: false })
                      }}
                    >
                      {" "}
                      <CloseIcon />{" "}
                    </span>
                  </p>
                </div>
              </TargetLink>
            </>
          ) : null}

          <div className="container">
            <h1>
              <TargetLink to="/">
                <SynupLogo />
              </TargetLink>
            </h1>
            <HamburgerIcon
              onClick={this.toggleHamburgerMenu}
              isMenuExpanded={isMenuExpanded}
            />
            <nav
              id="navbarNavDropdown1"
              className={
                isMenuExpanded
                  ? "collapse nav-collapse show"
                  : "collapse nav-collapse"
              }
            >
              <ul id="main-menu1" className="navbar-nav">
                <SolutionNavGroup
                  onExpand={this.setActiveHoverNavItem("solution")}
                  onClose={this.setActiveHoverNavItem("")}
                  isExpanded={this.state.activeExpandedNavItem === "solution"}
                  items={filterItemsByGroup("solutions")}
                />
                <ProductNavGroup
                  onExpand={this.setActiveHoverNavItem("product")}
                  onClose={this.setActiveHoverNavItem("")}
                  isExpanded={this.state.activeExpandedNavItem === "product"}
                  items={filterItemsByGroup("products")}
                />
                <ResourcesNavGroup
                  onExpand={this.setActiveHoverNavItem("resource")}
                  onClose={this.setActiveHoverNavItem("")}
                  isExpanded={this.state.activeExpandedNavItem === "resource"}
                  onChangeActiveResource={this.onChangeActiveResource}
                  activeResource={this.state.activeResource}
                  resourceList={this.props.resourceList}
                />
                <CompanyNavGroup
                  onExpand={this.setActiveHoverNavItem("company")}
                  onClose={this.setActiveHoverNavItem("")}
                  isExpanded={this.state.activeExpandedNavItem === "company"}
                  companyList={this.props.companyList}
                />
                <li>
                  <TargetLink
                    to="/customers"
                    className="js-scroll-trigger nav-link"
                  >
                    CUSTOMERS
                  </TargetLink>
                </li>
                <li>
                  <TargetLink to="/sign-in" className="btn_link btn_signin">
                    SIGN IN
                  </TargetLink>
                </li>
                <li>
                  <TargetLink to="/cta" className="btn_full">
                    <Button type="primary" text="GET STARTED" />
                  </TargetLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
