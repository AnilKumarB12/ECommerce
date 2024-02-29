import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="awth-card">
                            <h3 className='text-center mb-4'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInput type="email" name='email' placeholder='Email' />
                                <CustomInput type="password" name='password' placeholder='Password'/>
                                <Link className='forgot' to='/ForgotPasswords'>Forgot Password?</Link>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link to='/SignUp' className='button border-0 sign-up'>SignUp</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login;