import React from "react";
import { LatestTrends, PopularSuggestions, Data } from "./FakerApi";
import '../SassFiles/LatestTrend.scss';

const LatestTrend = () => {
  const LT = LatestTrends;
  const PS = PopularSuggestions;

  return (
    <>
      <span className="title">Latest trends</span>
      <div className="latestTrend">
        <div className="latest">
          {LT.map((product, idx) => (
            <>
              <div key={idx} className="box">
                <img src={product.img} alt={product.desc} />
                <span>{product.desc}</span>
              </div>
            </>
          ))}
        </div>

        <div className="popular">
          <div className="suggestion">Popular suggestions</div>
          {PS.map((tag, idx) => (
            <>
              <div key={idx} className="tagBox">
                <div className="tag">{tag.tag}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestTrend;
