import React from "react";
import "./CustomCards.css";
import { Rating } from "@mui/material";

function CustomCards({ data }) {
    const { price, image, title, description, rating } = data;
    return (
        <div className="customCard">
            <div className="customCard-image">
                <img src={image} alt={title} height={230} width={230} />
            </div>
            
               <div className="customCard-title">
                   {title.substring(0,15)}...
               </div>
               <div className="customCard-desc">
                   {description.substring(0,50)}...
               </div>
            <div className="customCard-price">
                <div className="customCard-price-first">
                    <div className="customCard-price-one">
                            ${price}
                    </div>
                    <div className="customCard-price-two">
                        20% off
                    </div>
                </div>
                <div className="customCard-stars">
                    <Rating className="yes"
                    value={rating.rate}
                    /> ({rating.count}) 
                </div>   
            </div>
           <div className="customCard-add">
                <button className="customCard-add-button">
                    Add To Cart
                </button>
           </div>
        </div>
    );
}

export default CustomCards;