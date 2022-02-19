import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Buy from "../../Assets/img/Buy.svg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1304,
          settings: {
            slidesToShow: 2,
            slidesToScroll:2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Slider">
        <Slider {...settings}>
          <div className="item">
            <li>
              <div className="img_wrapper">
                <Image className="image" src={Buy} alt="vector" />
              </div>
              <h4>Ilovani yuklab oling</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                magnis facilisis donec etiam dignissim sodales duis ac. At quis
                odio amet velit commodo donec donec
              </p>
            </li>
          </div>
          <div className="item">
            <li>
              <div className="img_wrapper">
                <Image className="image" src={Buy} alt="vector" />
              </div>
              <h4>Ilovani yuklab oling</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                magnis facilisis donec etiam dignissim sodales duis ac. At quis
                odio amet velit commodo donec donec
              </p>
            </li>
          </div>
          <div className="item">
            <li>
              <div className="img_wrapper">
                <Image className="image" src={Buy} alt="vector" />
              </div>
              <h4>Ilovani yuklab oling</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                magnis facilisis donec etiam dignissim sodales duis ac. At quis
                odio amet velit commodo donec donec
              </p>
            </li>
          </div>
        </Slider>
      </div>
    );
  }
}
