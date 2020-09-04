import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";
//import { removeProduct } from "../../../redux/action/cart";


 
const Cart = () => {
    const data = useSelector((state) => state.cart);
//    const subTotal = dataCart.cart.reduce((totalPrice, product) => totalPrice + ( product.price * product.qty) , 0);

    const dispatch = useDispatch();
    /*const handleRemove = (productId) => {
      dispatch(
        removeProduct({
          id: productId
        })
      );
    };*/
  
   return (
       <>
           <div className="cart-wrapper">
            <h3 className="title">Shopping Cart</h3>
            {data &&
                data.cart.length > 0 ?
                data.cart.map((item, index) => 
                    <div className="item" key={index}>
                        <div className="images">
                            <img src={item.img} alt={item.name}/>
                        </div>
                        <div className="info">
                            <div className="product-name">{item.name}</div>
                            <span>sku : {item.id}</span>
                            <div className="price"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></div>
                            <div className="total">
                            <span>Qty : {item.qty}</span>
                            </div>
                        </div>
                        <div className="subtotal"><NumberFormat value={item.price * item.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></div>
                        
                    </div>

                ) : <div className="empty-cart">No item</div>
            }

            
            
            
        </div>
       </>
   );
};
 
export default Cart;