import React, { useState, useEffect, useRef } from "react";
import "../SassFiles/Home.scss";
import LatestTrend from "./LatestTrend";
import Main from "./Main";

const Home = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (myRef.current && !myRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const trends = () => {
    setIsVisible(true);
  };
  return (
    <>
      <div className="home">
        <input
          type="text"
          className="search"
          placeholder="Search"
          onClick={trends}
        />

        {isVisible && (
          <div ref={myRef} className="latestTrends" id="latestTrends">
            <LatestTrend />
          </div>
        )}

        <div className="mainPage">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
