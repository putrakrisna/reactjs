import React from "react";
import NumberFormat from "react-number-format";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

//import CatalogCategory from "./pages/category";

const categories = [
  { id: "1", name: "Best Seller"},
  { id: "2", name: "New Arrival" }
]
const products = [
  { id: "111", name: "Simple111", thumbnail: "https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/s960x960/21457817_1689035827805136_7043087171127373310_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_ohc=6oUmUPUI01kAX_B4kaP&_nc_ht=scontent-sin6-2.xx&_nc_tp=7&oh=592f954848a03b07a76b5bc1447df412&oe=5F5FAFFC", priceReguler: "100000"},
  { id: "112", name: "Simple112", thumbnail: "https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/s960x960/21457817_1689035827805136_7043087171127373310_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_ohc=6oUmUPUI01kAX_B4kaP&_nc_ht=scontent-sin6-2.xx&_nc_tp=7&oh=592f954848a03b07a76b5bc1447df412&oe=5F5FAFFC", priceReguler: "125000"},
  { id: "113", name: "Simple113", thumbnail: "https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/s960x960/21457817_1689035827805136_7043087171127373310_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_ohc=6oUmUPUI01kAX_B4kaP&_nc_ht=scontent-sin6-2.xx&_nc_tp=7&oh=592f954848a03b07a76b5bc1447df412&oe=5F5FAFFC", priceReguler: "75000"},
  { id: "114", name: "Simple114", thumbnail: "https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/s960x960/21457817_1689035827805136_7043087171127373310_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_ohc=6oUmUPUI01kAX_B4kaP&_nc_ht=scontent-sin6-2.xx&_nc_tp=7&oh=592f954848a03b07a76b5bc1447df412&oe=5F5FAFFC", priceReguler: "100000"}
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
      <Link to={`category/${props.id}`}>View More</Link>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/s960x960/21457817_1689035827805136_7043087171127373310_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_ohc=6oUmUPUI01kAX_B4kaP&_nc_ht=scontent-sin6-2.xx&_nc_tp=7&oh=592f954848a03b07a76b5bc1447df412&oe=5F5FAFFC" className="product-image" alt={product.name} />
              <span className="product-name">{product.name}</span>
              <span className="reguler-price"><NumberFormat value={product.priceReguler} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></span>
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
        <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/s960x960/21457817_1689035827805136_7043087171127373310_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_ohc=6oUmUPUI01kAX_B4kaP&_nc_ht=scontent-sin6-2.xx&_nc_tp=7&oh=592f954848a03b07a76b5bc1447df412&oe=5F5FAFFC" className="product-image"  />
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
        
        <Route path={`category/${props.id}`}>
          
        </Route>
      </Switch>
    </div>
  );    
}



export default WidgetProductList;