import React from "react"

import Layout from "../../components/layout"

import HeroSub from '../../components/modules/agency/HeroSub'
import WrapperBlock from '../../components/modules/agency/WrapperBlock'
import WrapperBlockReverse from '../../components/modules/agency/WrapperBlockReverse'
import CardGroup from '../../components/modules/agency/CardGroup'
import CaseStudy from "../../components/modules/agency/CaseStudy";
import Whitelabel from "../../components/modules/agency/whitelabel";

const SinglelocationPage = () => (
  <Layout>
    <HeroSub />
    <WrapperBlock />
    <Whitelabel />
    <WrapperBlockReverse />
    <WrapperBlock />
    <WrapperBlockReverse />
    <CardGroup />
    <CaseStudy />
  </Layout>
)

export default SinglelocationPage
