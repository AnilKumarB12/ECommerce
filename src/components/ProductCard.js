import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
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
            <p className={`description ${grid===12 ? "d-block" :"d-none"}`}> At vero eos et accusals et iusto odio dignissimos dims qui blanditiis praesentium voluptatum delegati aqua corrupt quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
            <p className="price">₹100</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare"></img>
              </Link>
              <Link>
                <img src="images/view.svg" alt="view"></img>
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add cart"></img>
              </Link>
            </div>
          </div>
        </Link>
      </div>
      </>

  );
};

export default ProductCard;
