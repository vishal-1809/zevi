import React, { useState } from "react";
import { LatestTrends, PopularSuggestions, Data } from "./FakerApi";
import "../SassFiles/Item.scss";
import Star from "./Star";

interface Item {
  img: string;
  title: string;
  prevPrice: number;
  currPrice: number;
  ratings: number;
  noOfRatings: number;
  cart: boolean;
}

const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>(Data);

  const heart = (idx: number) => {
    const updatedItems = [...items];
    console.log(updatedItems[idx].cart);
    updatedItems[idx].cart = !updatedItems[idx].cart;
    setItems(updatedItems);
  };

  return (
    <>
      <div className="items">
        {items.map((item, idx) => (
          <div className="item" key={idx}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={item.cart ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={item.cart ? "red": "white"}
              className="w-6 h-6 heart"
              onClick={() => heart(idx)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <div className="imgTag">
              <img className="itemImg" src={item.img} alt={item.title} />
              <div className="view">View Product</div>
            </div>
            <div className="itemTitle">{item.title}</div>
            <div className="price">
              <span className="prev">Rs. {item.prevPrice}</span>
              <span className="curr">Rs. {item.currPrice}</span>
            </div>
            <div className="ratings">
              <span className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    fill={star <= item.ratings ? "yellow" : "grey"}
                  />
                ))}
              </span>
              <span className="number">({item.noOfRatings})</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
