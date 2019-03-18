import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'

import Button from '../atoms/Buttons'
import SynupLogo from '../../components/images/svgComponents/synupLogo';
import HamburgerIcon from './navItem/HamburgerItem'

import ResourcesNavGroup from './navGroups/ResourcesNavGroup'
import SolutionNavGroup from './navGroups/SolutionNavGroup'
import CompanyNavGroup from "./navGroups/CompanyNavGroup";
import ProductNavGroup from "./navGroups/ProductNavGroup";

const ref = React.createRef();

// TODO: Refactor this as per new layout
// Remove hardcoding ebook
class Header extends React.Component {
  state = {
    activeHoveredNavItem: '',
    isMenuExpanded: false,
    scrollBarFixed: false,
    activeResource: 'Ebooks'
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset === 0) {
      this.setState({
        scrollBarFixed: false
      })
    } else {
      this.setState({
        scrollBarFixed: true
      })
    }
    
  }

  toggleHamburgerMenu = () => {
    this.setState({
      isMenuExpanded: !this.state.isMenuExpanded,
    })
  }

  setActiveHoverNavItem = (activeHoveredNavItem) => {
    return (e) => {
      this.setState({
        activeHoveredNavItem,
      })
    }
  }

  onChangeActiveResource = (activeResource) => {
    return (e) => {
      this.setState({
        activeResource,
      })
    }  
  }

  render() {
    const {
      isMenuExpanded
    } = this.state;
    return (
      <header
        ref={ref}
        className={`navbar navbar-toggleable-sm ${this.state.scrollBarFixed ? 'header--fixed active' : ''} `}
        id="header"
      >
       <div className="container">
         <h1><Link to="/"><SynupLogo /></Link></h1>
         <HamburgerIcon
            onClick={this.toggleHamburgerMenu}
            isMenuExpanded={isMenuExpanded}
          />
         <nav id="navbarNavDropdown1" className={isMenuExpanded ? 'collapse nav-collapse show' : 'collapse nav-collapse'}>
          <ul id="main-menu1" className="navbar-nav">
            <SolutionNavGroup
              onHover={this.setActiveHoverNavItem('solution')}
              onBlur={this.setActiveHoverNavItem('')}
              isHovered={this.state.activeHoveredNavItem === 'solution'}
            />
            <ProductNavGroup
              onHover={this.setActiveHoverNavItem('product')}
              onBlur={this.setActiveHoverNavItem('')}
              isHovered={this.state.activeHoveredNavItem === 'product'}
            />
            <ResourcesNavGroup
              onHover={this.setActiveHoverNavItem('resource')}
              onBlur={this.setActiveHoverNavItem('')}
              isHovered={this.state.activeHoveredNavItem === 'resource'}
              onChangeActiveResource={this.onChangeActiveResource}
              activeResource={this.state.activeResource}
            />
            <CompanyNavGroup
              onHover={this.setActiveHoverNavItem('company')}
              onBlur={this.setActiveHoverNavItem('')}
              isHovered={this.state.activeHoveredNavItem === 'company'}
            />
             <li><Link to="/" className="js-scroll-trigger nav-link">CUSTOMERS</Link></li>
             <li><Link to="/" className="btn_link btn_signin">SIGN IN</Link></li>
             <li>
               <Link to="/">
                 <Button
                   type="primary"
                   text="GET STARTED"
                 />
               </Link>
             </li>
           </ul>
         </nav>
       </div>
     </header>
   )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
