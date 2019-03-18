import React from "react"

import Layout from "../../components/layout"

import HeroSub from '../../components/modules/agency/HeroSub'
import CardGroup from '../../components/modules/agency/CardGroup'
import CaseStudy from "../../components/modules/agency/CaseStudy";
import Whitelabel from "../../components/modules/agency/whitelabel";

import ActionableCardList from '../../components/molecules/ActionableCardList'

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
    <ActionableCardList 
      listItems={listItems}
    />
    <Whitelabel />
    <CardGroup />
    <CaseStudy />
  </Layout>
)

export default AgencyPage
