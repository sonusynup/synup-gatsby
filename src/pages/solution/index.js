import React from "react"

import Layout from "../../components/layout"

import HeroSub from '../../components/modules/solution/HeroSub'
import WrapperBlock from '../../components/modules/solution/WrapperBlock'
import WrapperBlockReverse from '../../components/modules/solution/WrapperBlockReverse'
import CardGroup from '../../components/modules/solution/CardGroup'
import CaseStudy from "../../components/modules/solution/CaseStudy";

const SinglelocationPage = () => (
  <Layout>
    <HeroSub />
    <WrapperBlock />
    <WrapperBlockReverse />
    <WrapperBlock />
    <WrapperBlockReverse />
    <CardGroup />
    <CaseStudy />
  </Layout>
)

export default SinglelocationPage
