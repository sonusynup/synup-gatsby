import React from 'react'

import Button from '../../atoms/Buttons'
import FormInput from '../../atoms/FormInput'
import FormButtonGroup from '../../atoms/FormButtonGroup'

// Renders the Webinar Subscription form
class WebinarSubscriptionForm extends React.Component {

  state = {
    fullName: '',
    email: '',
    businessName: '',
    businessType: '',
    employeeCount: null,
  }
  
  typeButtons = [
    { labelFirst: 'Single', labelSecond: 'Location', value: 'single' },
    { labelFirst: 'Multi', labelSecond: 'Location', value: 'multi' },
    { labelFirst: 'Marketing', labelSecond: 'Agency', value: 'agency'}
  ];

  countButtons = [
    { labelFirst: '1 - 10', labelSecond: null, value: '1-10'},
    { labelFirst: '11 - 50', labelSecond: null, value: '11-50'},
    { labelFirst: '50+', labelSecond: null, value: '50+'}
  ];

  onChangeFormField = (fieldName, fromEvent) => {
    return (eventOrValue) => {
      if (fromEvent) {
        this.setState({
          [fieldName]: eventOrValue.target.value,
        })
      } else {
        this.setState({
          [fieldName]: eventOrValue,
        })
      }
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
            onChange={this.onChangeFormField('fullName', true)}
          />
          <FormInput
            name="exampleInputEmail1"
            label="WORK EMAIL"
            placeholder="you@yourcompany.com"
            onChange={this.onChangeFormField('email', true)}
          />
          <FormInput
            name="name"
            label="BUSINESS NAME"
            placeholder="Your business name"
            onChange={this.onChangeFormField('businessName', true)}
          />
          <FormButtonGroup
            name="name"
            label="Select your business type"
            wrapperClass="btn_group"
            buttonGroupWrapperClass="btn_groupWrapper"
            buttons={this.typeButtons}
            onChange={this.onChangeFormField('businessType')}
          />
          <FormButtonGroup
            name="name"
            label="Select No. of employees"
            wrapperClass="btn_group"
            buttonGroupWrapperClass="btn_groupWrapper"
            buttons={this.countButtons}
            onChange={this.onChangeFormField('employeeCount')}
          />
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

export default WebinarSubscriptionForm