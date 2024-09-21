import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "~~/components/Button";

const Hero: React.FC = () => {
  const router = useRouter();

  const classRooms = [
    "English",
    "Mathematics",
    "Religious Studies",
    "Physical Science",
    "Biology",
    "Sesotho",
    "LBSE",
    "ICT",
  ];

  // Sort the classrooms in alphabetical order
  const sortedClassRooms = classRooms.sort((a, b) => a.localeCompare(b));

  // State to track whether all classrooms are shown or just the first 4
  const [showAll, setShowAll] = useState(false);

  // Show only 4 by default, but show all if showAll is true
  const visibleClassRooms = showAll ? sortedClassRooms : sortedClassRooms.slice(0, 4);

  const handleButtonClick = (label: string) => {
    router.push(`/${label}`);
  };

  return (
    <div className="h-full flex flex-col items-center rounded-xl justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Unlock the power of AI-driven ClassRooms</h1>
      <p className="text-gray-600 mb-8 text-center">
        Chat with the smartest AI during discussions - Experience the power of AI with us
      </p>

      <div className="space-y-4 w-full max-w-md overflow-y-auto">
        {/* Dynamically render the classrooms as buttons */}
        {visibleClassRooms.map((classRoom, index) => (
          <Button key={index} label={classRoom} onClick={() => handleButtonClick(classRoom)} />
        ))}

        {/* Toggle button to show more or less */}
        {classRooms.length > 4 && (
          <button className="text-blue-500 underline text-sm mt-4" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>

      <input
        type="text"
        className="mt-6 p-3 w-full max-w-md rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
        placeholder="Ask Satoru Gojo - infinite"
      />
    </div>
  );
};

export default Hero;
