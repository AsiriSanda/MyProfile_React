import React from 'react';
import myprof from '../assets/portfolio/myprof.png';
import Proj1 from '../assets/portfolio/Proj1.png';
import Proj2 from '../assets/portfolio/Proj2.png';
import sm from '../assets/portfolio/sm.JPG';
import cs from '../assets/portfolio/cs.jpg';
import ss from '../assets/portfolio/ss.JPG';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: myprof,
      href: 'https://github.com/AsiriSanda/MyProfile',
    },
    {
      id: 2,
      src: Proj1,
      href: 'https://github.com/AsiriSanda/sahan_bookshop',
    },
    {
      id: 3,
      src: Proj2,
    },
    {
      id: 4,
      src: sm,
      href: 'https://github.com/AsiriSanda/Supermarket_layerd',
    },
    {
      id: 5,
      src: cs,
      href: 'https://github.com/AsiriSanda/Car-Rental-System',
    },
    {
      id: 6,
      src: ss,
      href: 'https://github.com/AsiriSanda/sipsewana_orm',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="w-1/2 px-12 py-3 m-4 duration-200 hover:scale-105 flex justify-between items-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
