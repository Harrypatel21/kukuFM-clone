import React, { useState, useEffect, useRef } from "react";
import Header from "./header/Header";
import CarouselCom from "./carousel/CarouselCom";
import Genres from "./genres/Genres";
import ShowRows from "./showRows/ShowRows";
import Footer from "./Footer";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const vipShowsRef = useRef(null);
  const trendingRef = useRef(null);
  const romanceRef = useRef(null);
  const motivationRef = useRef(null);
  const religionRef = useRef(null);
  const horrorRef = useRef(null);

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

  const handleHeaderClick = (sectionId) => {
    switch (sectionId) {
      case "vipShows":
        vipShowsRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "trending":
        trendingRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "romance":
        romanceRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "motivation":
        motivationRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "religion":
        religionRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "horror":
        horrorRef.current.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header onClick={handleHeaderClick} />
          <CarouselCom data={data[0]} />
          <Genres data={data[1].mixed_items} />
          <ShowRows title={"Top 10 in India"} />
          <div ref={vipShowsRef}>
            <ShowRows title={"VIP Shows"} />
          </div>
          <div ref={trendingRef}>
            {" "}
            <ShowRows title={"Trending Now"} />
          </div>
          <div ref={romanceRef}>
            <ShowRows title={"Best in Romance"} />
          </div>
          <div ref={motivationRef}>
            <ShowRows title={"Best in Motivation"} />
          </div>
          <div ref={religionRef}>
            <ShowRows title={"Best in Religion"} />
          </div>
          <div ref={horrorRef}>
            <ShowRows title={"Best in Horror"} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
