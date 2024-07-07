import React, { useEffect, useState } from "react";
import "./Products.css";
import CustomCards from "../CustomCards/CustomCards";
import axios from "axios";

function  Products() {

    const [data, setdata] = useState([]);

    const getApiData = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res.data)
            setdata(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    };

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <div>
            <div className="products">
                {
                    data.length>0 ?
                    data.map((d, i) => {
                        return(
                            <CustomCards key={i} data={d} />
                        )
                    })
                    :"no data found"}
            </div>
        </div>
        
    )
};

export default  Products;