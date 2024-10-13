import React, { useState, useEffect } from "react";

import RadiusButtonArrow from "@/components/RadiusButtonArrow";
import IconButton from "@/components/IconButton";
import SkillRow from "@/components/SkillRow";

import StarIcon from "../../assets/icon/star.svg";

import primarySkillsData from "@/constants/primarySkills";

const PrimaryDevSkill: React.FC = () => {
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

        if (elementUnderCursor.id === "devskill") {
          handleMouseEnter();
        }
      } else if (!elementUnderCursor || elementUnderCursor.id !== "devskill") {
        if (hoveredElement === "devskill") {
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

  const Line = () => {
    return <div style={{ height: "1px", background: "#353535" }}></div>;
  };

  return (
    <div
      id="devskill"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`px-5 mt-14 md:px-12 md:mt-40`}>
        <div
          className={`flex flex-col justify-center items-start gap-10 mb-10 md:flex-row md:justify-between md:items-center md:self-stretch ${
            isHovered && !isLeaved
              ? "animatecss animatecss-fadeInUp"
              : isLeaved
              ? "animatecss animatecss-fadeOutLeft animatecss-slow "
              : "opacity-0"
          }`}
        >
          <div className="flex">
            <p className="text-6xl md:text-8xl dark:text-white text-black font-normal md:tracking-wider">
              <span className="block relative">
                Primary
                <span
                  className="absolute"
                  style={{ transform: "translate(-35%, -30%)" }}
                >
                  <StarIcon />
                </span>
              </span>
              <span className="block break-all">Development Skills</span>
            </p>
          </div>
          <div className="w-full md:w-auto">
            <RadiusButtonArrow title="SEE ALL SKILLS" to="/skill" />
          </div>
        </div>

        <div
          className={`${
            isHovered && !isLeaved
              ? "animatecss animatecss-zoomIn animatecss-slow"
              : isLeaved
              ? "animatecss animatecss-fadeOutRight animatecss-slow animatecss-delay-1s"
              : "opacity-0"
          }`}
        >
          {primarySkillsData.skills.map((skill) => (
            <div key={skill.id}>
              <Line />
              <SkillRow name={skill.name} description={skill.description}>
                {skill.icons.map((IconComponent, index) => (
                  <div key={index}>
                    <IconButton
                      title={skill.lang[index]}
                      icon={<IconComponent />}
                      darkIcon={<IconComponent />}
                    />
                  </div>
                ))}
              </SkillRow>
            </div>
          ))}

          <Line />
        </div>
      </div>
    </div>
  );
};

export default PrimaryDevSkill;
