import React from 'react'
import SynupLogo from '../images/svgComponents/synupLogo'
import FacebookImage from '../images/svgComponents/FacebookImage'
import LinkedInImage from '../images/svgComponents/LinkedInImage'
import TwitterImage from '../images/svgComponents/TwitterImage'
import InstagramImage from '../images/svgComponents/InstagramImage'

const introSection = [
  { label: 'About Us', value: 'aboutUs' },
  { label: 'Careers', value: 'careers' },
  { label: 'Press', value: 'press' },
  { label: 'Contact Us', value: 'contactUs' },
]


const PrimaryFooter = () => (
  <div class="footer_primary">
    <div class="container footer_wrapper">
        <div class="footer_linksWrapper">
            <ul>
              <li class="footer_linksheading"><a href=""><SynupLogo /></a></li>
              {introSection.map(section =>  <li key={section.value}><a href="" class="footer_link">About Us</a></li>)}
            </ul>
            <ul class="socialicon_wrapper">
              <li><a href="" class="socialIcon"><LinkedInImage /></a></li>
              <li><a href="" class="socialIcon"><FacebookImage /></a></li>
              <li><a href="" class="socialIcon"><TwitterImage /></a></li>
              <li><a href="" class="socialIcon"><InstagramImage /></a></li>
            </ul>
        </div>
        <div class="footer_linksWrapper">
            <ul>
                <li class="footer_linksheading">PRODUCTS</li>
                <li><a href="" class="footer_link">Locations</a></li>
                <li><a href="" class="footer_link">Reviews</a></li>
                <li><a href="" class="footer_link">Analytics</a></li>
                <li><a href="" class="footer_link">Agency Tools<span class="label_caption">NEW</span></a></li>
            </ul>
        </div>
        <div class="footer_linksWrapper">
            <ul>
                <li class="footer_linksheading">RESOURCES</li>
                <li><a href="" class="footer_link">Ebooks</a></li>
                <li><a href="" class="footer_link">Webinars</a></li>
                <li><a href="" class="footer_link">Guides</a></li>
                <li><a href="" class="footer_link">Blogs</a></li>
                <li><a href="" class="footer_link">Case studies</a></li>
                <li><a href="" class="footer_link">Free Tools</a></li>
                <li><a href="" class="footer_link">Checklists</a></li>
            </ul>
        </div>
        <div class="footer_linksWrapper">
            <ul>
                <li class="footer_linksheading">COMPARE</li>
                <li><a href="" class="footer_link">Yext</a></li>
                <li><a href="" class="footer_link">MozLocal</a></li>
                <li><a href="" class="footer_link">Brightlocal</a></li>
                <li><a href="" class="footer_link">Podium</a></li>
                <li><a href="" class="footer_link">Godaddy</a></li>
            </ul>
        </div>
        <div class="footer_linksWrapper">
            <ul>
                <li class="footer_linksheading">SOLUTIONS</li>
                <li><a href="" class="footer_link">Single Location Business</a></li>
                <li><a href="" class="footer_link">Multi-Location Business</a></li>
                <li><a href="" class="footer_link">Marketing Agency</a></li>
            </ul>
        </div>
    </div>
</div>
)

export default PrimaryFooter