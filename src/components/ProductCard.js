import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link  to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`} className=" product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="productImage"
            ></img>
          </div>
          <div className="product-details">
            <h6 className="brand mb-2">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block" :"d-none"}`}> At vera eos et accusals et gusto odic dignissimos dims qui bandits presenting voluptuous delegati aqua corrupt quos dolores et quad molests except sint occaecati capitate non provident, silique sent...</p>
            <p className="price">₹100</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart}alt="add cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      </>

  );
};

export default ProductCard;
