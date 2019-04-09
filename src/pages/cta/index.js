import React from 'react'
import singleLocationImage from '../../components/images/svg/singlelocationIcon.svg'
import multiLocationImage from '../../components/images/svg/multilocation.svg'
import marketingImage from '../../components/images/svg/marketingicon.svg'

import Header from './header'
import BusinessButton from './businessButton'
import BusinessForm from './businessForm'

class Cta extends React.Component {
  state = {
    activeScreen: 'businessType',
    businessType: null,
  }

  onClickBusinessButton = (businessType) => {
    this.setState({
      businessType,
      activeScreen: 'businessDetails'
    })
  }

  render() {
    return (
      <main>
        <section className="ctaflow">
          <div className="container">
            <h3 className="whiteTitle">Alright, let’s get started.</h3>
              <Header
                activeScreen={this.state.activeScreen}
              />
              <div className="cta-tab-content">
                <div className={`tab-pane ${this.state.activeScreen === 'businessType' ? 'active' : ''}`} id="item-1">
                  <BusinessButton
                    title="SINGLE - LOCATION BUSINESS"
                    subTitle="More than 2 locations"
                    image={singleLocationImage}
                    onClick={() => this.onClickBusinessButton('single')}
                  />
                  <BusinessButton
                    title="Multi - LOCATION BUSINESS"
                    subTitle="More than 2 locations"
                    image={singleLocationImage}
                    onClick={() => this.onClickBusinessButton('multi')}
                  />
                  <BusinessButton
                    title="MARKETING AGENCY"
                    subTitle="More than 2 locations"
                    image={marketingImage}
                    onClick={() => this.onClickBusinessButton('marketing')}
                  />
                </div>
                <div className={`tab-pane ${this.state.activeScreen === 'businessDetails' ? 'active' : ''}`} id="item-2">
                  <BusinessForm />
                </div>
                <div className={`tab-pane ${this.state.activeScreen === 'bookSlot' ? 'active' : ''}`} id="item-3">
                  <div className="Bookslot">
                    <figure> <img src="images/bookslot.png" className="img_fluid" alt="" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>
    )
  }
}

export default Cta