import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
    const [orderedProducts, setOrderedProducts] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-white p-3">
                                <h4>Description</h4>
                                <p>
                                    At vera eos et accusals et gusto odic dignissimos dims qui bandits presenting voluptuous delegati aqua corrupt quos dolores et
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2" >
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div className="">
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className=' d-flex align-items-center gap-10 '>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p >Based On 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProducts && (
                                            <div>
                                                <a className="text-dark underline" href="#w">Write A Review</a>
                                            </div>)
                                    }</div>
                                <div className="review-form py-5">
                                    <h4>Write a review</h4>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <input type="tel" className="form-control" placeholder='Give your review a title' />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' cols="30" rows="4"
                                                placeholder='Comments'></textarea>
                                        </div>
                                        <div>
                                            <button className='button border-0'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5  home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading mb-2">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct