import React from "react";

interface StepperProps {
  classname?: string;
  children: React.ReactNode;
}

const Stepper: React.FC<StepperProps> = ({ classname, children }) => {
  return <div className={`stepper ${classname}`}>{children}</div>;
};

export default Stepper;
