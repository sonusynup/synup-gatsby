/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "./additionals.css"

const resourceList = [
  { title: "Ebooks", link: "/resources/ebooks" },
  { title: "Webinars", link: "/resources/webinars" },
  { title: "Guides", link: "/resources/guides" },
  { title: "Blog", link: "/resources/blogs" },
  { title: "Checklists", link: "/resources/checklists" },
  { title: "Free Tools", link: "/resources/free-tools" },
  { title: "Case Study", link: "/resources/casestudies" },
]

const companyList = [
  { title: "About", link: "/about" },
  { title: "Press", link: "/press" },
  { title: "Careers", link: "/careers" },
  { title: "Contact", link: "/contact" },
  { title: "Customers", link: "/customers" },
  { title: "Free Tools", link: "/free-tools" },
  { title: "Synp Network", link: "/synp-network" },
]

// Handles the layout of the app
// Layout includes headers, app and footer.
// Each route will replace the app as it is there
const Layout = ({
  children,
  navbarSticky,
  announcementMessage,
  announcementLink,
  announcementButtonText,
  sticky: announcementSticky,
  prefooterTitle,
  prefooterDescription,
  prefooterButtonText,
  navbarTheme,
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulWebpage(limit: 100) {
          edges {
            node {
              webpageName
              navbar {
                navbarTitle
                navbarOrder
                navbarGroup
                navbarTitle
                navbarImage {
                  file {
                    url
                  }
                }
                navbarDescription {
                  childContentfulRichText {
                    html
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          data={data}
          resourceList={resourceList}
          companyList={companyList}
          announcementMessage={announcementMessage}
          announcementLink={announcementLink}
          announcementButtonText={announcementButtonText}
          announcementSticky={announcementSticky}
          navbarSticky={navbarSticky}
          navbarTheme={navbarTheme}
        />
        {/* Dynamic injection of page meta */}
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <title>Synup</title>
          <meta name="description" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js" />
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" />
        </Helmet>
        <main>{children}</main>
        <Footer
          data={data}
          resourceList={resourceList}
          companyList={companyList}
          prefooterTitle={prefooterTitle}
          prefooterDescription={prefooterDescription}
          prefooterButtonText={prefooterButtonText}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
