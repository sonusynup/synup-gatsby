import React from 'react'

import { Link } from 'gatsby'

import Layout from '../../components/layout'
import HeroSection from '../../components/modules/resources/heroSection'
import Ebook from '../../components/modules/resources/ebook'
import BlogBlock from '../../components/modules/resources/blogBlock'
import CustomersBlock from '../../components/modules/resources/customersBlock'
import ToolsBlock from '../../components/modules/resources/toolsBlock'


const Resources = () => (
  <Layout>
    <HeroSection />
    <Ebook />
    <BlogBlock />
    <CustomersBlock />
    <ToolsBlock />
  </Layout>
)

export default Resources