import React, { useState, Component } from "react";
import ProductDetails from "../../../pages/productdetails";
import productThumbnail from '../../../images/product-thumbnail.jpg';
import NumberFormat from "react-number-format";
import { Switch, Route, Link, useParams, useRouteMatch, useLocation } from "react-router-dom";

const products = [
  { id: "111", name: "Product111", priceReguler: "100000" },
  { id: "112", name: "Product112", priceReguler: "125000"},
  { id: "113", name: "Product113", priceReguler: "75000" },
  { id: "114", name: "Product114", priceReguler: "100000"},
  { id: "115", name: "Product115", priceReguler: "100000"},
  { id: "116", name: "Product116", priceReguler: "125000"},
  { id: "117", name: "Product117", priceReguler: "75000"},
  { id: "118", name: "Product118", priceReguler: "100000"}
];

function ProductsList() {
  let { url } = useRouteMatch();
  return (
    <>
      <h3>Order List for OrderByUrlParam</h3>
      <ul>
        {products.map(product => (
          <li >
            <Link to={`${url}/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function ProductsCategory() {
  let { categoryId } = useParams();
  let { url } = useRouteMatch();
  return (
    <div>
      <h3>{categoryId}</h3>
      <div className="product-items">
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <img src={productThumbnail} className="product-image" alt={product.name} />
              <Link to={`${url}?productId=${product.id}&productName=${product.name}&productPriceReguler=${product.priceReguler}`}>{product.name}</Link>
              <span className="reguler-price"><NumberFormat value={product.priceReguler} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}



function Content(props) {
  let { path } = useRouteMatch();

  let query = new URLSearchParams(useLocation().search);
  let isQueryExist = query && query.get("productId");

  return (
    <>
      <Switch>
        {!isQueryExist && (
          <>
            <Route exact path={path}>
              <ProductsList />
            </Route>
            <Route path={`${path}/:categoryId`}>
              <ProductsCategory title={props.title}/>
            </Route>
          </>
          
        )}
        {isQueryExist && (
          
            <ProductDetails/>
          
        )}
        </Switch>
    </>
  );
}

export default Content;
