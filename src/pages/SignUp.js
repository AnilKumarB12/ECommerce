import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper  py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="awth-card">
              <h3 className='text-center mb-3'>Sign Up</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div className='mt-2'>
                  <input type="text" name='fname' placeholder='First Name' className='form-control' />
                </div>
                <div className='mt-2'>
                  <input type="text" name='lname' placeholder='Last Name' className='form-control' />
                </div>
                <div>
                  <input type="email" name='email' placeholder='Email' className='form-control' />
                </div>
                <div>
                  <input type="tel" name='mobileNumber' placeholder='Mobile Number' className='form-control' />
                </div>
                <div className='mt-2'>
                  <input type="password" name='password' placeholder='Password' className='form-control' />
                </div>
                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                  <button className='button border-0'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;