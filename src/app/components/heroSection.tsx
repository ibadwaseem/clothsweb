"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const HeroSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/bg1.jpg", // Fixed the file extension typo (from `.ipg` to `.jpg`)
      title: "Trending Items",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$15",
    },
    {
      id: 1,
      img: "/bg1.jpg", // This will need a fallback image handling
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$20",
    },
    {
      id: 2,
      img: "/bg1.jpg",
      title: "Sale Offer",
      mainTitle: "MEN'S FASHION WINTER SALE",
      price: "$10",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0  mx-auto  items-center py-4">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id} // Removed quotes
              img={item.img} // Removed quotes
              title={item.title} // Removed quotes
              mainTitle={item.mainTitle} // Removed quotes
              price={item.price} // Removed quotes
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
