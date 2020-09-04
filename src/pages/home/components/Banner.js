import React, { useState, Component } from "react";

function BannerComponent(props) {
    return (
      <>
        <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/s960x960/21457817_1689035827805136_7043087171127373310_o.jpg?_nc_cat=109&_nc_sid=19026a&_nc_ohc=6oUmUPUI01kAX_B4kaP&_nc_ht=scontent-sin6-2.xx&_nc_tp=7&oh=592f954848a03b07a76b5bc1447df412&oe=5F5FAFFC"/>
      </>
    )
  }

function Banner() {
  return (
    <div className="hero-banner">
      <style jsx="true">{`
          .hero-banner {
            max-height:300px;
            overflow:hidden;
          }
          .hero-banner img {
            width: 100%;
            height: auto;
          }
        `}</style>
      <BannerComponent />
    </div>
  )
}

export default Banner;
