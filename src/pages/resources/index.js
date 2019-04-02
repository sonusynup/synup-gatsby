import React from 'react'

import { Link } from 'gatsby'

import Layout from '../../components/layout'
import WebinarSection from '../../components/modules/resources/webinarSection'
import Ebook from '../../components/modules/resources/ebook'
import BlogBlock from '../../components/modules/resources/blogBlock'
import CustomersBlock from '../../components/modules/resources/customersBlock'
import ToolsBlock from '../../components/modules/resources/toolsBlock'


const Resources = (props) => (
  <Layout>
    <WebinarSection webinarData={props.data.allContentfulWebinar}/>
    <Ebook ebookData={props.data.allContentfulEbooks}/>
    <BlogBlock />
    <CustomersBlock casestudyData={props.data.allContentfulCaseStudy}/>
    <ToolsBlock />
  </Layout>
)

export default Resources

export const query = graphql` 
query {
  allContentfulWebinar(limit: 1) {
    edges {
      node {
        webinarTitle
        webinarDate
        speakers{
          speakers{
            speakerName
            speakerPhoto {
              file{
                url
              }
            }
            speakerDescription {
              childContentfulRichText {
                html
              }
            }
          }
          
        }
      }
    }
  }
 	allContentfulEbooks(limit:4) {
    edges {
      node{
        bookCoverImage {
          file {
            url
          }
        }
      }
    }
  }
  allContentfulCaseStudy(limit:2) {
    edges {
      node{
        casestudyTitle {
          casestudyTitle
        }
      }
    }
  }  
}
`