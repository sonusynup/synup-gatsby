import React from 'react'
import FormButtonGroup from '../components/atoms/formButtonGroup'
import singleLocationImage from '../components/images/svg/singlelocationIcon.svg'
import multiLocationImage from '../components/images/svg/multilocation.svg'
import marketingImage from '../components/images/svg/marketingicon.svg'

const Cta = () => (
  <main>
    <section className="ctaflow">
      <div className="container">
        <h3 className="whiteTitle">Alright, let’s get started.</h3>
        <div className="tabs-center">
          <ul className="nav">
            <li>
              <a
                className="flowStep active" 
                href="#item-1" 
                className="whiteTitle" 
                data-toggle="tab">
                <span>SELECT YOUR BUSINESS TYPE</span>
              </a>
            </li>
            <li>
              <a 
                className="flowStep"
                href="#item-2"
                className="whiteTitle"
                data-toggle="tab"
              >
                <span>FILL IN YOUR BUSINESS DETAILS</span>
              </a>
            </li>
            <li>
              <a className="flowStep" href="#item-3" className="whiteTitle" data-toggle="tab">
                <span>BOOK A SLOT</span>
              </a>
            </li>
          </ul>
        </div>
          <div className="cta-tab-content">
            <div className="tab-pane active" id="item-1">
              <a href="#" className="businessCard">
                <figure>
                    <img src={singleLocationImage} alt="" />
                </figure>
                <h5>SINGLE - LOCATION BUSINESS</h5>
                <p>More than 2 locations</p>
              </a>
              <a href="#" className="businessCard">
                <figure>
                    <img src={multiLocationImage} alt="" />
                </figure>
                <h5>MULTI - LOCATION BUSINESS</h5>
                <p>More than 2 locations</p>
              </a>
              <a href="#" className="businessCard">
                <figure>
                    <img src={marketingImage} alt="" />
                </figure>
                <h5>MARKETING AGENCY</h5>
                <p>More than 2 locations</p>
              </a>
            </div>
            <div className="tab-pane" id="item-2">
              <div className="form_wrapper">
                <form>
                  <div className="form_field">
                    <label for="name">FIRST NAME</label>
                    <input type="text" className="form_inputField form_control" placeholder="Your full name" />
                  </div>
                  <div className="form_field">
                    <label for="name">BUSINESS NAME</label>
                    <input type="text" className="form_inputField form_control" placeholder="Your business name" />
                  </div>
                  <div className="form_field">
                    <label for="exampleInputEmail1">EMAIL</label>
                    <input type="email" className="form_inputField form_control" placeholder="you@gmail.com" />
                  </div>
                  <div className="form_field">
                    <label for="name">PHONE</label>
                    <input type="number" className="form_inputField form_control" placeholder="Your business name" />
                  </div>
                  <div className="btn_group" role="group" aria-label="Basic">
                    <label for="name">SELECT NO. OF EMPLOYEE</label>
                    <div className="btn_groupWrapper">
                      <button type="button" className="btn btn_outlineWhite btn_form">1 - 10</button>
                      <button type="button" className="btn btn_outlineWhite btn_form">11 - 50</button>
                      <button type="button" className="btn btn_outlineWhite btn_form">50+</button>
                    </div>
                  </div>              
                  <button className="btn btn_white btn_arrow btn_fullWidth">
                      <span className="btn_textSpan">GET STARTED<svg width="15px" height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <g id="UI/Components/Buttons/SecondaryBig/hover" transform="translate(-119.000000, -18.000000)" fill="#4865FF">
                                  <g id="Group-Copy-2" transform="translate(119.000000, 18.000000)">
                                      <polygon id="Rectangle-Copy-2" opacity="0.305966332" points="0 0 9.64285714 9.10714286 0 18.2142857"></polygon>
                                      <polygon id="Rectangle-Copy-3" points="5.35714286 0 15 9.10714286 5.35714286 18.2142857"></polygon>
                                  </g>
                              </g>
                          </g>
                      </svg>
                      </span>
                  </button>
                </form>
              </div>
            </div>
            <div className="tab-pane" id="item-3">
              <div className="Bookslot">
                <figure> <img src="images/bookslot.png" className="img_fluid" alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
)

export default Cta