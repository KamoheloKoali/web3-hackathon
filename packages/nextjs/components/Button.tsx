"use client";

// components/Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label = "", onClick }) => {
  return (
    <div
      className="flex items-center justify-between bg-white p-4 shadow-lg rounded-lg cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="w-6 h-6 mr-3" />
        <span className="font-medium text-gray-700">{label}</span>
      </div>
      <div className="text-gray-500">→</div>
    </div>
  );
};

export default Button;
