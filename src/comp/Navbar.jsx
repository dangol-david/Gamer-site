import React from "react";
import "./Navbar.scss";
import { Link, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Category from "../Pages/Category";
import Catdata from "../../data/Catdata";


function Navbar() {
  return (
    <>
      <div className="navbar1 ">
        <div className="container ">
          <div className="row  " >
            
              <nav className="navbar navbar-expand ">
                <div>
                <i className="fa fa-bars fs-4 pt-2 pe-3" aria-hidden="true"></i>
              <a href="Home" className="pe-5">
                <img
                  src="https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png"
                  alt=""
                />
              </a>
                </div>
                <div
                  className="collapse navbar-collapse pe-4  fw-semibold pt-3 d-flex justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  gap-3">
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Category
                      </a>
                      <ul className="dropdown-menu">
                        {Catdata.slice(0,5).map((a)=>
                        <li>
                          <Link className="dropdown-item" to={`/cat/${a}`}>{a}</Link>
                        </li>
                        )}
                        
                        
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Feature
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                     Shop
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Product
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div>
                <i className="fa fa-search fs-4 " aria-hidden="true"></i>
              <i className="fa fa-cog fs-4 ps-4" aria-hidden="true"></i>
              <i className="fa fa-shopping-cart fs-4 ps-4" aria-hidden="true"></i>
                </div>
              </nav>
            </div>

            
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/cat/:cid" element={<Category/>}/>
        </Routes>
      
    </>
  );
}

export default Navbar;
