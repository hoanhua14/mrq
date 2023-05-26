import React from "react";
import { Link } from 'react-router-dom';


function MainPage() {
  return (
  <>
    <h1 className="text-3xl font-bold underline">

    </h1>
    <div className = "container mx-auto">
    <header className="my-24">
  <div className="w-full bg-center bg-cover"
    style={{backgroundImage: `url("https://i.imgur.com/jT2gUif.png")`, width: `auto`, height: `500px`}}>
    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
      <div className="text-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Move.Rest.Quench.</h1>
            <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
              Fitness beyond the scale.

            </p>
            <Link className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
              to="/signup">Get Started!</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</div>

</>

  );
}

export default MainPage;
