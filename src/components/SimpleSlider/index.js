import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.css"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      autoplay: true,
    };
    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div>
            <h3>About</h3>
          </div>
          <div>
            <h3>Quiz With Your Friends</h3>
          </div>
          <div>
            <h3>Sell Your Soul</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
