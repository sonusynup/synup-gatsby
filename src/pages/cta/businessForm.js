import React from "react"

import Button from "../../components/atoms/button"
import FormInput from "../../components/atoms/formInput"
import FormButtonGroup from "../../components/atoms/formButtonGroup"

// Handles the entire state of the form
class BusinessForm extends React.Component {
  // State holding the form data
  state = {
    firstName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    employeeCount: null,
  }

  // Field type options
  typeButtons = [
    { labelFirst: "Single", labelSecond: "Location", value: "single" },
    { labelFirst: "Multi", labelSecond: "Location", value: "multi" },
    { labelFirst: "Marketing", labelSecond: "Agency", value: "agency" },
  ]

  // Field count options
  countButtons = [
    { labelFirst: "1 - 10", labelSecond: null, value: "1-10" },
    { labelFirst: "11 - 50", labelSecond: null, value: "11-50" },
    { labelFirst: "50+", labelSecond: null, value: "50+" },
  ]

  // Handler for form field change
  onChangeFormField = (fieldName, fromEvent) => {
    // event can be triggered from an event or a value
    return eventOrValue => {
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
        <form>
          <FormInput
            name="FIRST NAME"
            label="FIRST NAME"
            placeholder="Your full name"
            inputClass="form_inputField form_control"
            onChange={this.onChangeFormField("firstName", true)}
          />
          <FormInput
            name="BUSINESS NAME"
            label="BUISNESS NAME"
            placeholder="Your business name"
            inputClass="form_inputField form_control"
            onChange={this.onChangeFormField("businessName", true)}
          />
          <FormInput
            name="EMAIL"
            label="EMAIL"
            placeholder="you@gmail.com"
            inputClass="form_inputField form_control"
            onChange={this.onChangeFormField("email", true)}
          />
          <FormInput
            name="PHONE"
            label="PHONE"
            placeholder="Your Phone Number"
            inputClass="form_inputField form_control"
            onChange={this.onChangeFormField("phoneNumber", true)}
          />

          <FormButtonGroup
            name="name"
            label="Select No. of employees"
            wrapperClass="btn_group"
            buttonGroupWrapperClass="btn_groupWrapper"
            buttonClass="btn btn_outlineWhite btn_form"
            buttons={this.countButtons}
            onChange={this.onChangeFormField("employeeCount")}
          />
          <Button
            buttonType="button"
            type="invert-primary-fullwidth"
            text="RESERVE YOUR SEAT"
            fullWidthBtn
            disabled={
              !(this.state.firstName) || 
              !(this.state.email) || 
              !(this.state.businessName) || 
              !(this.state.phoneNumber) || 
              !(this.state.employeeCount)
            }
            onClick={() => {
              this.props.submitBusinessForm({
                firstName: this.state.firstName,
                email: this.state.email,
                businessName: this.state.businessName,
                phoneNumber: this.state.phoneNumber,
                employeeCount: this.state.employeeCount,
              })
            }}
          />
        </form>
      </div>
    )
  }
}

export default BusinessForm
