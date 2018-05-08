import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeFirstName, changeLastName, addTestimonial } from "../../Actions/actions";
import './AddTestimonial.css';


class AddTestimonial extends React.Component<any> {
    render() {
        const { firstName, lastName, changeFirstNameProp, changeLastNameProp, addTestimonialProp } = this.props;
        return (
            <div className="add-testimonial">
            <input type="text"
              value={firstName}
              placeholder="first name"
              onChange={(event) => { changeFirstNameProp(event.target.value) }}
            />
            <input type="text"
              value={lastName}
              placeholder="last name"
              onChange={(event) => { changeLastNameProp(event.target.value) }}
            />
            <button className="btn-add" onClick={() => {addTestimonialProp(`${firstName} ${lastName}`)}}>Add new testimonial</button>
            <p>{this.props.newTestimonial}</p>
          </div>
        )
    }
}

const putStateToProps = (state: any) => {
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      newTestimonial: state.newTestimonial,
    }
  }
  
  const putActionsToProps = (dispatch: any) => {
    return {
      addTestimonialProp: bindActionCreators(addTestimonial, dispatch),
      changeFirstNameProp: bindActionCreators(changeFirstName, dispatch),
      changeLastNameProp: bindActionCreators(changeLastName, dispatch),
  
    }
  }

export default connect(putStateToProps, putActionsToProps)(AddTestimonial);