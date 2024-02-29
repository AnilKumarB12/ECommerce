import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper  py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="awth-card">
                <h3 className='text-center mb-3'>Reset Password</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <CustomInput type="password" name='password' placeholder='Password'  />
                  <CustomInput type="password" name='ConfirmPassword' placeholder='Confirm Password'  />
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button border-0'>Reset</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container >
    </>
  )
}

export default ResetPassword