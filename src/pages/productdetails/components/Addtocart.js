import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../action";
import { useFormik } from "formik";
import { Link, useRouteMatch, useLocation } from "react-router-dom";

const formRegister = useFormik({
    initialValues: {
        qty: ""
    }
    });

function Addtocart() {
    
    
  return (
    <div className="product-addtocart">
        <form onSubmit={formRegister.handleSubmit}>
            <div>
                <input type="number" name="qty" min="1" max="5" className="qty" />
                <button type="submit" className="addto-cart" >Add to Cart</button>
            </div>
        </form>
        
      
    </div>
  );
}

export default Addtocart;