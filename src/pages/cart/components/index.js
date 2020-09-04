import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";
//import { removeProduct } from "../../../redux/action/cart";
import { Link, useRouteMatch } from 'react-router-dom';


 
function Cart() {
    const data = useSelector((state) => state.cart);
    let { url } = useRouteMatch();

    const dispatch = useDispatch();
    
    const [datacart, setDataCart] = useState([]);
    useEffect(() => {
        const getData = () => {
            for (let key in data.addtoCart) {
                setDataCart(prevArray => [...prevArray,
                {
                    img: data.addtoCart[key].data.img,
                    name: data.addtoCart[key].data.name,
                    price: data.addtoCart[key].data.price,
                    qty: data.addtoCart[key].data.qty
                },
                ]);
            }
        };
        getData();
    }, []);
  
   return (
       <>
           <div className="cart-wrapper">
            <h3 className="title">Shopping Cart</h3>
            <style jsx="true">{`
            .cart-wrapper {}
            .cart {
                width:100%;
            }
            .cart th {
                text-align:left;
            }
        `}</style>
            {datacart.length > 0 ? (
                <table className="cart">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {datacart.map((val, index) => (
                                <tr key={index}>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{val.qty}</td>
                                    <td><NumberFormat value={val.qty * val.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                                </tr>
                            ))}
                </tbody>
            </table>
            ) : (
                    <p>Cart Empty</p>
                )}
            
            
            
            
        </div>
       </>
   );
};
 
export default Cart;