import React, { useState, MouseEvent } from "react";
import "../SassFiles/Main.scss";
import "../components/Star";
import logo from "../images/logo.png";
import Star from "../components/Star";
import Items from "./Items";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const [brandsDisplay, setBrandsDisplay] = useState<string>("block");
  const [priceRange, setPriceRange] = useState<string>("block");
  const [ratings, setRatings] = useState<string>("block");

  const handleClickDown = (s: string) => {
    if (s === "brands") {
      setBrandsDisplay("none");
    } else if (s === "priceRange") {
      setPriceRange("none");
    } else if (s === "ratings") {
      setRatings("none");
    }
  };

  const handleClickUp = (s: string) => {
    if (s === "brands") {
      setBrandsDisplay("block");
    } else if (s === "priceRange") {
      setPriceRange("block");
    } else if (s === "ratings") {
      setRatings("block");
    }
  };

  return (
    <>
      <div className="main">
        <img src={logo} alt="Logo" className="logo" />
        <div className="container">
          <form>
            <input type="search" placeholder="Search..." className="searches" />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="boxes">
          <div className="mainBox">
            <div className="filters">
              <span className="srchRes">Search Results</span>
              <div className="filter">
                <div className="brands">
                  <span>
                    {" "}
                    <span className="brandtitle">BRAND</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 brandArrow"
                      onClick={() => handleClickDown("brands")}
                      style={{ display: brandsDisplay }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 brandArrow"
                      onClick={() => handleClickUp("brands")}
                      style={{
                        display: brandsDisplay === "block" ? "none" : "block",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                  <div
                    className="brandOptions"
                    style={{ display: brandsDisplay }}
                  >
                    <label className="containers">
                      Mango
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="containers">
                      H&M
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="brands priceRange">
                  <span>
                    {" "}
                    <span className="brandtitle">PRICE RANGE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 brandArrow"
                      onClick={() => handleClickDown("priceRange")}
                      style={{ display: priceRange }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 brandArrow"
                      onClick={() => handleClickUp("priceRange")}
                      style={{
                        display: priceRange === "block" ? "none" : "block",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                  <div className="brandOptions" style={{ display: priceRange }}>
                    <label className="containers">
                      Under 500
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="containers">
                      1000 To 3000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="brands ratings">
                  <span>
                    {" "}
                    <span className="brandtitle">RATINGS</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 brandArrow"
                      onClick={() => handleClickDown("ratings")}
                      style={{ display: ratings }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 brandArrow"
                      onClick={() => handleClickUp("ratings")}
                      style={{
                        display: ratings === "block" ? "none" : "block",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </span>
                  <div className="brandOptions" style={{ display: ratings }}>
                    <label className="containers">
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="containers">
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"grey"} />
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="containers">
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"grey"} />
                      <Star fill={"grey"} />
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="containers">
                      <Star fill={"yellow"} />
                      <Star fill={"yellow"} />
                      <Star fill={"grey"} />
                      <Star fill={"grey"} />
                      <Star fill={"grey"} />
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="containers">
                      <Star fill={"yellow"} />
                      <Star fill={"grey"} />
                      <Star fill={"grey"} />
                      <Star fill={"grey"} />
                      <Star fill={"grey"} />
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="results">
              <Items />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
