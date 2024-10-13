import React, { useState, useEffect, useRef } from "react";

import Star from "../../assets/banner.svg";

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaved, setIsLeaved] = useState(false);
  const [showText, setShowText] = useState(false);
  const [textColor, setTextColor] = useState("text-white");
  const [OrlandoColor, setOrlandoColor] = useState("");
  const [showButton, setShowButton] = useState(false);

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

  // Mouse pointer hover event only scrolling down not moving mouse
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;

      const elementUnderCursor = document.elementFromPoint(x, y);

      if (elementUnderCursor && elementUnderCursor.id !== hoveredElement) {
        setHoveredElement(elementUnderCursor.id);

        if (elementUnderCursor.id === "banner") {
          handleMouseEnter();
        }
      } else if (!elementUnderCursor || elementUnderCursor.id !== "banner") {
        if (hoveredElement === "banner") {
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

  // animation timing track
  useEffect(() => {
    let animationTimer: NodeJS.Timeout;

    if (isHovered) {
      setShowText(true);
      setTextColor("text-white");
      setOrlandoColor("");
      setShowButton(false);

      animationTimer = setTimeout(() => {
        // Show text for the first 50% of the animation duration (1500ms)
        setShowText(true);
        setTimeout(() => {
          // Hide text between 50% to 70% of the animation duration
          setShowText(false);
        }, 2000);

        setTimeout(() => {
          setShowText(true);
          setTextColor("text-black");
          setOrlandoColor("");
        }, 2700);

        setTimeout(() => {
          setShowText(true);
          setTextColor("text-black");
          setOrlandoColor("text-darkblue");
          setShowButton(true);
        }, 3000);
      }, 0);
    } else {
      setShowText(true); // Reset text visibility when animation ends
    }

    return () => {
      clearTimeout(animationTimer); // Clean up on unmount or when hover state changes
    };
  }, [isHovered]);

  // showing video when animation step reaches out 70%
  useEffect(() => {
    let animationTimer: NodeJS.Timeout;

    // Trigger the video opacity at 70% of the animation duration
    if (isHovered) {
      animationTimer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.style.opacity = "1";
        }
      }, 2100); // 70% of a 3-second animation is 2100ms
    } else {
      // Reset video opacity when the animation is not active
      if (videoRef.current) {
        videoRef.current.style.opacity = "0";
      }
    }

    return () => {
      clearTimeout(animationTimer); // Clean up on unmount or when hover state changes
    };
  }, [isHovered]);

  return (
    <div
      id="banner"
      className="relative flex flex-col h-screen items-center justify-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 bg-banner-background"
      >
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col items-center justify-center ">
        <span
          className={`text-center ${
            isHovered ? "animatecss animatecss-fadeIn z-10" : ""
          }`}
        >
          {showText && ( // Conditionally render the paragraph based on showText state
            <p
              id="padding"
              className={`text-6xl md:text-8xl font-normal ${textColor} md:leading-tight`}
            >
              Building the Future{" "}
              <span className="block">
                from <span className={`${OrlandoColor}`}>Orlando</span>
              </span>
            </p>
          )}
        </span>

        <div
          className={`mt-14 px-6 py-4 rounded-100 bg-darkblue cursor-pointer ${
            showButton
              ? "animatecss animatecss-slideInUp animatecss-faster"
              : "opacity-0"
          }`}
        >
          <p className="text-white text-xl font-normal leading-3 uppercase flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
            Get in Touch
          </p>
        </div>
      </div>
      <div
        id="star"
        className={`absolute ${isHovered ? "animate-spring" : ""}`}
        style={{
          transform: "scale(10)"
        }}
      >
        <Star />
      </div>
    </div>
  );
};
export default Banner;
