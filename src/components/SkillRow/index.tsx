import React, { useState } from "react";

interface SkillRowProps {
  classname?: string;
  name?: string;
  description?: string;
  children: React.ReactNode;
}

const SkillRow: React.FC<SkillRowProps> = ({
  classname,
  name,
  description,
  children
}) => {
  const [isHoveredRow, setIsHoveredRow] = useState(false);
  return (
    <div className={`${classname}`}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6"
        onMouseEnter={() => setIsHoveredRow(true)}
        onMouseLeave={() => setIsHoveredRow(false)}
      >
        <div
          className={`skill-title dark:text-white text-black  ${
            isHoveredRow ? "animate-growsize items-start" : "flex items-center"
          }`}
        >
          {name}
        </div>
        <div className="skill-description">
          {description}
          <div
            className={`grid overflow-hidden transition-all duration-1000 ease-in-out ${
              isHoveredRow
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex items-center content-center gap-4 flex-wrap mt-2 ">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRow;
