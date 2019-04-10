import React from "react"

import SynupLogo from "../images/svgComponents/synupLogo"
import FacebookImage from "../images/svgComponents/FacebookImage"
import LinkedInImage from "../images/svgComponents/LinkedInImage"
import TwitterImage from "../images/svgComponents/TwitterImage"
import InstagramImage from "../images/svgComponents/InstagramImage"
import TargetLink from "../atoms/targetLink"

const socialIcons = [
  { title: LinkedInImage, link: "www.linkedin.com" },
  { title: FacebookImage, link: "www.facebook.com" },
  { title: TwitterImage, link: "www.twitter.com" },
  { title: InstagramImage, link: "www.facebook.com" },
]

class PrimaryFooter extends React.Component {
  state = {
    activeFooterClicked: null
  }

  changeDropdown = (activeFooterClicked) => {
    this.setState({
      activeFooterClicked
    })
  }

  render() {
    const {
      data,
      resourceList,
      companyList
    } = this.props;

    const filterItemsByGroup = group =>
      data.allContentfulWebpage.edges.filter(
        edge => edge.node.navbar.navbarGroup === group
      )

    return (
      <div className="footer_primary">
        <div className="container footer_wrapper">
          <div className="footer_linksWrapper">
            <h5 className="footer_linksheading" onClick={() => { console.log('clicked'); this.changeDropdown('root') }}>
              <TargetLink to="/">
                <SynupLogo />
              </TargetLink>
            </h5>
            <ul className={`dropdown-menu ${this.state.activeFooterClicked === 'root' ? 'active' : ''}`}>
              {companyList.map((section, index) => (
                <li key={index}>
                  <TargetLink to={section.link} className="footer_link">
                    {section.title}
                  </TargetLink>
                </li>
              ))}
            </ul>
            <ul className="socialicon_wrapper">
              {socialIcons.map((icon, index) => (
                <li className="socialIcon" key={index}>
                  <TargetLink to={icon.link}>
                    <icon.title />
                  </TargetLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_linksWrapper">
            <h5 className="footer_linksheading" onClick={() => { this.changeDropdown('products') }}>PRODUCTS</h5>
            <ul className={`dropdown-menu ${this.state.activeFooterClicked === 'products' ? 'active' : ''}`}>
              {filterItemsByGroup("products")
                .sort(
                  (x, y) => x.node.navbar.navbarOrder - y.node.navbar.navbarOrder
                )
                .map((item, index) => (
                  <li key={index}>
                    <TargetLink
                      to={item.node.webpageName}
                      className="footer_link"
                    >
                      {item.node.navbar.navbarTitle}
                    </TargetLink>
                  </li>
                ))}
            </ul>
          </div>
          <div className="footer_linksWrapper">
            <h5 className="footer_linksheading" onClick={() => { this.changeDropdown('resources') }}>RESOURCES</h5>
            <ul className={`dropdown-menu ${this.state.activeFooterClicked === 'resources' ? 'active' : ''}`}>
              {resourceList.map((resource, index) => (
                <li key={resource.title}>
                  <TargetLink to={resource.link} className="footer_link">
                    {resource.title}
                  </TargetLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_linksWrapper">
            <h5 className="footer_linksheading" onClick={() => { this.changeDropdown('compare') }}>COMPARE</h5>
            <ul className={`dropdown-menu ${this.state.activeFooterClicked === 'compare' ? 'active' : ''}`} onClick={() => { this.changeDropdown('compare') }}>
              <li>
                <TargetLink to="" className="footer_link">
                  Yext
                </TargetLink>
              </li>
              <li>
                <TargetLink to="" className="footer_link">
                  MozLocal
                </TargetLink>
              </li>
              <li>
                <TargetLink to="" className="footer_link">
                  Brightlocal
                </TargetLink>
              </li>
              <li>
                <TargetLink to="" className="footer_link">
                  Podium
                </TargetLink>
              </li>
              <li>
                <TargetLink to="" className="footer_link">
                  Godaddy
                </TargetLink>
              </li>
            </ul>
          </div>
          <div className="footer_linksWrapper">
            <h5 className="footer_linksheading" onClick={() => { this.changeDropdown('solutions') }}>SOLUTIONS</h5>
            <ul className={`dropdown-menu ${this.state.activeFooterClicked === 'solutions' ? 'active' : ''}`} onClick={() => { this.changeDropdown('solutions') }}>
              {filterItemsByGroup("solutions")
                .sort(
                  (x, y) => x.node.navbar.navbarOrder - y.node.navbar.navbarOrder
                )
                .map((item, index) => (
                  <li key={index}>
                    <TargetLink
                      to={item.node.webpageName}
                      className="footer_link"
                    >
                      {item.node.navbar.navbarTitle}
                    </TargetLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export default PrimaryFooter
