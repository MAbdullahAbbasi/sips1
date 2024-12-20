import React from 'react'
import SwiperSlider from './SwiperSlider'

const Header = () => {
  return (
    <>
      <div className="swiper-container blog grid-view mb-16" data-margin="30" data-autoplay="true" data-autoplaytime="7000" data-dots="true" data-items-lg="2" data-items-md="1" data-items-xs="1">
          <div className="swiper">
            <div className="swiper-wrapper">
              <SwiperSlider cardImage="./assets/img/photos/tb1.jpg" title="Card 1" cardTag="Study"/>
              <SwiperSlider cardImage="./assets/img/photos/tb1.jpg" title="Card 2" cardTag="Study"/>
              <SwiperSlider cardImage="./assets/img/photos/tb1.jpg" title="Card 3" cardTag="Study"/>
              <SwiperSlider cardImage="./assets/img/photos/tb1.jpg" title="Card 4" cardTag="Study"/>
              <SwiperSlider cardImage="./assets/img/photos/tb1.jpg" title="Card 4" cardTag="Study"/>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Header
