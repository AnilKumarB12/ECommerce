import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Fastrack m3 chip 8gb 256gb ssd with backlight</h5>
                                    <h6 className="price">₹1300</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Fastrack m3 chip 8gb 256gb ssd with backlight</h5>
                                    <h6 className="price">₹1300</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Fastrack m3 chip 8gb 256gb ssd with backlight</h5>
                                    <h6 className="price">₹1300</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist;