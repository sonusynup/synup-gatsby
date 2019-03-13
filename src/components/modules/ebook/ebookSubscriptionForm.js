import React from 'react'

import Button from '../../atoms/Buttons';

class EbookSubscriptionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      businessName: '',
      employeeCount: null,
    }
  }

  render() {
    return (
      <div className="form_wrapper">
        <h3 className="form_title">Ready to Watch?</h3>
        <form>
          <div className="form_field">
            <label htmlFor="name">FULL NAME</label>
            <input
              type="text"
              className="form_inputField form_control"
              placeholder="Your full name"
            />
          </div>
          <div className="form_field">
            <label htmlFor="exampleInputEmail1">WORK EMAIL</label>
            <input
              type="email"
              className="form_inputField form_control"
              placeholder="you@yourcompany.com"
            />
          </div>
          <div className="form_field">
            <label htmlFor="name">BUSINESS NAME</label>
            <input
              type="text"
              className="form_inputField form_control"
              placeholder="Your business name"
            />
          </div>
          <div className="btn_group" role="group" aria-label="Basic">
            <label htmlFor="name">Select your business type</label>
            <div className="btn_groupWrapper">
              <button type="button" className="btn btn_form">Single <br /> Location</button>
              <button type="button" className="btn btn_form">Multi <br />Location</button>
              <button type="button" className="btn btn_form">Marketing <br />Agency</button>
            </div>
          </div>
          <div className="btn_group" role="group" aria-label="Basic">
            <label htmlFor="name">Select No. of employess</label>
            <div className="btn_groupWrapper">
              <button type="button" className="btn btn_form">1 - 10</button>
              <button type="button" className="btn btn_form">11 - 50</button>
              <button type="button" className="btn btn_form">50+</button>
            </div>
          </div>
          <Button
            type="primary"
            text="RESERVE YOUR SEAT"
            fullWidthBtn
          />
        </form>
      </div>
    )
  }
}

export default EbookSubscriptionForm