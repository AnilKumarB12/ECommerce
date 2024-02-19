import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Names"} />
            <BreadCrumb title="Dynamic Blog Names" />
            <div className="blog-wrapper home-wrapper-2 py-5" >
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-9">
                            <div className="single-blog-card">
                                <Link className='d-flex  align-items-center gap-10' to="/blogs"><IoArrowBackOutline className='fs-5 ' />Go back to Blogs</Link>
                                <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                                <img src='/images/blog-1.jpg' className='img-fluid w-100 my-4' alt="blog" />
                                <p>You are only good as your last collection which is an enormous pressure I think there is something about it its not something people need fantastic relationship with money</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog