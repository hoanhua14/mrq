import React from "react";

const features = [
  {
    name: 'Exercise Log',
    description: 'Stay on track with your fitness goals by logging your exercise time and activities. Our app helps you achieve a healthier lifestyle with ease.',
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/rw-imagelibrary2020-hires-401-1675366389.jpg"
  },
  {
    name: 'Sleep Tracker',
    description: 'Improve your sleep habits by tracking your sleep time and quality. Our app helps you achieve better sleep for a healthier lifestyle.',
    imageUrl:
    "https://images.theconversation.com/files/453020/original/file-20220318-13-ulamgg.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
  },
  {
    name: 'Water Intake',
    description: 'Track your daily water intake with our easy-to-use log feature. Stay hydrated and healthy with our app.',
    imageUrl:
    "https://www.eatthis.com/wp-content/uploads/sites/4/2020/08/black-woman-drinking-bottled-water.jpg?quality=82&strip=1"
  }
];

function AboutUs() {
  return (
    <div className="'2xl':container mx-auto">
      <section className="relative bg-[url(https://i.imgur.com/VK0GCzK.png)] bg-cover bg-center bg-no-repeat flex-grow">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="flex justify-center pt-20">
          <h1 className="block font-extrabold text-black text-7xl">Exercise, Sleep, and Water Management</h1>
        </div>
        <div className="relative max-w-screen-xl mx-auto px-25 py-32 lg:h-screen lg:items-center lg:px-15">
          <div className="grid grid-cols-2 gap-12 mt-8 sm:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="shadow-2xl h-60 w-100 object-cover border"
                  src={feature.imageUrl}
                  alt={feature.name}
                />
                <h3 className="mt-4 text-xl font-bold text-black">
                  {feature.name}
                </h3>
                <p className="mt-1 font-semibold text-md text-sky-600 text-center">{feature.description}</p>
                <div className="flex mt-2">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
