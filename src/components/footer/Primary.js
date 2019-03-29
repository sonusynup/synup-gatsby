import React from "react"
import { Link } from 'gatsby'

import SynupLogo from "../images/svgComponents/synupLogo"
import FacebookImage from "../images/svgComponents/FacebookImage"
import LinkedInImage from "../images/svgComponents/LinkedInImage"
import TwitterImage from "../images/svgComponents/TwitterImage"
import InstagramImage from "../images/svgComponents/InstagramImage"

const socialIcons = [
  { title: LinkedInImage, link: 'www.linkedin.com'},
  { title: FacebookImage , link: 'www.facebook.com'},
  { title: TwitterImage , link: 'www.twitter.com'},
  { title: InstagramImage , link: 'www.facebook.com'},
]
const PrimaryFooter = ({
  data,
  resourceList,
  companyList,
}) => {
  const filterItemsByGroup = group => data.allContentfulWebpage.edges.filter((edge) => edge.node.navbarGroup === group);
  return (
    <div className="footer_primary">
      <div className="container footer_wrapper">
        <div className="footer_linksWrapper">
          <ul>
            <li className="footer_linksheading">
              <a href="">
                <SynupLogo />
              </a>
            </li>
            {companyList.map(section => (
              <li>
                <Link to={section.link} className="footer_link">
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="socialicon_wrapper">
            {socialIcons.map((icon) => (
              <li className="socialIcon">
                <Link to={icon.link}>
                  <icon.title />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_linksWrapper">
          <ul>
            <li className="footer_linksheading">PRODUCTS</li>
            {
              filterItemsByGroup('products')
                .sort((x, y) => (x.node.navbarOrder - y.node.navbarOrder))
                .map((item) => (
                  <li>
                    <Link to={item.node.webpageName} className="footer_link">
                      {item.node.navbarTitle}
                    </Link>
                  </li>
              ))
            }
          </ul>
        </div>
        
        <div className="footer_linksWrapper">
          <ul>
            <li className="footer_linksheading">RESOURCES</li>
            <li>
              <a href="" className="footer_link">
                Ebooks
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Webinars
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Guides
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Blogs
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Case studies
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Free Tools
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Checklists
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_linksWrapper">
          <ul>
            <li className="footer_linksheading">COMPARE</li>
            <li>
              <a href="" className="footer_link">
                Yext
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                MozLocal
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Brightlocal
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Podium
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Godaddy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_linksWrapper">
          <ul>
            <li className="footer_linksheading">SOLUTIONS</li>
            <li>
              <a href="" className="footer_link">
                Single Location Business
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Multi-Location Business
              </a>
            </li>
            <li>
              <a href="" className="footer_link">
                Marketing Agency
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrimaryFooter
