import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import ReactImageZoom from "react-image-zoom";
import Colors from '../components/Colors';
import { Link } from 'react-router-dom';
import { MdOutlineCompare } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Container from '../components/Container';

const SingleProduct = () => {
    // eslint-disable-next-line no-unused-vars
    const [orderedProducts, setOrderedProducts] = useState(true);
    const [copied, setCopied] = useState(false);
    const images = {
        width: 560,
        height: 500,
        zoomWidth: 500,
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    };
    const zoomLensStyle = {
        cursor: 'move',
    };
    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset "Copied!" after 2 seconds
    };

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...images} style={{ zoomLens: zoomLensStyle }} />
                            </div>
                        </div>
                        <div className="other-product-image d-flex gap-15 flex-wrap">
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='watch' className='img-fluid'></img></div>
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='watch' className='img-fluid'></img></div>
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='watch' className='img-fluid'></img></div>
                            <div><img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' alt='watch' className='img-fluid'></img></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'> <h3 className='title'>Watch for men metallic silver color analog watch</h3></div>
                            <div className="border-bottom py-3">
                                <p className="price">₹2000</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                        classNames={"mb-2"}
                                    />
                                    <p className='t-review'>(2 Reviews )</p>
                                </div>
                                <a className="review-button " href="#review">Write a review</a>
                            </div>
                            <div className=" py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Type: </h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Brand: </h3>
                                    <p className='product-data'>Noise</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Category:</h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Tags: </h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Availability: </h3>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className="d-flex gap-10  flex-column mt-3 mb-2">
                                    <h3 className='product-heading mb-1'>Size: </h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-3 mb-2">
                                    <h3 className='product-heading'>Color: </h3>
                                    <Colors />
                                </div>
                                <div className="d-flex gap-15 flex-row align-items-center mt-3 mb-2">
                                    <h3 className='product-heading'>Quantity: </h3>
                                    <div className=''><input type="number" name='' className='form-control' defaultValue={1} min={1} max={10} style={{ width: "70px" }} />
                                    </div>
                                    <div className='d-flex align-items-center gap-20 ms-5'>
                                        <button className='button border-0' type='submit'>Add to cart</button>
                                        <Link to='/SignUp' className='button sign-up border-0 sign-up'>Buy Now</Link>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15 mt-3 mb-1'>
                                    <div><a href="#w" ><MdOutlineCompare className='font me-2 pr-1' />Add to compare</a></div>
                                    <div><a href="#w"> <CiHeart className='font me-2 pr-1' />Add to wishlist</a></div>
                                </div>
                                <div className="d-flex flex-column  mt-3 mb-2">
                                    <h3 className='product-heading'>Shipping & Returns</h3>
                                    <p className='product-data'>Free shipping and returns available on all orders <br /> we ship all indian domestic orders within <b>3-7 business days</b></p>
                                </div>
                                <div className="d-flex gap-10 align-items-center mt-3 mb-2">
                                    <h3 className='product-heading'>product link</h3>
                                    <a href="#j" onClick={(e) => { e.preventDefault(); copyToClipboard('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'); }}>
                                        {copied ? 'Copied!' : 'Copy Product Link'}</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">
                            <p>
                                At vera eos et accusals et gusto odic dignissimos dims qui bandits presenting voluptuous delegati aqua corrupt quos dolores et
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2" >
                <div className="row">
                    <div className="col-12">
                        <h3 id="review" >Reviews</h3>
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
                                            classNames={"mb-2"}
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
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review mb-1">
                                    <div className='d-flex align-items-center gap-10'>
                                        <h6 className='mb-0'>Anil</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                            classNames={"mb-1"}
                                        />
                                    </div>
                                    <p className='mt-2 mb-1'>Good Product great quality affordable</p>
                                </div>
                                <div className="review mt-2">
                                    <div className='d-flex align-items-center gap-10'>
                                        <h6 className='mb-0'>Kumar</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                            classNames={"mb-1"}
                                        />
                                    </div>
                                    <p className='mt-2'>Good Product great quality affordable Price worth varma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper py-5  home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading mb-2 ">You may also like</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <ProductCard />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleProduct;