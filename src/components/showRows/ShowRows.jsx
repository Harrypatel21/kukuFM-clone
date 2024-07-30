import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PlayArrow } from "@mui/icons-material";

function ShowRows({ title }) {
  const [showRowsData, setRowData] = useState([]);

  let url = "";
  if (title === "Top 10 in India") {
    url = `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/groups/top-10-in-india/shows/?preferred_langs=hindi&page=1&lang=engli`;
  }
  if (title === "VIP Shows") {
    url = `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/groups/vip-shows/shows/?preferred_langs=hindi&page=1&lang=engli`;
  }
  if (title === "Trending Now") {
    url = `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/groups/trending-now/shows/?preferred_langs=hindi&page=1&lang=engli`;
  }
  if (title === "Best in Romance") {
    url = `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/groups/best-in-romance/shows/?preferred_langs=hindi&page=1&lang=engli`;
  }
  if (title === "Best in Motivation") {
    url = `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/groups/best-in-motivation/shows/?preferred_langs=hindi&page=1&lang=engli`;
  }
  if (title === "Best in Religion") {
    url = `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/groups/best-in-religion/shows/?preferred_langs=hindi&page=1&lang=engli`;
  }
  if (title === "Best in Horror") {
    //"excited"
    url = `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/groups/best-in-horror/shows/?preferred_langs=hindi&page=1&lang=engli`;
  }

  useEffect(
    () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setRowData(data.shows));
    },
    [],
    console.log("ShowROwData", showRowsData)
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1000, min: 900 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 3,
    },
  };

  return (
    <div>
      <Box className="px-4 md:px-8 xl:px-5 sm:mt-8 mt-4">
        <Box className="font-medium mb-4 flex justify-between items-center text-[black]  pl-[10px]">
          <Typography
            className="cursor-pointer text-[24px] font-[500]"
            sx={{ fontSize: "20px" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Carousel
            // centerMode={true}
            swipeable={true}
            showDots={false}
            slidesToSlide={5}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container [&>img]:object-contain"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px pr-[10px] pl-[10px]"
          >
            {showRowsData?.map((song, index) => (
              <Box
                key={index}
                component="div"
                // onClick={() => handleClick(title, index)}
                className="cursor-pointer "
              >
                <img
                  src={song.image}
                  className={`w-[100%] md:h-[192.7px] object-fill sm:h-[180px] rounded-[10px] cursor-pointer ${
                    title === "Artists" && "rounded-[50%] w-[90%] "
                  } `}
                />

                <Box
                  className={`absolute top-0 left-2 md:h-[192.7px] sm:h-[180px] w-[94%] rounded-[10px] bg-[#00000099] flex flex-col items-center justify-center opacity-0 transition-[opacity] duration-[0.40s] hover:opacity-100 [&>*]:translate-y-[20px] [&>*]:transition-transform [&>*]:duration-[0.50s] [&>*]:hover:translate-y-0 backdrop-blur-[1.5px] pb-[20px]  `}
                >
                  <Box className="truncate font-normal text-[#f7f5f5] text-base text-center w-[150px] pb-[5px] ">
                    {song.title || song.name}
                  </Box>
                  <PlayArrow
                    className="text-[#ed1c24] bg-white rounded-full p-2 h-[60px] w-[60px] "
                    sx={{ width: "40px", height: "40px" }}
                  />
                </Box>

                {/* <Box className=" truncate font-normal text-[black] text-base text-left pt-2 ">
                  {song.title || song.name}
                </Box> */}
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
}

export default ShowRows;
