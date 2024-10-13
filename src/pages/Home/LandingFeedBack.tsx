import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RadiusButtonArrow from "@/components/RadiusButtonArrow";

import SmallStarIcon from "../../assets/icon/smallStar.svg";
import QuoteUpIcon from "../../assets/icon/quoteup.svg";
// user avatars
import user1 from "../../assets/avatar/user1.png";
import user2 from "../../assets/avatar/user2.png";

const LandingFeedBack: React.FC = () => {
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

        if (elementUnderCursor.id === "landingFeedback") {
          handleMouseEnter();
        }
      } else if (
        !elementUnderCursor ||
        elementUnderCursor.id !== "landingFeedback"
      ) {
        if (hoveredElement === "landingFeedback") {
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

  const feedbackSettings = {
    centerMode: true,
    centerPadding: "20%",
    infinite: true,
    slidesToShow: 1
  };

  return (
    <>
      <div id="landingFeedback">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative dark:bg-custom-black bg-customWhiteGray bg-opacity-30 `}
        >
          <div
            className={`${
              isHovered && !isLeaved
                ? "animatecss animatecss-slideInUp animatecss-fast"
                : isLeaved
                ? "animatecss animatecss-slideOutDown animatecss-fast"
                : "opacity-0"
            }`}
          >
            <div
              className={`px-5 py-12 md:px-12 md:py-40 md:gap-28 relative grid grid-cols-3 `}
            >
              <span id="title" className={`w-full col-span-3 md:col-span-2`}>
                <p className="text-6xl md:text-8xl dark:text-white text-black font-normal md:tracking-wider">
                  FeedBack
                </p>
                <p className="text-base mt-6 md:text-2xl dark:text-white text-black font-normal">
                  Read through our testimonials to see why our clients love
                  working with us and how we can help you achieve your business
                  goals through creative and effective design.
                </p>
              </span>
              <span className="relative col-span-3 md:col-span-1 flex justify-end items-start">
                <RadiusButtonArrow
                  title="SEE ALL FEEDBACK"
                  className={`w-full mt-6 md:w-auto md:mt-10`}
                />
              </span>
            </div>

            <div id="feedback" className={`slider-container pb-12 mb:pb-52`}>
              <Slider {...feedbackSettings}>
                <div className="!flex flex-col items-start p-5 gap-5 md:gap-10 md:p-10 dark:bg-custom-gray bg-white feedback-card">
                  <div className="flex justify-between items-start self-stretch">
                    <div className="flex items-end gap-4">
                      <div
                        className="w-16 h-16"
                        style={{ borderRadius: "64px" }}
                      >
                        <img src={user1} />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <p className="text-2xl font-medium dark:text-white text-black">
                          Alan Baker
                        </p>
                        <p className="text-lg font-normal text-gray ">
                          CEO of Redbird Company
                        </p>
                      </div>
                    </div>
                    <QuoteUpIcon />
                  </div>
                  <p className="md:text-3xl italic font-normal dark:text-white text-black">
                    Working with Silver Digital Bus LLC has been an incredible
                    experience. They truly listened to our needs and delivered a
                    stunning design that exceeded our expectations. We couldn't
                    be happier with the final product!
                  </p>
                </div>
                <div className="!flex flex-col items-start p-5 gap-5 md:gap-10 md:p-10 dark:bg-custom-gray bg-white feedback-card">
                  <div className="flex justify-between items-start self-stretch">
                    <div className="flex items-end gap-4">
                      <div
                        className="w-16 h-16"
                        style={{ borderRadius: "64px" }}
                      >
                        <img src={user2} />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <p className="text-2xl font-medium dark:text-white text-black">
                          Theresa Webb
                        </p>
                        <p className="text-lg font-normal text-gray ">
                          CEO of Redbird Company
                        </p>
                      </div>
                    </div>
                    <QuoteUpIcon />
                  </div>
                  <p className="md:text-3xl italic font-normal dark:text-white text-black">
                    From start to finish, working with Katalyst Studio was a
                    seamless experience. They were professional, creative, and
                    delivered on time and within budget. We're thrilled with the
                    final result and look forward to working with them again in
                    the future.
                  </p>
                </div>
                <div className="!flex flex-col items-start p-5 gap-5 md:gap-10 md:p-10 dark:bg-custom-gray bg-white feedback-card">
                  <div className="flex justify-between items-start self-stretch">
                    <div className="flex items-end gap-4">
                      <div
                        className="w-16 h-16"
                        style={{ borderRadius: "64px" }}
                      >
                        <img src={user2} />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <p className="text-2xl font-medium dark:text-white text-black">
                          Theresa Webb
                        </p>
                        <p className="text-lg font-normal text-gray ">
                          CEO of Redbird Company
                        </p>
                      </div>
                    </div>
                    <QuoteUpIcon />
                  </div>
                  <p className="md:text-3xl italic font-normal dark:text-white text-black">
                    The team at Katalyst Studio was a pleasure to work with.
                    They were communicative, responsive, and provided valuable
                    insights that helped us refine our design vision. We highly
                    recommend them to anyone looking for top-notch design
                    solutions.
                  </p>
                </div>
              </Slider>
            </div>
          </div>

          <span
            id="leftstar"
            className={`absolute col-span-3 md:col-span-1 ${
              isHovered && !isLeaved
                ? "animate-move-bl-to-star"
                : isLeaved
                ? "animate-move-star-to-bl"
                : "opacity-0"
            }`}
            style={{
              left: "10%",
              top: "38%"
            }}
          >
            <SmallStarIcon />
          </span>
          <span
            id="rightstar"
            className={`hidden absolute md:block ${
              isHovered && !isLeaved
                ? "animate-move-br-to-star"
                : isLeaved
                ? "animate-move-star-to-br"
                : "opacity-0"
            }`}
            style={{
              top: "18%",
              right: "0%"
            }}
          >
            <SmallStarIcon />
          </span>
        </div>
      </div>
    </>
  );
};
export default LandingFeedBack;
