"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import Alert from "./Alert";

// import useScaffoldWriteContract from "~~/hooks/scaffold-eth"

interface CardProps {
  institution: string;
  title: string;
  description: string;
  price: number | null; // Price can now be a number or null (for free courses)
}

const Card: React.FC<CardProps> = ({ institution, title, description, price }) => {
  // const router = useRouter();
  const [isClickedPay, setIsClickedPay] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // const { writeContractAsync: wruteYourContractAsync } = useScaffoldWriteContract("UserProfile")

  // const handleClickPay = () => {
  //   setIsClickedPay(true);
  //   setIsClicked(true); // Set isClicked to true when paying
  //   router.push("/debug");
  // };

  const handleClickFree = () => {
    setIsClicked(true); // Set isClicked to true when getting a free course
    setIsClickedPay(false);
  };
  console.log(price);

  return (
    <div className="card card-compact bg-base-100 w-full md:w-96 shadow-xl mx-auto">
      {" "}
      {/* Responsive width */}
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
              <button className="btn btn-primary w-full rounded-xl" onClick={handleClickFree}>
                Enroll
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
