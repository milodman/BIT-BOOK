import {authenticationService} from "../../service/RegisterLoginService"
import React, { Component } from "react";

export default ComposedComponent =>
  class Auth extends Component {
    componentDidMount = () => {
      if (!authenticationService.isUserAuthenticated()) this.props.history.push("/login");
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };