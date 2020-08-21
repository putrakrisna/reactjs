import React, { useState, Component } from "react";
import { Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import WidgetBanner from "../widget/WidgetBanner";
import WidgetProductList from "../widget/WidgetProductList";


function Home() {
  return (
    <>
      <WidgetBanner title="Hero Banner" />
      <WidgetProductList title="New Arrival" id="newarrival" />
      <WidgetProductList title="Best Seller" id="bestseller" />
    </>
  );
}

export default Home;
