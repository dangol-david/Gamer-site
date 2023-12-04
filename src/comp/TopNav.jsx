import React from "react";
import "./topnav.scss";

function TopNav() {
  return (
    <>
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 pt-2 pb-0 d-flex justify-content-start">
              <p>Welcome to Our store Multikart</p>
              <p><i class="fa fa-phone" aria-hidden="true"></i>   Call Us: 123 - 456 - 7890</p>
          </div>
          <div className="col  pt-2 pb-0 d-flex justify-content-end">
          <a href="">
          <i className="fa fa-heart text-secondary" aria-hidden="true"></i>
          <i className="fa fa-user ps-3 pr-0 text-secondary" aria-hidden="true"></i>
         
          </a>
          <p className="ps-2">My Account</p>
          </div>
          
        </div>
      </div>
     
    </section>
    </>
  );
}

export default TopNav;
