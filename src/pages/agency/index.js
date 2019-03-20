import React from "react"

import Layout from "../../components/layout"

import HeroSub from '../../components/modules/agency/heroSub'
import CardGroup from '../../components/modules/agency/cardGroup'
import CaseStudy from "../../components/modules/agency/caseStudy";
import Whitelabel from "../../components/modules/agency/whitelabel";

import FeatureList from '../../components/molecules/featureList'

const listItems = [
  {
    subListItems: [
  
    ],
    actionType: 'primary',
    actionText: 'LEARN MORE',
    to: '',
    title: 'A Comprehensive Local Marketing Dashboard',
    subTitle: 'An end-to-end white label local marketing suite to manage your clients’ location data, reviews, and reporting at scale',
  },
  {
    subListItems: [
  
    ],
    actionType: 'primary',
    actionText: 'LEARN MORE',
    to: '',
    title: 'A Comprehensive Local Marketing Dashboard',
    subTitle: 'An end-to-end white label local marketing suite to manage your clients’ location data, reviews, and reporting at scale',
  },
  {
    subListItems: [
   
    ],
    actionType: 'primary',
    actionText: 'LEARN MORE',
    to: '',
    title: 'A Comprehensive Local Marketing Dashboard',
    subTitle: 'An end-to-end white label local marketing suite to manage your clients’ location data, reviews, and reporting at scale',
  },

]

const AgencyPage = () => (
  <Layout>
    <HeroSub />
    <FeatureList listItems={listItems} />
    <Whitelabel />
    <CardGroup />
    <CaseStudy />
  </Layout>
)

export default AgencyPage
