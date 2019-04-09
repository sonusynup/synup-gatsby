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

const ref = React.createRef()

class Header extends React.Component {
  state = {
    activeExpandedNavItem: "",
    isMenuExpanded: false,
    scrollBarFixed: false,
    activeResource: "Ebooks",
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
    const { announcementMessage, announcementUrl } = this.props
    const filterItemsByGroup = group =>
      this.props.data.allContentfulWebpage.edges.filter(
        edge => edge.node.navbarGroup === group
      )
    const withAnnouncementClass =
      !isNull(announcementMessage) && !isNull(announcementUrl)
        ? "with-announcement"
        : null
    return (
      <>
        {!isNull(announcementMessage) && !isNull(announcementUrl) ? (
          <TargetLink to={announcementUrl}>
            <div className="annoucement_bar primary_bg">
              <div className="container">
                <p
                  className="annoucement_pre"
                  dangerouslySetInnerHTML={{ __html: announcementMessage }}
                />
              </div>
            </div>
          </TargetLink>
        ) : null}

        <header
          ref={ref}
          className={`navbar ${withAnnouncementClass} navbar-toggleable-sm ${
            this.state.scrollBarFixed ? "header--fixed active" : "header--fixed"
          } `}
          id="header"
        >
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
