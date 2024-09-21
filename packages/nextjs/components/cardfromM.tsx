"use client";

import React, { useState } from "react";
import NoCourse from "./NoCourse";

interface CardProps {
  institution: string;
  title: string;
  description: string;
  price: number | null; // Price can now be a number or null (for free courses)
}

const Card: React.FC<CardProps> = ({ institution, title, description, price }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Add your navigation or logic here
    console.log("Navigating to the course");
  };

  return (
    <div className="m-5 card card-compact bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {title} - {institution}
        </h2>
        <p>{description}</p>
        <div className={isClicked ? "card-actions flex justify-center" : "card-actions flex justify-around"}>
          {isClicked ? (
            <NoCourse />
          ) : (
            <>
              <p className="font-bold text-base">Price Paid:{price === 0 || price === null ? " Free" : ` M${price}`}</p>
              <button
                className="btn btn-primary"
                onClick={handleClick} // Always bind to the handleClick function
              >
                Go to Course
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
