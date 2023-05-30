import React, { useState } from "react";
import { articles } from "./HealthTips";

const Resources = () => {
  const [isFrameOpen, setIsFrameOpen] = useState(false);
  const [tips, setTips] = useState("");

  const handleOpenFrame = (tips) => {
      setIsFrameOpen(true);
      setTips(tips);
  };
  const handleCloseFrame = () => {
    setIsFrameOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden resources-page shadow-md border border-style-solid border-color-rgb-200-185-241 border-width-5p">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover cursor-pointer" onClick={() => handleOpenFrame(article.tips)} />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 cursor-pointer" onClick={() => handleOpenFrame(article.tips)}>{article.title}</h2>
              <p className="text-gray-700 text-base cursor-pointer" onClick={() => handleOpenFrame(article.tips)}>{article.description}</p>
            </div>
            <Modal tips={tips} handleCloseFrame={handleCloseFrame} isFrameOpen={isFrameOpen} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Modal = ({ tips, handleCloseFrame, isFrameOpen }) => {
  return (
    <>
      {isFrameOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-10 flex justify-center items-center">
          <div className="w-96 h-110 bg-white border border-green flex flex-col rounded-lg shadow-xl scale-in">
            <div className="flex-grow p-4">
              <h2 className="font-bold text-3xl text-center text-blue-500 mb-2">
                Health Tips
              </h2>
              <p className="text-lg mb-1">{tips}</p>
            </div>
            <div className="flex justify-center pb-4">
              <button className="d-block mx-auto my-3 bg-purple-500 rounded-full text-white py-2 px-4 hover:bg-purple-600 shadow-sm" onClick={handleCloseFrame}>Close</button>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
          .scale-in {
            animation: scale-in 0.3s ease-in-out;
          }
          @keyframes scale-in {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};


export default Resources;
