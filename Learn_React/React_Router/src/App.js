import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { Route, Routes } from "react-router";
import Home from "./component/Home";
// import About from "./component/About";
import Navbar from "./component/navbar";
import Ordersummary from "./component/order-summary";
import NoMatch from "./component/NoMatch";
import Products from "./component/products";
import Productsfeatures from "./component/productsfeatures";
import Productsnew from "./component/productsnew";
import User from "./component/user";
import UserDetail from "./component/userdetail";
import UserAdmin from "./component/useradmin";
import Profile from "./component/Profile";
import Login from "./component/login";
import { AuthProvider } from "./component/auth";
import RequireAuth from "./component/RequireAuth";
import { withCookies, Cookies } from "react-cookie";

const LazyAbout = React.lazy(() => import("./component/About"));

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="loding">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<Ordersummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Productsfeatures />} />
            <Route path="features" element={<Productsfeatures />} />
            <Route path="new" element={<Productsnew />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path=":userid" element={<UserDetail />} />
            <Route path="admin" element={<UserAdmin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    );
  }
}

export default withCookies(App);
