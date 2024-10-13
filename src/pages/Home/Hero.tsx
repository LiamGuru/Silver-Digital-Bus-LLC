import React, { useState } from "react";

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="hero"
      className="relative flex flex-col h-screen items-center justify-end -mt-28 dark:bg-hero-dark hero-light"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="px-12 mb-40 xl:mb-48 animatecss animatecss-fadeInUp">
        <p className="text-white text-center font-medium text-6xl leading-tight lg:leading-snug lg:font-semibold md:text-8xl xl:font-normal xl:tracking-tight xl:text-9xl md:text-start">
          All Jack of Trades in <br />
          Software Development.
        </p>
        <div className="justify-center items-center gap-6 mt-10 md:grid md:grid-cols-2 md:items-center md:justify-between">
          <p className="text-white text-base text-center leading-8 md:text-2xl md:text-start">
            Web, Mobile App development, Web3 Development, AI development, all
            jack of trades in software development
          </p>
          <div className="flex justify-center mt-6 items-center gap-4 md:justify-end">
            <p
              className="text-white font-medium text-lg leading-5 uppercase whitespace-nowrap hidden md:block cursor-pointer hover:text-prime hover:dark:text-prime"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleScrollDown}
            >
              Scroll Down
            </p>
            <div
              className="flex p-3 rounded-full border border-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleScrollDown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`${
                  isHovered
                    ? "animatecss animatecss-bounce animatecss-infinite animate-down"
                    : ""
                }`}
              >
                <path
                  d="M10 3.125L10 16.875"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.625 11.25L10 16.875L4.375 11.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
