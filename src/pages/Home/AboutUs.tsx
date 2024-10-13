import React, { useState, useEffect } from "react";

const AboutUs: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaved, setIsLeaved] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isLeaved) {
      timeout = setTimeout(() => {
        setIsHovered(false);
        setIsLeaved(false);
      }, 500);
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

        if (elementUnderCursor.id === "about") {
          handleMouseEnter();
        }
      } else if (!elementUnderCursor || elementUnderCursor.id !== "about") {
        if (hoveredElement === "about") {
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
      id="about"
      className="px-5 pt-4 md:px-12 md:pt-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${
          isHovered ? "animatecss animatecss-fadeInUp" : "opacity-0"
        }`}
      >
        <p
          className="text-3xl dark:text-white text-black font-normal md:text-5xl"
          style={{
            lineHeight: "70px",
            letterSpacing: "-1.12px"
          }}
        >
          ‘ Despite being a small team, we believe that our size gives us an
          advantage, allowing us to be nimble, adaptable, and able to work
          closely with our clients to deliver truly awesome development.’
        </p>

        <div className="flex flex-col items-start gap-8 mt-8 md:items-center md:flex-row">
          <div className="w-[141.432px] h-[2px] bg-black dark:bg-white"></div>
          <p className="dark:text-white text-black text-3xl leading-10 font-normal">
            Digital thinkers who build awesome Software.
          </p>
        </div>

        <div
          className="grid grid-cols-2 mt-12 pb-12 md:grid-cols-4 md:mt-24 md:pb-36 items-center gap-3"
          id="statistics"
        >
          <div className="flex flex-col gap-3">
            <p className="text-center text-base md:text-2xl text-gray font-medium md:leading-8 uppercase">
              Clients
            </p>
            <p className="text-center text-4xl md:text-7xl dark:text-white text-black font-normal leading-normal md:tracking-wide">
              250+
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-center text-base md:text-2xl text-gray font-medium md:leading-8 uppercase">
              projects
            </p>
            <p className="text-center text-4xl md:text-7xl dark:text-white text-black font-normal leading-normal md:tracking-wide">
              346+
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-center text-base md:text-2xl text-gray font-medium md:leading-8 uppercase">
              HAPPY CLIENTS
            </p>
            <p className="text-center text-4xl md:text-7xl dark:text-white text-black font-normal leading-normal md:tracking-wide">
              100%
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-center text-base md:text-2xl text-gray font-medium md:leading-8 uppercase">
              Years Of Experience
            </p>
            <p className="text-center text-4xl md:text-7xl dark:text-white text-black font-normal leading-normal md:tracking-wide">
              4+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
