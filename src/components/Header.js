import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import { IoIosMenu } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
const Header = () => {
  return (
    <>
     {/* <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 1000rs & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-white mb-0 d-flex justify-content-end">
                Helpline:
                <a className="text-white" href="tel:+91 1234567890">
                +998666326X
                </a>
              </p>
            </div>
          </div>
        </div>
  </header> */}
      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">PulseGear</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  id="inp"
                  type="text"
                  className="form-control py-2 "
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/Compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src={compare} className="image" alt="compare"></img>
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link  to="/wishlist"className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} className="image" alt="wishlist"></img>
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src={user} className="image" alt="user"></img>
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart"className="d-flex align-items-center gap-10 text-white">
                  <GiShoppingCart className="cart"/>
                    <div className="d-flex flex-column gap-5">
                      <span className="badge bg-white text-dark ">0</span>
                      <p className="mb-0">500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary bg-transparent border-0 gap-5 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <IoIosMenu className="image" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-20">
                    <NavLink className="nav" to="/">
                      Home
                    </NavLink>
                    <NavLink className="nav" to="/product">
                      Our Store
                    </NavLink>
                    <NavLink className="nav" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="nav" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
