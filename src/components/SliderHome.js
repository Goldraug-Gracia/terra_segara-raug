"use client"

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TSImg from "./TSImg";

function SliderHome({ content }) {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  const settings = {
    dots: true,
    dotsClass:'slick-dots w-screen',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '200px',
    className: 'relative',
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: false
        }
      }
    ]
  };
  return (
    <div className="h-[500px] w-full max-sm:w-screen mx-auto rounded-xl transition-all relative slider-container">
      <div className="flex absolute h-full w-full max-sm:w-screen z-10 justify-between pointer-events-none max-sm:invisible visible">
        <div className="h-full w-1/3 bg-gradient-to-r from-white to-50%"/>
        <div className="h-full w-1/3 bg-gradient-to-l from-white to-50%"/>
      </div>
      <Slider ref={slider => {
        sliderRef = slider;
      }} {...settings} >
        {content.map((e, i)=>{
            return(
                <div key={i} className="h-[400px] max-sm:h-56 w-full text-center relative focus:outline-0 border-[16px] border-white rounded-[48px] max-sm:rounded-xl">
                    <TSImg
                        src={e.image}
                        fill
                        alt={e.title}
                        className="object-cover object-bottom h-full mx-auto -z-10 max-sm:rounded-xl"
                    />
                    <div className="absolute bottom-0 pb-5 max-sm:pb-2 w-full bg-gradient-to-t from-secondary -z-10 rounded-b-xl">
                        <h1 className="text-3xl max-sm:text-xl font-bold">{e.title}</h1>
                        <h3 className="text-xl max-sm:text-xs">{e.date}</h3>
                    </div>
                </div>
            )
        })}
      </Slider>
    </div>
  );
}

export default SliderHome;