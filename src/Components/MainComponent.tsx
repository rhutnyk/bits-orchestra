
import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeFirstName, changeLastName } from "../Actions/actions";
import App from '../App'

class MainComponent extends React.Component<any> {
    render() {
      const {firstName, lastName, changeFirstNameProp, changeLastNameProp} = this.props;
      return (
        <div>
          <App/>
          <input type="text"
            value={firstName}
            placeholder="first name"
            onChange={(event) => {changeFirstNameProp(event.target.value)}}
          />
          <input type="text"
            value={lastName}
            placeholder="last name"
            onChange={(event) => {changeLastNameProp(event.target.value)}}
          />
        </div>
      )
    }
  }
  
  const putStateToProps = (state: any) => {
    return {
      firstName: state.firstName,
      lastName: state.lastName,
    }
  }
  
  const putActionsToProps = (dispatch: any) => {
    return {
      changeFirstNameProp: bindActionCreators(changeFirstName, dispatch),
      changeLastNameProp: bindActionCreators(changeLastName, dispatch),
  
    }
  }

  export default connect(putStateToProps, putActionsToProps)(MainComponent);