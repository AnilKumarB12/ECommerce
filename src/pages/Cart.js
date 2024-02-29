import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import { MdDelete } from "react-icons/md";
import watch from "../images/watch.jpg";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className=" cart-header d-flex py-3 justify-content-between align-items-center">
              <h4 className='cart-col-1'>Product</h4>
              <h4 className='cart-col-2'>Price</h4>
              <h4 className='cart-col-3'>Quantity</h4>
              <h4 className='cart-col-4'>Total</h4>
            </div>
            <div className=" cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
              <div className='cart-col-1 gap-15 d-flex align-items-center'>
                <div className='w-25'>
                  <img src={watch} className='img-fluid' alt="productImage" />
                </div>
                <div className='w-75'>
                  <p>gg</p>
                  <p>Size: </p>
                  <p>Color: </p></div>
              </div>
              <div className='cart-col-2'>
                <h5 className="price">₹ 222</h5>
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                <div><input className="form-control" type="number" name="" id="" min={1} max={10} defaultValue={1} /></div>
                <div><MdDelete className='fontLarge text-danger' /></div>
              </div>
              <div className='cart-col-4'>
                <h5 className="price">₹ 222</h5>
              </div>
            </div>
            <div className=" cart-data d-flex py-3 mb-2 justify-content-between align-items-center">
              <div className='cart-col-1 gap-15 d-flex align-items-center'>
                <div className='w-25'>
                  <img src={watch} className='img-fluid' alt="productImage" />
                </div>
                <div className='w-75'>
                  <p >gg</p>
                  <p>Size:</p>
                  <p>Color:</p>
                </div>
              </div>
              <div className='cart-col-2'>
                <h5 className="price">₹ 222</h5>
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                <div><input className="form-control" type="number" name="" id="" min={1} max={10} defaultValue={1} /></div>
                <div><MdDelete className='fontLarge text-danger' /></div>
              </div>
              <div className='cart-col-4'>
                <h5 className="price">₹ 222</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-3">
            <div className="d-flex justify-content-between align-items-center " >
              <Link to="/product" className='button'>Continue Shopping</Link>
              <div className='d-flex flex-column align-items-end'>
                <h4 className='subTotal'>Subtotal: ₹ 222</h4>
                <p className='mt-1'>Taxes and shipping charges calculated at checkout</p>
                <Link to="/checkout" className='button mt-3'>Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart