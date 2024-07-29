import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Slider from "react-slick";
import { Box } from "@mui/material";

const CarouselCom = ({ data }) => {
  const [carouselData, setCarouselData] = useState(data.banners);

  // useEffect(
  //   () => {
  //     fetch(
  //       `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setCarouselData(data.items[0].banners));
  //   },
  //   [],
  //   console.log(carouselData)
  // );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <Box id="new">
      <Carousel
        centerMode={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        // autoPlay={false}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container [&>img]:object-contain "
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px pr-[15px] pt-[20px]"
      >
        {carouselData.map((data) => (
          <img
            key={data.id}
            src={data.other_images.landscape_image}
            className=" w-[100%] md:h-[280px] object-fill sm:h-[180px] rounded-[10px] cursor-pointer "
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselCom;
