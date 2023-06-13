import React from "react";
import {Link} from "react-router-dom";
import yoga1 from "./LottieImages/yoga1.json";
import Lottie from "lottie-react";


export default function MainPage() {
  return (
  <>
  <div className="flex justify-center items-center h-screen bg-[url(https://i.imgur.com/6tXuiW2.png)] bg-cover bg-center bg-no-repeat">
<section className="bg-white-900 text-black">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Move. Rest. Quench.

        <span className="sm:block"> Since 2023. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Fitness beyond the scale.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/signup">
          <p className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >
          Get Started
          </p>
        </Link>
      </div>
    </div>
  </div>
</section>
<div style={{width: "40%"}}>
<Lottie animationData={yoga1}/>
</div>

</div>
</>
  )
};
