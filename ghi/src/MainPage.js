import React from "react";


// function MainPage() {
//   return (
//   <>
//     <h1 className="text-3xl font-bold underline">

//     </h1>
//     <div className = "container mx-auto">
//     <header className="my-24">
//   <div className="w-full bg-center bg-cover"
//     style={{backgroundImage: `url("https://i.imgur.com/jT2gUif.png")`, width: `auto`, height: `500px`}}>
//     <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
//       <div className="text-center">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Move.Rest.Quench.</h1>
//             <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
//               Fitness beyond the scale.

//             </p>
//             <Link className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
//               to="/signup">Get Started!</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
// </div>

// </>

//   );
// }

// export default MainPage;
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
        <a
          href="/signup"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

      </div>
    </div>
  </div>
</section>
    </div>
  )
};
