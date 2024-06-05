import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Home";
import Ordersummary from "./order-summary";
import NoMatch from "./NoMatch";
import Products from "./products";
import Productsfeatures from "./productsfeatures";
import Productsnew from "./productsnew";
import User from "./user";
import UserDetail from "./userdetail";
import UserAdmin from "./useradmin";
import Profile from "./Profile";
import Login from "./login";
import RequireAuth from "./RequireAuth";

const LazyAbout = React.lazy(() => import("./About"));
// import About from "./component/About";

const Routesbundel = () => {
  return (
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
  );
};

export default Routesbundel;
