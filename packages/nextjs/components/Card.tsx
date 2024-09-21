"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "./Alert";

interface CardProps {
  institution: string;
  title: string;
  description: string;
  price: number | null; // Price can now be a number or null (for free courses)
}

const Card: React.FC<CardProps> = ({ institution, title, description, price }) => {
  const router = useRouter();
  const [isClickedPay, setIsClickedPay] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickPay = () => {
    setIsClickedPay(true);
    setIsClicked(true); // Set isClicked to true when paying
    router.push("/debug");
  };

  const handleClickFree = () => {
    setIsClicked(true); // Set isClicked to true when getting a free course
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
            isClickedPay ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              <Alert />
            )
          ) : (
            <>
              <p className="font-bold text-base">{price === 0 || price === null ? "Free" : `Price: M${price}`}</p>
              <button
                className="btn btn-primary"
                onClick={price === 0 || price === null ? handleClickFree : handleClickPay}
              >
                {price === 0 || price === null ? "Get Course" : "Buy Course"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
