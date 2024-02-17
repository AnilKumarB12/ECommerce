import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className=" img-fluid rounded-3"
                  alt="main banner"
                ></img>
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPAD S13+ Pro.</h5>
                  <p>
                    From ₹199.00 or
                    <br /> ₹41.62/mo
                  </p>
                  <Link className="button mt-2">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className=" img-fluid rounded-3"
                    alt="main banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From ₹1699.00 or
                      <br /> ₹64.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className=" img-fluid rounded-3"
                    alt="main banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUY IPad Air</h5>
                    <p>
                      From ₹599.00 or
                      <br /> ₹49.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className=" img-fluid rounded-3"
                    alt="main banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest brand
                      <br />
                      styles and colors
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className=" img-fluid rounded-3"
                    alt="main banner"
                  ></img>
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback &<br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services"></img>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over 500rs</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services"></img>
                  <div>
                    <h6>Daily Surprise offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services"></img>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">SHop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services"></img>
                  <div>
                    <h6>Affordable pRICES</h6>
                    <p className="mb-0">Get Factory default price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services"></img>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Electronics</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Electronics</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading mb-2">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-1.webp" className="img-fluid" alt="productImage"></img>
                <div className="famous-content position-absolute">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch series 7.</h6>
                <p>From ₹1000 or ₹250/mo for 3mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-2.webp" className="img-fluid" alt="productImage"></img>
                <div className="famous-content position-absolute">
                <h5 className="text-dark">STUDIO DISPLAY</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">From ₹10000 or ₹2500/mo for 3mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-3.webp" className="img-fluid" alt="productImage"></img>
                <div className="famous-content position-absolute">
                <h5 className="text-dark">SMARTPHONES</h5>
                <h6 className="text-dark">Smartphone 14 pro.</h6>
                <p className="text-dark">From ₹5000 or ₹1650/mo for 3mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-4.webp" className="img-fluid" alt="productImage"></img>
                <div className="famous-content position-absolute">
                <h5 className="text-dark">HOME SPEAKERS</h5>
                <h6 className="text-dark">Room-Filling sound</h6>
                <p className="text-dark"> className="text-dark"From ₹699 or ₹116/mo for 3mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="section-heading mb-2">Special Products</div>
          </div>
        </div>
        <div className="row">
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
        </div>
      </div>
      </section>
      {/* pending */}
      <section className="popular-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading mb-2">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-20">
                    <img src="images/brand-01.png" alt="brand"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand"></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand"></img>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5  home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Latest Blogs</h3>
            </div>
           <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
