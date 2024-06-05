import React, { Component } from "react";
import { instanceOf } from "prop-types";

import Routesbundel from "./component/Routesbundel";
import Navbar from "./component/navbar";

import { AuthProvider } from "./component/auth";
import { withCookies, Cookies } from "react-cookie";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      user: cookies.get("userId,passwordId")
        ? cookies.get("userId,passwordId")
        : null,
    };
  }

  render() {
    return (
      <AuthProvider>
        <Navbar />
        <Routesbundel />
      </AuthProvider>
    );
  }
}

export default withCookies(App);
