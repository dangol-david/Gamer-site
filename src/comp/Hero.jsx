import React from "react";
import "./hero.scss";
import ProductData from "../../data/ProductData";
import { Link, Route, Routes } from "react-router-dom";

import NavBar from "./Navbar";


function Hero() {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://themes.pixelstrap.com/multikart/assets/images/home-banner/41.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://themes.pixelstrap.com/multikart/assets/images/home-banner/42.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="card-group container p-4 position-relative">
        <div className="card m-1">
          <img
            src="https://themes.pixelstrap.com/multikart/assets/images/game/banner/2.jpg"
            className="card-img-top "
            alt="..."
          />
          <div class="card-img-overlay position-absolute bottom-50 end-50">
            <h4 class="card-title text-danger text-end">FOR WINDOWS</h4>
            <h2 class="card-title text-danger text-end">Save 10%</h2>
          </div>
        </div>
        <div className="card m-1 ">
          <img
            src="https://themes.pixelstrap.com/multikart/assets/images/game/banner/1.jpg"
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <div class="card-img-overlay">
              <h4 class="card-title text-danger ">FOR PSP</h4>
              <h2 class="card-title text-danger ">OFF 15%</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h5 className="text-center text-danger fs-5">Special Offer</h5>
          <h1 className="text-center ">TOP COLLECTION</h1>
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos,
            mollitia laudantium deleniti <br /> non dignissimos blanditiis
            dolores hic suscipit perferendis?
          </p>
        </div>

        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                New Products
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Featured Products
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Best Seller
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container">
                <div className="row">
                  {ProductData.slice(0, 15).map((a) => (
                    <div className=" col" key={a.id}>
                      <img  src={a.image} alt="" />
                      <p className="text-center pt-1 fw-semibold para">{a.title}</p>
                      <p className="text-center para1">${a.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
               <div className="container">
                <div className="row">
                  {ProductData.slice(0, 15).map((a) => (
                    <div className=" col" key={a.id}>
                      <img  src={a.image} alt="" />
                      <p className="text-center pt-1 fw-semibold para">{a.title}</p>
                      <p className="text-center para1">${a.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
               <div className="container">
                <div className="row">
                  {ProductData.slice(0, 15).map((a) => (
                    <div className=" col" key={a.id}>
                      <img  src={a.image} alt="" />
                      <p className="text-center pt-1 fw-semibold para">{a.title}</p>
                      <p className="text-center para1">${a.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {ProductData.slice(0, 20).map((a) => (
            <div className=" col">
              <img className="w-125" src={a.image} alt="" />
              <h4 className="p-3">{a.title}</h4>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
}

export default Hero;
