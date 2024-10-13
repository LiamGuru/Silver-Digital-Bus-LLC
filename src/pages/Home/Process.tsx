import React, { useState, useEffect } from "react";

import Stepper from "@/components/Stepper";
import StepCard from "@/components/Stepper/StepCard";

import StarIcon from "../../assets/icon/star.svg";
import ArrowRightIcon from "../../assets/icon/ArrowRight.svg";
import ArrowRightIconDark from "../../assets/icon/arrowRightDark.svg";

const stepperCards = [
  {
    order: 1,
    name: "idea",
    detail:
      "We begin by meeting with your team to determine your key requirements and specifications. Through in-depth discussion, we gain a better understanding of your business goals.",
    active: false
  },
  {
    order: 2,
    name: "Business Analysis",
    detail:
      "In cooperation with you, we create optimal workflow plan based on your inquiries. We determine the appropriate software and frameworks to provide a scalable solution.",
    active: true
  },
  {
    order: 3,
    name: "Design",
    detail:
      "A great design, combined with useful features, leads to a successful product. We give you ideas for an accessible and intuitive user interface options.",
    active: false
  },
  {
    order: 4,
    name: "Development",
    detail:
      "Our goal is to be your long-term partner, not just another vendor. We strive to build software that withstands the test of time and truly transforms your business. With an iterative development process, we offer software solutions that evolve through collaboration to meet your needs.",
    active: false
  },
  {
    order: 5,
    name: "Testing",
    detail:
      "Software testing is a crucial part of our development process. We employ both, manual and automated testing methods to ensure your application and system functionality operate as designed.",
    active: false
  },
  {
    order: 6,
    name: "Deployment",
    detail:
      "Once your software has been developed and tested, the final step is deployment. No matter which deployment model you choose, our team can make the process seamless, so you can focus on growing your business.",
    active: false
  },
  {
    order: 7,
    name: "Maintenance and Support",
    detail:
      "As your business grows, your software needs to scale with it. Our engineers can optimize software performance and make necessary upgrades to support your expansion.",
    active: false
  }
];

const Process: React.FC = () => {
  const [translateYValue, setTranslateYValue] = useState(0);
  const [clickedStepId, setClickedStepId] = useState<number>(1);
  const [stepHeight, setStepHeight] = useState<number>(15);
  const [containerHeight, setContainerHeight] = useState("100vh");
  const handleStepClick = (newStepId: number) => {
    if (clickedStepId === newStepId) {
      return;
    }

    if (clickedStepId !== newStepId) {
      setClickedStepId(newStepId);
    }

    if (clickedStepId !== null) {
      if (newStepId > clickedStepId) {
        setTranslateYValue((prevValue) => prevValue - stepHeight);
      } else if (newStepId < clickedStepId) {
        setTranslateYValue((prevValue) => prevValue + stepHeight);
      }
    }

    setClickedStepId(newStepId);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setStepHeight(12);
    } else {
      setStepHeight(15);
      setContainerHeight("calc(100vh - 20px)");
    }
  }, [windowWidth]);

  return (
    <div
      id="process"
      className="px-5 md:px-12 md:pt-40 grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      style={{ height: containerHeight }}
    >
      <div
        id="title"
        className="py-12 flex flex-col justify-start items-start dark:bg-black bg-white relative z-10"
      >
        <p className="text-6xl md:text-7xl lg:text-8xl font-normal md:tracking-wider w-full dark:text-white text-black">
          <span className="block">
            <StarIcon />
          </span>
          <span className="block break-all">Our</span>
          <span className="block break-all">Software</span>
          <span className="block break-all">Development</span>
          <span className="block break-all">Process</span>
        </p>

        <span className="block mt-8 md:mt-10">
          <span className="hidden dark:block">
            <ArrowRightIcon />
          </span>
          <span className="block dark:hidden">
            <ArrowRightIconDark />
          </span>
        </span>
      </div>
      <div
        id="steper"
        className={`flex flex-col items-start mt-20 md:mt-50`}
        style={{
          transform: `translateY(${translateYValue}%)`,
          transition: "transform 1s ease-in-out"
        }}
      >
        <Stepper>
          {stepperCards.map((step, i) => (
            <div key={i} onClick={() => handleStepClick(step.order)}>
              <StepCard
                order={step.order}
                name={step.name}
                detail={step.detail}
                active={clickedStepId === step.order}
              />
            </div>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default Process;
