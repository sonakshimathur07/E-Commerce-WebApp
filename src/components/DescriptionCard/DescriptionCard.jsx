import React from "react";
import "./Description.css";

function Description ({data}) {
    const { price, image, title, description, rating } = data;
    return(
        <div className="description">
            <div className="description-image">
            <img src={image} alt={title} height={230} width={230} />  
            </div>

        </div>
    )
}