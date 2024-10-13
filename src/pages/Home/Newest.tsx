import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProcessBar from "../../assets/icon/process.svg";
import ProcessBarDark from "../../assets/icon/progressDark.svg";
import StarIcon from "../../assets/icon/star.svg";

import newProjects from "@/constants/newProjects";

const Newest: React.FC = () => {
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isLeaved, setIsLeaved] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isLeaved) {
      timeout = setTimeout(() => {
        setIsHovered(false);
        setIsLeaved(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [isLeaved]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLeaved(false);
  };

  const handleMouseLeave = () => {
    setIsLeaved(true);
  };

  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;

      const elementUnderCursor = document.elementFromPoint(x, y);

      if (elementUnderCursor && elementUnderCursor.id !== hoveredElement) {
        setHoveredElement(elementUnderCursor.id);

        if (elementUnderCursor.id === "newest") {
          handleMouseEnter();
        }
      } else if (!elementUnderCursor || elementUnderCursor.id !== "newest") {
        if (hoveredElement === "newest") {
          handleMouseLeave();
        }
        setHoveredElement(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hoveredElement]);

  return (
    <div
      id="newest"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`px-5 pt-4 md:px-12 md:pt-12 flex flex-col justify-center items-start gap-8 md:items-center md:flex-row md:justify-between transition-opacity duration-500 ease-in-out ${
          isHovered && !isLeaved
            ? "animatecss animatecss-fadeIn animatecss-slow"
            : isLeaved
            ? "animatecss animatecss-fadeOut"
            : "opacity-0"
        }`}
      >
        <div className="flex">
          <p
            className="text-6xl md:text-8xl dark:text-white text-black font-normal tracking-wider"
            style={{ lineHeight: "100px" }}
          >
            <span className="relative">
              Newest Projects
              <span
                className="absolute"
                style={{
                  bottom: "-40px",
                  left: "100%",
                  transform: "translateX(-50%)"
                }}
              >
                <StarIcon />
              </span>
            </span>
          </p>
        </div>
        <div className="flex md:justify-end">
          <div className="hidden dark:block">
            <ProcessBar />
          </div>
          <div className="block dark:hidden">
            <ProcessBarDark />
          </div>
        </div>
      </div>
      <div
        className={`slider-container overlay-card mt-6 md:mt-16 ${
          isHovered && !isLeaved
            ? "animatecss animatecss-slideInRight animatecss-slow"
            : isLeaved
            ? "animatecss animatecss-slideOutRight animatecss-slow"
            : "opacity-0"
        }`}
      >
        <Slider {...settings}>
          {newProjects.newProjects.map((project, i) => (
            <div key={i} className="relative w-screen h-screen">
              <div className="absolute inset-0 overlay-card"></div>
              <img
                src={project.image}
                alt="image1"
                className="w-full h-full object-cover"
                style={{ filter: "none" }}
              />
              <div className="absolute inset-0 grid grid-cols-2 md:items-center md:justify-center z-10">
                <div className="col-span-2 flex justify-end">
                  <button className="flex w-28 h-28 p-2 mr-40 mt-28 justify-center items-center view-more">
                    <p className="title">View Details</p>
                  </button>
                </div>

                <div className="col-span-2 md:col-span-1 text-white flex flex-col md:items-start md:text-start px-6 pt-64 gap-4 md:px-12 md:gap-6 md:mb-12 self-end">
                  <p className="text-4xl md:text-5xl">{project.title}</p>
                  <p className="text-lg md:text-2xl">{project.description}</p>
                </div>

                <div className="col-span-2 md:col-span-1 flex justify-start md:justify-end items-start content-start gap-2 flex-wrap px-6 md:px-12 mb-12 self-end">
                  {project.tags.map((tagName, index) => (
                    <div
                      key={index}
                      className="flex px-3 py-1 md:p-4 justify-center items-center tag"
                    >
                      <p className="text-white text-sm md:text-lg">{tagName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Newest;
