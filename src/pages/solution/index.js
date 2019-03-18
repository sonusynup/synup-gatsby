import React from "react"

import Layout from "../../components/layout"

import HeroSub from '../../components/modules/solution/HeroSub'
import CardGroup from '../../components/modules/solution/CardGroup'
import CaseStudy from "../../components/modules/solution/CaseStudy";

import ActionableCardList from '../../components/molecules/ActionableCardList'

const listItems = [
  {
    listItems: [
      'Generate more leads for your agency directly from your website', 
      "Manage your clients' location data from one dashboard", 
      "Automate your agency’s client reporting"
    ],
    actionType: 'primary',
    actionText: 'LEARN MORE',
    to: '',
    title: 'A Comprehensive Local Marketing Dashboard',
    subTitle: 'An end-to-end white label local marketing suite to manage your clients’ location data, reviews, and reporting at scale',
  },
  {
    listItems: [
      'Generate more leads for your agency directly from your website', 
      "Manage your clients' location data from one dashboard", 
      "Automate your agency’s client reporting"
    ],
    actionType: 'primary',
    actionText: 'LEARN MORE',
    to: '',
    title: 'A Comprehensive Local Marketing Dashboard',
    subTitle: 'An end-to-end white label local marketing suite to manage your clients’ location data, reviews, and reporting at scale',
  },
  {
    listItems: [
      'Generate more leads for your agency directly from your website', 
      "Manage your clients' location data from one dashboard", 
      "Automate your agency’s client reporting"
    ],
    actionType: 'primary',
    actionText: 'LEARN MORE',
    to: '',
    title: 'A Comprehensive Local Marketing Dashboard',
    subTitle: 'An end-to-end white label local marketing suite to manage your clients’ location data, reviews, and reporting at scale',
  },
  {
    listItems: [
      'Generate more leads for your agency directly from your website', 
      "Manage your clients' location data from one dashboard", 
      "Automate your agency’s client reporting"
    ],
    actionType: 'primary',
    actionText: 'LEARN MORE',
    to: '',
    title: 'A Comprehensive Local Marketing Dashboard',
    subTitle: 'An end-to-end white label local marketing suite to manage your clients’ location data, reviews, and reporting at scale',
  }

]

const SinglelocationPage = () => (
  <Layout>
    <HeroSub />
    <CardGroup />
      <ActionableCardList 
        listItems={listItems}
      />
    <CaseStudy />
    
  </Layout>
)

export default SinglelocationPage
