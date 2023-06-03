import React from "react";

const people = [
  {
    name: 'So Hoan Hua',
    role: 'Fullstack Developer',
    gitlab: 'https://gitlab.com/hoanhua',
    gitlablogo: 'https://www.svgrepo.com/show/327363/logo-gitlab.svg',
    linkedin: 'https://www.linkedin.com/in/hoanhua/',
    linkedinlogo: 'https://www.svgrepo.com/download/922/linkedin.svg',
    imageUrl:
      "https://occ-0-1007-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f"
  },
  {
    name: 'Nicole Kash',
    role: 'Fullstack Developer',
    gitlab: 'https://gitlab.com/nicoleneeka10',
    gitlablogo: 'https://www.svgrepo.com/show/327363/logo-gitlab.svg',
    linkedin: 'https://www.linkedin.com/in/nicole-kash/',
    linkedinlogo: 'https://www.svgrepo.com/download/922/linkedin.svg',
    imageUrl:
      "https://occ-0-1007-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f"
  },
  {
    name: 'Bran Tai',
    role: 'Fullstack Developer',
    gitlab: 'https://gitlab.com/m8202020btai',
    gitlablogo: 'https://www.svgrepo.com/show/327363/logo-gitlab.svg',
    linkedin: 'https://www.linkedin.com',
    linkedinlogo: 'https://www.svgrepo.com/download/922/linkedin.svg',
    imageUrl:
      "https://occ-0-1007-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f"
  },
  {
    name: 'David Hong',
    role: 'Fullstack Developer',
    gitlab: 'https://gitlab.com/daxidhong',
    gitlablogo: 'https://www.svgrepo.com/show/327363/logo-gitlab.svg',
    linkedin: 'https://www.linkedin.com/in/davidhong-paca/',
    linkedinlogo: 'https://www.svgrepo.com/download/922/linkedin.svg',
    imageUrl:
      "https://occ-0-1007-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f"
  },
];

function AboutUs() {
  return (
    <div className="'2xl':container mx-auto">
      <section className="relative bg-[url(https://i.imgur.com/VK0GCzK.png)] bg-cover bg-center bg-no-repeat flex-grow">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="flex justify-center pt-20">
          <h1 className="block font-extrabold text-black text-7xl">The Creators</h1>
        </div>
        <div className="flex justify-center pt-20">
          <h2 className="block font-bold text-rose-600 text-3xl italic">Meet the team at MRQ, a group of developers passionate about self-care because health is wealth.</h2>
        </div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-32 lg:h-screen lg:items-center lg:px-15">
          <div className="grid grid-cols-2 gap-12 mt-8 sm:grid-cols-4">
            {people.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="shadow-md shadow-rose-300 h-40 w-40 rounded-xl object-cover border"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <h3 className="mt-4 text-xl font-bold text-rose-600">
                  {person.name}
                </h3>
                <p className="mt-1 font-semibold text-md text-gray-400">{person.role}</p>
                <div className="flex mt-2">
                  <a
                    href={person.gitlab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2"
                  >
                    <img
                      className="w-6 h-6"
                      src={person.gitlablogo}
                      alt="GitLab"
                    />
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-6 h-6"
                      src={person.linkedinlogo}
                      alt="LinkedIn"
                    />
                  </a>
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
