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
    <div
      className="py-100 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.imgur.com/jT2gUif.png')`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        width: '100vw',
        height: '75vh',
        margin: 0,
        padding: 0,
        display: 'flex'
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-12 px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">The Creators</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the team at MRQ, a group of developers passionate about self-care because health is wealth.
          </p>
        </div>
        <ul role="list" className="grid gap-x-10 gap-y-6 grid-cols-4">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col items-center gap-y-2">
                <img className="h-40 w-40 rounded-xl object-cover" src={person.imageUrl} alt="pics of MRQ team member" />
                <h3 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900">{person.name}</h3>
                <p className="italic text-md font-normal leading-6 text-cyan-400">{person.role}</p>
                <div className="flex items-center mt-1 gap-x-2">
                  <a href={person.gitlab}><img className="w-6 h-6" src={person.gitlablogo} alt="GitLab logo" /></a>
                  <a href={person.linkedin}><img className="w-6 h-6" src={person.linkedinlogo} alt="LinkedIn logo" /></a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default AboutUs;
