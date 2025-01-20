/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Carousel = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [current, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  function handlePrevious() {
    setCurrentSlide(current === 0 ? images.length - 1 : current - 1);
  }

  function handleNext() {
    setCurrentSlide(current === images.length - 1 ? 0 : current + 1);
  }

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setImages(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);
  console.log(images);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        Loading data! Please wait...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      <div className="relative flex flex-col items-center justify-center w-[24rem] h-[16rem] mx-auto border border-gray-600 rounded-lg shadow-lg bg-gray-700 overflow-hidden">
        {/* Main Content Box */}
        <div className="flex justify-center items-center w-full h-full">
          {images && images.length > 0
            ? images.map((item, index) => (
                <img
                  key={item.id}
                  alt={item.download_url}
                  src={item.download_url}
                  className={`absolute w-full h-full object-cover transition-all duration-500 ease-linear transform ${
                    current === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                />
              ))
            : null}
        </div>

        {/* Circle Indicators */}
        <div className="absolute bottom-3 flex space-x-2">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    current === index
                      ? "bg-blue-500 border-blue-500 scale-110"
                      : "bg-gray-400 border-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white hover:bg-blue-500 rounded-full p-3 shadow-md transition-all duration-300"
        >
          &#9664;
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white hover:bg-blue-500 rounded-full p-3 shadow-md transition-all duration-300"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
