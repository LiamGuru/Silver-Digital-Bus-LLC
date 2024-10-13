import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RadiusButton from "@/components/RadiusButton";
import SearchBox from "@/components/Search";

import ArrowRightUpIcon from "../../assets/icon/ArrowRightUp.png";
import ArrowRightUpIconDark from "../../assets/icon/ArrowRightUpDark.png";

import Squad_1 from "../../assets/resource/squad1.png";
import Squad_2 from "../../assets/resource/squad2.png";
import Squad_3 from "../../assets/resource/squad3.png";

import Member_1 from "../../assets/member/teamate1.png";
import Member_2 from "../../assets/member/teamate2.png";
import Member_3 from "../../assets/member/teamate3.png";
import Member_4 from "../../assets/member/teamate4.png";
import Member_5 from "../../assets/member/teamate5.png";
import Member_6 from "../../assets/member/teamate6.png";
import Member_7 from "../../assets/member/teamate7.png";
import Member_8 from "../../assets/member/teamate8.png";
import Member_9 from "../../assets/member/teamate9.png";

const squads = [
  {
    id: 1,
    name: "Casadia Froze",
    href: "#",
    description: "Founder",
    imageSrc: Member_1
  },
  {
    id: 2,
    name: "Kristin Watson",
    href: "#",
    description: "Strategy Lead",
    imageSrc: Member_2
  },
  {
    id: 3,
    name: "Ahmed Forty",
    href: "#",
    description: "Creative Director",
    imageSrc: Member_3
  },
  {
    id: 4,
    name: "Simon Hunt",
    href: "#",
    description: "Operations Manager",
    imageSrc: Member_4
  },
  {
    id: 5,
    name: "Courtney Henry",
    href: "#",
    description: "UX Researcher & Copywriter",
    imageSrc: Member_5
  },
  {
    id: 6,
    name: "Brooklyn Simmons",
    href: "#",
    description: "UX Researcher & Copywriter",
    imageSrc: Member_6
  },
  {
    id: 7,
    name: "Jacob Jones",
    href: "#",
    description: "UX Researcher",
    imageSrc: Member_7
  },
  {
    id: 8,
    name: "Dianne Russell",
    href: "#",
    description: "Product Designer",
    imageSrc: Member_8
  },
  {
    id: 9,
    name: "Guy Hawkins",
    href: "#",
    description: "Product Designer",
    imageSrc: Member_9
  }
];

const Team = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="px-5 py-4 md:px-12 md:pt-8 md:pb-40">
        <div className="flex flex-col items-start gap-10">
          <p className="text-6xl text-start md:text-9xl dark:text-white text-black font-normal md:tracking-wider">
            About The Squad.
          </p>
          <div className="gap-6 mt-4 md:mt-10 md:grid md:grid-cols-2 md:items-center md:justify-between">
            <p className="dark:text-white text-black text-base leading-8 md:text-2xl">
              Based in the vibrant heart of Creative Persona. Silver Digital Bus
              is not just a digital agency; we're your partners in creativity.
            </p>
            <div className="flex justify-center mt-6 items-center gap-4 md:justify-end">
              <p
                className="dark:text-white text-black font-medium text-lg leading-5 uppercase whitespace-nowrap hidden md:block cursor-pointer hover:text-prime hover:dark:text-prime"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleScrollDown}
              >
                Scroll Down
              </p>
              <div
                className="flex p-3 rounded-full border dark:border-white border-black mt-3 md:mt-3"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleScrollDown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`fill-current dark:text-white ${
                    isHovered
                      ? "animatecss animatecss-bounce animatecss-infinite animate-down"
                      : ""
                  }`}
                >
                  <path
                    d="M10 3.125L10 16.875"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.625 11.25L10 16.875L4.375 11.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-container mt-6 md:mt-16">
          <Slider {...settings}>
            <div className="px-4">
              <img
                src={Squad_1}
                alt="Squad_1"
                className="w-full h-96 md:h-190 object-cover"
              />
            </div>
            <div className="px-4">
              <img
                src={Squad_2}
                alt="Squad_2"
                className="w-full h-96 md:h-190  object-cover"
              />
            </div>
            <div className="px-4">
              <img
                src={Squad_3}
                alt="Squad_3"
                className="w-full h-96 md:h-190 object-cover"
              />
            </div>
          </Slider>
        </div>

        <div className="py-12 md:py-24">
          <p className="text-3xl leading-10 dark:text-white text-black md:text-5xl">
            We thrive on turning your wildest design aspirations into stunning
            realities. At Silver Digital Bus, every project is a collaboration,
            every client is a friend, and every design and development is a work
            of art crafted with care and enthusiasm.
          </p>
        </div>

        <div className="py-8 md:py-12 flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <p className="text-5xl md:text-8xl dark:text-white text-black">
                Our Squad
              </p>
              <div className="md:grid md:grid-cols-6">
                <div className="md:col-span-5 md:w-full lg:w-2/3 xl:w-2/3">
                  <p className="text-base md:text-2xl md:leading-8 dark:text-white text-black">
                    Our team is a tight-knit family of developers, designers,
                    artists, and visionaries, all bound by the same creative and
                    software enthusiasm.
                  </p>
                </div>
                <div className="flex items-end mt-10 md:mt-0 md:col-span-1 md:justify-end">
                  <span className="hidden dark:flex">
                    <img
                      src={ArrowRightUpIcon}
                      alt="Arrow Right Up"
                      className="w-4/5 h-4/5 md:w-full md:h-full object-cover"
                    />
                  </span>
                  <span className="flex dark:hidden">
                    <img
                      src={ArrowRightUpIconDark}
                      alt="Arrow Right Up Dark"
                      className="w-4/5 h-4/5 md:w-full md:h-full object-cover"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-12">
            {squads.map((squad) => (
              <a
                key={squad.id}
                href={squad.href}
                className="group flex flex-col h-full"
              >
                <div className="w-full h-140 md:h-140 lg:h-140 overflow-hidden rounded-xl dark:bg-white bg-contactBgLight">
                  <img
                    src={squad.imageSrc}
                    className="h-full w-full object-cover object-[50%_10%] group-hover:opacity-75"
                    alt={squad.name}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="mt-6 text-2xl dark:text-white text-black">
                    {squad.name}
                  </p>
                  <p className="mt-2 text-base text-contactTitle">
                    {squad.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
