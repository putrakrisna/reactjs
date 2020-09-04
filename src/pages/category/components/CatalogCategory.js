import React, { useState, Component } from "react";
import productBase from '../images/product-thumbnail.jpg';
import productThumbnail from '../images/product-thumbnail.jpg';
import ProductDetails from "../pages/productdetails";

import { Switch, Route, Link, useParams, useRouteMatch, useLocation } from "react-router-dom";

const products = [
  { id: "111", name: "Product111", base: {productBase}, priceReguler: "Rp. 100.000", priceSpecial: "Rp. 95.000" },
  { id: "112", name: "Product112", base: {productBase}, priceReguler: "Rp. 125.000", priceSpecial: "" },
  { id: "113", name: "Product113", base: {productBase}, priceReguler: "Rp. 75.000", priceSpecial: "" },
  { id: "114", name: "Product114", base: {productBase}, priceReguler: "Rp. 100.000", priceSpecial: "Rp. 97.000" },
  { id: "115", name: "Product115", base: {productBase}, priceReguler: "Rp. 100.000", priceSpecial: "Rp. 95.000" },
  { id: "116", name: "Product116", base: {productBase}, priceReguler: "Rp. 125.000", priceSpecial: "" },
  { id: "117", name: "Product117", base: {productBase}, priceReguler: "Rp. 75.000", priceSpecial: "" },
  { id: "118", name: "Product118", base: {productBase}, priceReguler: "Rp. 100.000", priceSpecial: "Rp. 97.000" }
];

function ProductsList() {
  let { url } = useRouteMatch();
  return (
    <>
      <h3>Order List for OrderByUrlParam</h3>
      <ul>
        {products.map(product => (
          <li>
            <Link to={`${url}/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function ProductsCategory(props) {
  let { categoryId } = useParams();
  let { url } = useRouteMatch();
  return (
    <div>
      <h3>{categoryId}</h3>
      <div className="product-items">
        <ul>
          {products.map(product => (
            <li>
              <img src={productThumbnail} className="product-image" alt={product.name} />
              <Link to={`${url}?productName=${product.name}`}>{product.name}</Link>
              <span className="reguler-price">{product.priceReguler}</span>
              <span className="special-price">{product.priceSpecial}</span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}



function CatalogCategory(props) {
  let { path } = useRouteMatch();

  let query = new URLSearchParams(useLocation().search);
  let isQueryExist = query && query.get("productName");

  return (
    <>
      <Switch>
        {!isQueryExist && (
          <div>
            <Route exact path={path}>
              <ProductsList />
            </Route>
            <Route path={`${path}/:categoryId`}>
              <ProductsCategory title={props.title}/>
              
            </Route>
          </div>
          
        )}
        {isQueryExist && (
          <div>
            <ProductDetails />
          </div>
        )}
        </Switch>
    </>
  );
}

export default CatalogCategory;
