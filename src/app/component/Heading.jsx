import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({children,className}) => {
  return (
    <div className={cn(`relative w-fit ${className}`)}>
      <h1 className={cn(`text-2xl font-bold capitalize`)}>{children}</h1>
      <div className=" absolute min-w-full h-1 bg-green-900 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default Heading;
