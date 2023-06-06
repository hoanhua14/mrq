import React from "react";
import {Link} from "react-router-dom";


export default function MainPage() {
  return (
    <div className="'2xl':container  mx-auto">
      <section
  className="relative bg-[url(https://i.imgur.com/VK0GCzK.png)]  bg-cover bg-center bg-no-repeat flex-grow"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Move. Rest. Quench.

        <strong className="block font-extrabold text-rose-700">
          Since 2023
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Fitness Beyond The Scale.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
        <Link to="/signup">
          <p className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto" >
          Get Started
          </p>
        </Link>

      </div>
    </div>
  </div>
</section>
    </div>
  )
};
