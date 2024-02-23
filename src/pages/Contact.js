import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61816.02396293806!2d75.87509973125756!3d14.45586826923828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba25726a6222e5%3A0x4a120de147c6d472!2sDavanagere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708080054257!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className='contact-title mb-4'> Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control"
                        placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number' />
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
                <div>
                  <h3 className='contact-title mb-4'> Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome />
                        <address className="mb-0">
                          Hno:277 , Near village Kabbala , Davanagere, Karnataka
                        </address></li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><IoMdCall />
                        <a href="tel:+91 8264954234">+91 8264954234</a></li>
                      <li className="mb-3 d-flex gap-15 align-items-center"><IoIosMail />
                        <a href="mailto:navdeepdahiya753@gmail.com">
                          navdeepdahiya753@gmail.com
                        </a></li>
                      <li className="mb-3 d-flex gap-15 align-items-center" ><IoMdInformationCircle />
                        <p className="mb-0">Monday – Friday 10 AM – 8 PM</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact;