import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { addtoCart } from "../../../redux/action/cart";
import { useFormik } from "formik";
import NumberFormat from 'react-number-format';
import * as Yup from "yup";
import productBase from '../../../images/product-thumbnail.jpg';
import { Link, useLocation } from "react-router-dom";




function ProductDetail(props) {
  let query = new URLSearchParams(useLocation().search);

  const dispatch = useDispatch();

  const handleAddtocart = (productId, productName, productImage, productPrice) => {
      dispatch(
        addtoCart({
          id: productId,
          name: productName,
          img : productImage,
          price : productPrice,
          qty : parseInt(document.getElementById("qty").value)
        })
      );
    };

  return (
    
    <div className="product-details">
        <style jsx="true">{`
            .product-image-media, .product-info {
                width: 50%;
            }
            .product-image-media {
                float:left;
                text-align:center;
            }
            .product-image-media img {
                width:90%;
                height:auto;
                margin:0 auto;
            }
            .product-info {
                float:right;
            }
            .product-description {
                margin-bottom:20px;
            }
            .qty, .addto-cart {
                height: 40px;
            }
            .qty {
                margin-right:10px;
                min-width:50px;
            }
            .addto-cart {
                text-transform: uppercase;
            }
        `}</style>
        <div className="product-image-media"><img src={productBase}/></div>
        <div className="product-info">
            <h3>{query.get("productName")}</h3>
            <div className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div className="product-price">
              <p className="old-price"><NumberFormat value={query.get("productPriceReguler")} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></p>
            </div>
            <div className="product-addtocart">
          
                <input type="number" name="qty" min="1" max="5" className="qty" id="qty" defaultValue="1"/>
                <button onClick={() => handleAddtocart(query.get("productId"), query.get("productName"), query.get("productPriceReguler"), query.get("productPriceReguler"))}>Add to Cart</button>
            </div>
        </div>
      
    </div>
  )
}

function ProductDetails() {
  let query = new URLSearchParams(useLocation().search);
  let isQueryExist = query && query.get("productId");


    
  return (
    <div>
      {isQueryExist && (
        
        <ProductDetail />
      )}
    </div>
  );
}

export default ProductDetails;