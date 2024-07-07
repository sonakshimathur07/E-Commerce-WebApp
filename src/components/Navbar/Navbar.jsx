import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-container">
                <div className="Navbar-container-banner">
                    <h4>Black Friday Banner</h4>
                </div>
                <div class="Navbar-container-welcome">
                  <div class="Navbar-container-welcome-left">
                    <h5>Welcome to shopping mart!</h5>
                  </div>
                <div class="Navbar-container-welcome-right">
                  <div class="Navbar-container-welcome-right-Home">Home</div>
                  <div class="Navbar-container-welcome-right-Shop">Shop</div>
                  <div class="Navbar-container-welcome-right-Product">Product</div>
                  <div class="Navbar-container-welcome-right-Categories">Categories</div>
                  <div class="Navbar-container-welcome-right-Brands">Brands</div>
                  <div class="Navbar-container-welcome-right-About">About</div>    
               </div>
           </div>
           <div className="Navbar-container-main">
             <div className="Navbar-container-main-logo">
                  <h2>MiMingo</h2>
             </div>
             <div className="Navbar-container-main-phone">
                  <i class="fa-solid fa-phone"></i>
             </div>
             <div className="Navbar-container-main-contact">
                  <h5>Contact Us</h5>
                  <h6>+8801675674</h6>
             </div>
             <div className="Navbar-container-main-contact-search">
                  <input className="input" placeholder="Search latest styles" />
                  
             </div>
             <div className="Navbar-container-main-icons">
                  <i class="fa-regular fa-user"></i>
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-cart-shopping"></i>
             </div>
           </div>
         </div>
        </div>
    );
}

export default Navbar;