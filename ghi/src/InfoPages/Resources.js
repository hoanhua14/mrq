import React from "react";
import { articles } from "./HealthTips";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Resources = () => {

  const handleOpenFrame = (tips) => {
    const width = 550;
    const height = 600;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    const newWindow = window.open("", "Health Tip", `width=${width},height=${height},left=${left},top=${top}`);
    newWindow.document.head.innerHTML = `<title>Health Tip</title>`;
    newWindow.document.body.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
      <style>
        body {
          position: relative;
        }
        #close-button {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        }
      </style>
      <p style="font-weight: bold; font-size: 3rem; text-align: center; color: blue; margin-bottom: 1.5rem; font-family: 'Poppins', sans-serif;">Health Tips</p>
      <p style="font-size: 1.125rem; margin: 0.25rem; font-family: 'Poppins', sans-serif;">${tips}</p>
      <button id="close-button" style="font-size: 1.5rem;">Close</button>`;
    newWindow.document.getElementById("close-button").addEventListener("click", () => {
      newWindow.close();
    });
  };


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto pb-5">
      <p className="text-center text-3xl text-black pt-8 pb-5 dashboard-font-bold">
        Healthy Habits: Tips for a Better You
      </p>
      <p className="text-center text-1xl text-black pt-5 pb-5 dashboard-font-bold">
        This page is dedicated to providing you with the latest tips and tricks to help you manage your health and well-being. From nutrition and exercise to stress management and sleep, we’ve got you covered. Explore our resources and start your journey towards a healthier, happier you!
      </p>
      <Carousel
        responsive={responsive}
        itemKey={"id"}
        infinite={true}
        autoPlay={true}
        autoPlayInterval={3000}
        swipe={true}
        showDots={true}
        showArrows={true}
      >
        {articles.map((item) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden resources-page shadow-md border border-style-solid border-color-rgb-200-185-241 border-width-5p mx-1" style={{ height: '93%' }} onClick={() => handleOpenFrame(item.tips)} >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover cursor-pointer" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 cursor-pointer">{item.title}</h2>
              <p className="text-gray-700 text-base cursor-pointer">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Resources;
