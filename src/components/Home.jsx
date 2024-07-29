import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import CarouselCom from "./carousel/CarouselCom";
import Genres from "./genres/Genres";
import ShowRows from "./showRows/ShowRows";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const response = await fetch(
        `https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=english`
      );
      const data = await response.json();
      setData(data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <CarouselCom data={data[0]} />
          <Genres data={data[1].mixed_items} />
          <ShowRows title={"Top 10 in India"} />
          <ShowRows title={"VIP Shows"} />
          <ShowRows title={"Trending Now"} />
          <ShowRows title={"Best in Romance"} />
          <ShowRows title={"Best in Motivation"} />
          <ShowRows title={"Best in Religion"} />
          <ShowRows title={"Best in Horror"} />
        </>
      )}
    </div>
  );
}

export default Home;
