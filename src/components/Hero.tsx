
import React from 'react';
import Slide from "./Slide";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/image.jpg",
      title: "Trending Item",
      mainTitle: "Women's Latest fashion sale",
      price: "$20",
    },
    {
      id: 1,  // Changed IDs to be unique
      img: "/image.jpg",
      title: "Trending Item",
      mainTitle: "Women's Latest fashion sale",
      price: "$20",
    },
    {
      id: 2,  // Changed IDs to be unique
      img: "/image.jpg",
      title: "Trending Item",
      mainTitle: "Women's Latest fashion sale",
      price: "$10",
    },
    {
      id: 3,  // Changed IDs to be unique
      img: "/image.jpg",
      title: "Trending Item",
      mainTitle: "Women's Latest fashion sale",
      price: "$30",
    },
  ];

  return (
    <div className='container pt-6 lg:pt-0'>
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide
            key={item.id}  // Corrected key syntax
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
