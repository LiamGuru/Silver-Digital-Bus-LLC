import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Ensure this is a functional component type
  darkIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}
import { MdGroups } from "react-icons/md";
const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  darkIcon: DarkIcon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="p-8 gap-4 flex flex-col justify-between dark:bg-custom-black bg-customWhiteGray bg-opacity-30 border dark:border-customGray border-customWhiteGray h-full hover:bg-white hover:border-white hover:dark:bg-black hover:dark:border-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-start items-center">
        <div className="hidden dark:block">
          <DarkIcon
            fontSize="4rem"
            color={`${isHovered ? "#5AC4FF" : "white"}`}
          />
        </div>
        <div className="block dark:hidden">
          <Icon fontSize="4rem" color={`${isHovered ? "#5AC4FF" : "black"}`} />
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 flex-grow w-full">
        <p className="card-title dark:text-white text-black text-lg font-semibold w-full">
          {title}
        </p>
        <p className="card-description dark:text-white text-black w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
