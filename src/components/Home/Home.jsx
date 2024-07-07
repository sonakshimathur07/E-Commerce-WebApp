import React from "react";
import Navbar from "../Navbar/Navbar";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";


function Home () {
   return(
      <div className="main">
         <div className="main-page">
         <Navbar />
         <Breadcrumbs />
         <Products />
         <Footer />
         </div>
      </div>
   )
}

export default Home;