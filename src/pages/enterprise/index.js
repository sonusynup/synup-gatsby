import React from "react"

import Layout from "../../components/layout"

import HeroEnterprise from '../../components/modules/enterprise/HeroEnterprise'
import Partner from '../../components/modules/enterprise/Partner'
import EnterpriseBlock from '../../components/modules/enterprise/EnterpriseBlock'
import EnterpriseBlockReverse from '../../components/modules/enterprise/EnterpriseBlockReverse'
import CardGroup from '../../components/modules/enterprise/CardGroup'
import CaseStudy from "../../components/modules/enterprise/CaseStudy";

const SinglelocationPage = () => (
  <Layout>
    <HeroEnterprise />
    <Partner />
    <EnterpriseBlock />
    <EnterpriseBlockReverse />
    <EnterpriseBlock />
    <CardGroup />
    <CaseStudy />
  </Layout>
)

export default SinglelocationPage
