import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import BlogCard from '../components/BlogCard';
<<<<<<< HEAD
=======
import Container from "../components/Container";
>>>>>>> 9e0da31a93f9c39f9ac7bcbd004195c3046c3c22

const Blog = () => {
  return (
    <>
<<<<<<< HEAD
    <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5" >
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul>
                    <li>Mobile</li>
                    <li>Watch</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-6 mb-3">
                        <BlogCard />
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard />
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard />
                        </div>
                        <div className="col-6 mb-3">
                        <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
=======
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5" >
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul>
                  <li>Mobile</li>
                  <li>Watch</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-4">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
>>>>>>> 9e0da31a93f9c39f9ac7bcbd004195c3046c3c22
  );
};

export default Blog;