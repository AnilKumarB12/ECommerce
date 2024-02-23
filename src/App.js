import React from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import ForgotPasswords from "./pages/ForgotPasswords";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="Compare-product" element={<CompareProduct />} />
            <Route path="Wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="ForgotPasswords" element={<ForgotPasswords />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="Privacy Policy" element={<PrivacyPolicy />} />
            <Route path="Refund Policy" element={<RefundPolicy />} />
            <Route path="Shipping Policy" element={<ShippingPolicy />} />
            <Route path="Terms And Conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
