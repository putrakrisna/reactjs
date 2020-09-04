import React from "react";
import productThumbnail from '../images/product-thumbnail.jpg';
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import CatalogCategory from "../pages/category";

const categories = [
  { id: "1", name: "Best Seller"},
  { id: "2", name: "New Arrival" }
]
const products = [
  { id: "111", name: "Simple111", thumbnail: {productThumbnail}, priceReguler: "Rp. 100.000", priceSpecial: "Rp. 95.000" },
  { id: "112", name: "Simple112", thumbnail: {productThumbnail}, priceReguler: "Rp. 125.000", priceSpecial: "" },
  { id: "113", name: "Simple113", thumbnail: {productThumbnail}, priceReguler: "Rp. 75.000", priceSpecial: "" },
  { id: "114", name: "Simple114", thumbnail: {productThumbnail}, priceReguler: "Rp. 100.000", priceSpecial: "Rp. 97.000" }
];


function ProductList(props) {
  

  return (
    <>
      <style jsx="true">{`
        .product-items h3 {
          display:inline-block;
        }
        .product-items > a {
          float:right;
          display:block;
        }
        .product-items ul li {
          display: block;
          width: calc(100%/4);
          float:left;
        }
        .product-items ul li span, .product-items ul li a {
          display:block;
          text-align:center;
        }
        .product-items ul li span, .product-items ul li .product-image {
          margin:0 5px;
        }
        .product-items ul li .product-image {
          width:100%;
          height:auto;
          
        }
        .product-items ul li span.reguler-price {
          
        }
      `}</style>
      <div className="product-items">
      <h3>{props.title}</h3>
      <Link to={`CatalogCategory/${props.id}`}>View More</Link>
        <ul>
          {products.map(product => (
            <li>
              <img src={productThumbnail} className="product-image" alt={product.name} />
              <span className="product-name">{product.name}</span>
              <span className="reguler-price">{product.priceReguler}</span>
              <span className="special-price">{product.priceSpecial}</span>
            </li>
          ))}
        </ul>
      
      </div>
    </>
  );
}

function ProductItem() {
  return (
    <div className="catalog-product-view">
      <div className="product-image-media">
        <img src={productThumbnail} className="product-image"  />
      </div>
      <div className="product-info">
        
      </div>
      
    </div>
  )
}

function CategoryList(props) {
  let { categoryId } = useParams();
  
  return (
    <>
      <h3>{props.title}</h3>
      <div>urlParam: {categoryId}</div>
    </>
  )
}

function WidgetProductList(props) {
  let { path } = useRouteMatch();
  return(
    <div>
      
      <Switch>
        <Route exact path={`${path}`}>
          <ProductList title={props.title} id={props.id}/>
          
        </Route>
        
        <Route path={`CatalogCategory/${props.id}`}>
          <CatalogCategory title={props.title}/>
        </Route>
      </Switch>
    </div>
  );    
}



export default WidgetProductList;