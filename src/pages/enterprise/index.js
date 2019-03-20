import React from "react"

import Layout from "../../components/layout"

import HeroEnterprise from '../../components/modules/enterprise/heroEnterprise'
import Partner from '../../components/modules/enterprise/partner'
import EnterpriseBlock from '../../components/modules/enterprise/enterpriseBlock'
import EnterpriseBlockReverse from '../../components/modules/enterprise/enterpriseBlockReverse'
import CardGroup from '../../components/modules/enterprise/cardGroup'
import CaseStudy from "../../components/modules/enterprise/caseStudy";

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
