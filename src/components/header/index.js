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

// TODO: Refactor this as per new layout
class Header extends React.Component {
  state = {
    activeHoveredNavItem: '',
    isMenuExpanded: false,
  }
  
  toggleHamburgerMenu = () => {
    this.setState({
      isMenuExpanded: !this.state.isMenuExpanded,
    })
  }
  render() {
    const {
      isMenuExpanded
    } = this.state;
    return (
      <header className="navbar navbar-toggleable-sm" id="header">
       <div className="container">
         <h1><Link to="/"><SynupLogo /></Link></h1>
         <HamburgerIcon
            onClick={this.toggleHamburgerMenu}
            isMenuExpanded={isMenuExpanded}
          />
         <nav id="navbarNavDropdown1" className={isMenuExpanded ? 'collapse nav-collapse show' : 'collapse nav-collapse'}>
           <ul id="main-menu1" className="navbar-nav">
             <SolutionNavGroup />
             <ProductNavGroup />
             <ResourcesNavGroup />
             <CompanyNavGroup />
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
