import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1="checkout-wrapper py-2 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-select-data">
                            <h3 className="website-name">DevCorner</h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link className='text-dark total-price ' to="/cart" >Cart</Link></li>
                                    <li className="breadcrumb-item  total-price active" aria-current="page">Information</li>
                                    <li className="breadcrumb-item active">Shipping</li>
                                    <li className="breadcrumb-item  total-price active" aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <h4 className="title mt-3 total">Contact Information</h4>
                            <p className="user-details total">
                                Anil (anilkumar1210@gmail.com)
                            </p>
                            <a href="#w">Switch Account</a>
                            <h4 className='my-3' >Shipping Address</h4>
                            <form
                                action=""
                                className="d-flex gap-15  my-3 flex-wrap justify-content-between"
                            >
                                <div className="w-100">
                                    <select name="" className="form-control form-select" id="">
                                        <option value="">
                                            Select Country
                                        </option>
                                        <option value="us">United States</option>
                                        <option value="ca">Canada</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-100">
                                    <input
                                        type="text"
                                        placeholder="Apartment, Suite ,etc"
                                        className="form-control"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="form-control"
                                    />
                                </div>
                                <div className="flex-grow-1">
                                    <select name="" className="form-control form-select" id="">
                                        <option value="" >
                                            Select State
                                        </option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input
                                        type="text"
                                        placeholder="Zipcode"
                                        className="form-control"
                                    />
                                </div>
                                <div className="w-100 mt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className='text-dark '><BiArrowBack className="mr-2" />Return to cart</Link>
                                        <Link className='button' to="/cart">Continue</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className='d-flex mb-2 align-items-center gap-10'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{ "top": "-4px", "right": "-4px" }} className="badge bg-secondary text-white rounded-circle p-1.5 position-absolute">1</span>
                                        <img className="img-fluid Imgs" src={watch} alt="product" />
                                    </div>
                                    <div>
                                        <h5 className="title-price">Product Title</h5>
                                        <p className='total'>Details</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total-price'>₹1980</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Subtotal</p>
                                <p className='total-price'>₹1980</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>₹20</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
                            <h4 className='total-price'>Total</h4>
                            <h5 className='total-price'>₹2000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout