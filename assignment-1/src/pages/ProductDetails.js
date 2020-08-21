import React from "react";
import productBase from '../images/product-thumbnail.jpg';
import { Link, useRouteMatch, useLocation } from "react-router-dom";

function ProductDetail() {
  let query = new URLSearchParams(useLocation().search);
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
            <div>
                <input type="number" name="qty" min="1" max="5" className="qty" />
                <button type="submit" className="addto-cart">Add to Cart</button>
            </div>
        </div>
      
    </div>
  )
}

function ProductDetails() {
  let query = new URLSearchParams(useLocation().search);
  let isQueryExist = query && query.get("productName");
  return (
    <div>
      {isQueryExist && (
        <ProductDetail />
      )}
    </div>
  );
}

export default ProductDetails;