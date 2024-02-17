import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import Colors from '../components/Colors';

const CompareProduct = () => {
  return (
   <>
    <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Mac m3 chip 8gb 256gb ssd with backlight </h5>
                            <h6 className="price mb-3 mt-2">₹ 50000</h6>
                            <div>
                                <div className="product-detail ">
                                    <h5>Brand:</h5>
                                    <p>Havells</p>
                                </div>
                                <div className="product-detail ">
                                    <h5>Type:</h5>
                                    <p>Watches</p>
                                </div>
                                <div className="product-detail ">
                                    <h5>Availability:</h5>
                                    <p>InStock</p>
                                </div>
                                <div className="product-detail ">
                                    <h5>Color:</h5>
                                    <Colors/>
                                </div>
                                <div className="product-detail ">
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>Free</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Mac m3 chip 8gb 256gb ssd with backlight </h5>
                            <h6 className="price mb-3 mt-2">₹ 50000</h6>
                            <div>
                                <div className="product-detail ">
                                    <h5>Brand:</h5>
                                    <p>Havells</p>
                                </div>
                                <div className="product-detail ">
                                    <h5>Type:</h5>
                                    <p>Watches</p>
                                </div>
                                <div className="product-detail ">
                                    <h5>Availability:</h5>
                                    <p>InStock</p>
                                </div>
                                <div className="product-detail ">
                                    <h5>Color:</h5>
                                    <Colors/>
                                </div>
                                <div className="product-detail ">
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>Free</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
  );
};

export default CompareProduct;