import React from "react";
interface StepCardProps {
  order: number;
  name: string;
  detail: string;
  active: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  order,
  name,
  detail,
  active = false
}) => {
  return (
    <div className={`flex items-start gap-6 md:gap-12 self-stretch relative `}>
      <div
        className={`md:ml-10 flex w-6 mt-10 p-2 z-10 flex-col justify-center  items-center gap-2 border rounded-full dark:text-white text-black dark:bg-black ${
          active
            ? "h-10 bg-prime dark:bg-prime border-2 duration-1000"
            : "bg-white h-6"
        }`}
      ></div>
      <div className="md:ml-10 absolute top-16 left-2 transform w-px h-full bg-transparent border-r border-dashed border-black dark:border-white"></div>

      {/* Card Content */}
      <div
        className={`flex flex-col pb-10 md:pb-20 self-stretch cursor-pointer `}
      >
        <div className="flex gap-4">
          <p
            className={`text-4xl md:text-7xl font-thin uppercase dark:text-white text-black ${
              active ? "font-extrabold" : ""
            }`}
          >
            {order}.
          </p>
          <p
            className={`text-2xl md:text-4xl font-extralight uppercase dark:text-white text-black flex items-end ${
              active ? "font-medium" : ""
            }`}
          >
            {name}
          </p>
        </div>
        <p className="mt-4 text-xl md:text-2xl font-normal text-gray">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
