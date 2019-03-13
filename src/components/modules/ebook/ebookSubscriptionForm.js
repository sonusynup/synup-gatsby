import React from 'react'

import Button from '../../atoms/Buttons';
import FormInput from '../../atoms/FormInput';

class EbookSubscriptionForm extends React.Component {

  state = {
    fullName: '',
    email: '',
    businessName: '',
    businessType: '',
    employeeCount: null,
  }

  onChangeFormField = (fieldName) => {
    return (e) => {
      this.setState({
        [fieldName]: e.target.value,
      })
    }
  }

  render() {
    return (
      <div className="form_wrapper">
        <h3 className="form_title">Ready to Watch?</h3>
        <form>
          <FormInput
            name="name"
            label="FULL NAME"
            placeholder="Your full name"
            onChange={this.onChangeFormField('fullName')}
          />
          <FormInput
            name="exampleInputEmail1"
            label="WORK EMAIL"
            placeholder="you@yourcompany.com"
            onChange={this.onChangeFormField('email')}
          />
          <FormInput
            name="name"
            label="BUSINESS NAME"
            placeholder="Your business name"
            onChange={this.onChangeFormField('businessName')}
          />
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