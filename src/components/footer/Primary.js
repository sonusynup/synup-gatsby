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
const PrimaryFooter = ({ data, resourceList, companyList }) => {
  const filterItemsByGroup = group =>
    data.allContentfulWebpage.edges.filter(
      edge => edge.node.navbarGroup === group
    )
  return (
    <div className="footer_primary">
      <div className="container footer_wrapper">
        <div className="footer_linksWrapper">
        <h5 className="footer_linksheading">
              <TargetLink to="/">
                <SynupLogo />
              </TargetLink>
            </h5>
          <ul className="dropdown-menu">
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
        <h5 className="footer_linksheading">PRODUCTS</h5>
          <ul className="dropdown-menu">
            {filterItemsByGroup("products")
              .sort((x, y) => x.node.navbar.navbarOrder - y.node.navbar.navbarOrder)
              .map((item, index) => (
                <li key={index}>
                  <TargetLink
                    to={item.node.webpageName}
                    className="footer_link"
                  >
                    {item.node.navbarTitle}
                  </TargetLink>
                </li>
              ))}
          </ul>
        </div>
        <div className="footer_linksWrapper">
        <h5 className="footer_linksheading">RESOURCES</h5>
          <ul className="dropdown-menu">
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
        <h5 className="footer_linksheading">COMPARE</h5>
          <ul className="dropdown-menu">
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
        <h5 className="footer_linksheading">SOLUTIONS</h5>
          <ul className="dropdown-menu">
            {filterItemsByGroup("solutions")
              .sort((x, y) => x.node.navbar.navbarOrder - y.node.navbar.navbarOrder)
              .map((item, index) => (
                <li key={index}>
                  <TargetLink
                    to={item.node.webpageName}
                    className="footer_link"
                  >
                    {item.node.navbarTitle}
                  </TargetLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrimaryFooter
