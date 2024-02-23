import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper  py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="awth-card">
              <h3 className='text-center mb-4'>Sign Up</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <CustomInput type="text" name='fname' placeholder='First Name'/>
                <CustomInput type="text" name='lname' placeholder='Last Name'/>
                <CustomInput  type="email" name='email' placeholder='Email' />
                <CustomInput type="tel" name='mobileNumber' placeholder='Mobile Number'/>
                <CustomInput type="password" name='password' placeholder='Password'/>
                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                  <button className='button border-0'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp;