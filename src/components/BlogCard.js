import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog"></img>
        </div>
        <div className="blog-content">
          <p className="date"> {new Date().toDateString()}</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Link className="button mt-3" to="/blog/:id">
            Read More
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
