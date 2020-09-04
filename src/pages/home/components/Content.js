import React from "react";
import { Theme } from "../state";

//import React, { useState, Component } from "react";
//import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";


import WidgetBanner from "./Banner";
import WidgetProductList from "./ProductList";

const Content = () => {
  const theme = React.useContext(Theme);
  return (
    <div>
      <WidgetBanner title="Hero Banner" />
      <WidgetProductList title="New Arrival" id="newarrival" />
      <WidgetProductList title="Best Seller" id="bestseller" />
    </div>
  );
};

export default Content;
