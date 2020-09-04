import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./reducers/homeReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  home: homeReducer,
  user: userReducer,
  cart: cartReducer,
  product: productReducer
});

const middlewares = applyMiddleware(thunk);

const stores = createStore(
  reducers,
  undefined,
  composeWithDevTools(middlewares)
);

export default stores;
