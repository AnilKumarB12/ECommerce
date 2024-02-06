import React, { useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid]=useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul>
                    <li>Mobile</li>
                    <li>Watch</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check d-flex align-items-center p-0" >
                      <input className="form-check-input mr-1  position-relative" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        In Stock(1)
                      </label>
                    </div>
                    <div className="form-check p-0">
                      <input type="checkbox" className="form-check-input mr-1 position-relative" value="" id="flexCheckChecked" defaultChecked />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Out of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput1"
                        placeholder="From"
                      />
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput2"
                        placeholder="To"
                      />
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Sizes</h5>
                  <div>
                    <div className="form-check d-flex align-items-center p-0" >
                      <input className="form-check-input mr-1 position-relative" type="checkbox" value="" id="color-1" />
                      <label className="form-check-label" htmlFor="color-1">
                        S[2]
                      </label>
                    </div>
                    <div className="form-check p-0" >
                      <input className="form-check-input mr-1  position-relative" type="checkbox" value="" id="color-2" />
                      <label className="form-check-label" htmlFor="color-2">
                        M[2]
                      </label>
                    </div>
                  </div>

                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smartphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tv</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className=" img-fluid" alt="watch"></img>
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>₹300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className=" img-fluid" alt="watch"></img>
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>₹300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{"width":"100px"}}>Sort By</p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected>Best selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option> </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalProducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                    <img  onClick={()=>{setGrid(3)}} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                    <img onClick={()=>{setGrid(4)}}  src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                      <img  onClick={()=>{setGrid(6)}} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={()=>{setGrid(12)}}  src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className='d-flex gap-10 flex-wrap'>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
