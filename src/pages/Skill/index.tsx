import React, { useState, useEffect } from "react";

import IconButton from "@/components/IconButton";
import SkillRow from "@/components/SkillRow";

import primarySkillsData from "@/constants/primarySkills";

const Skill: React.FC = () => {
  const Line = () => {
    return <div style={{ height: "1px", background: "#353535" }}></div>;
  };

  return (
    <>
      <div className="px-5 py-14 md:px-12 md:py-40">
        <div className="flex flex-col justify-center items-start gap-10 md:flex-row md:justify-between md:items-center md:self-stretch">
          <div className="flex">
            <p className="text-6xl md:text-8xl dark:text-white text-black font-normal md:tracking-wider">
              Primary Development Skills
            </p>
          </div>
        </div>

        <div className={`mt-20 `}>
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
    </>
  );
};

export default Skill;
