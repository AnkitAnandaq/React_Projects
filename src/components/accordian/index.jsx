import { useState } from "react";
import data from "./data.js";

const Accordion = () => {
  const [selected, setselected] = useState(null);
  const handleClick = (id) => {
    setselected(id == selected ? null : id);
    // console.log(id);
    console.log(selected);
  };
  return (
    <div className="max-w-lg mx-auto p-4">
      {/* Accordion Container */}
      <div className="space-y-4">
        {/* Accordion Item 1 */}
        {data.map((dataitem, index) => {
          return (
            <div key={index} className="border rounded-md shadow-sm">
              <button
                onClick={() => handleClick(dataitem.id)}
                className="w-full flex justify-between items-center p-4 bg-gray-100 text-left text-gray-800 font-medium hover:bg-gray-200"
              >
                <span>{dataitem.question}</span>
                <svg
                  className="w-5 h-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`${
                  selected === dataitem.id ? "block" : "hidden"
                } p-4 text-gray-600`}
              >
                {dataitem.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
