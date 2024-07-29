import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import { PlayArrow } from "@mui/icons-material";

function Genres({ data }) {
  const [genresData, setGenresData] = useState(data);

  // useEffect(
  //   () => {
  //     fetch(
  //       `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setGenresData(data.items[1].mixed_items));
  //   },
  //   [],
  //   console.log("Genres", genresData)
  // );

  return (
    <>
      <Box className=" ml-5 mt-10 mb-10 text-white  flex flex-row">
        {genresData?.map((song, index) => (
          <>
            <Box key={index} component="div" className="cursor-pointer mr-10 ">
              <img
                src={song.icon || song.png_icon}
                className={`w-[100%] md:h-[74px] object-fill sm:h-[180px] rounded-[10px] cursor-pointer 
                    
                  `}
              />
              <Box className="truncate font-normal text-[black] text-base pt-2 text-center ">
                {song.title}
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
}

export default Genres;
