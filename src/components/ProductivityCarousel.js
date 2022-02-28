import React, { Component } from 'react';
import Slider from 'react-slick';

export default class ProductivityCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      centerMode: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              class="techstack-logo"
              src="../../visual-studio-code.svg"
              alt="vscode"
            />
          </div>
          <div>
            <img
              class="techstack-logo"
              src="../../office-icon.svg"
              alt="office"
            />
          </div>
          <div>
            <img class="techstack-logo" src="../../dropbox.svg" alt="dropbox" />
          </div>
          <div>
            <img
              class="techstack-logo"
              src="../../visual-studio-code.svg"
              alt="vscode"
            />
          </div>
          <div>
            <img
              class="techstack-logo"
              src="../../office-icon.svg"
              alt="office"
            />
          </div>
          <div>
            <img class="techstack-logo" src="../../dropbox.svg" alt="dropbox" />
          </div>
        </Slider>
      </div>
    );
  }
}
