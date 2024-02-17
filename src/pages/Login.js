import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <div className="login-wrapper  py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="awth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className='form-control' />
                                </div>
                                <div className='mt-2'>
                                    <input type="password" name='password' placeholder='Password' className='form-control' />
                                </div>
                                <Link  className='forgot' to='/ForgotPasswords'>Forgot Password?</Link>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link to='/SignUp' className='button border-0 sign-up'>SignUp</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;