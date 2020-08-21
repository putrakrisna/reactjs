import React, { useState, Component } from "react";

function CartItems(props) {
  
  return (
    <>
      <h3>{props.title}</h3>
    </>
  )
}

function Cart() {
  return (
    <>
      <CartItems title="Shopping Cart"/>
    </>
  );
}

export default Cart;
