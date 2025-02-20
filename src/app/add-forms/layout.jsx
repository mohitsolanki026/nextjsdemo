import React from "react";

const layout = ({ children }) => {
  return (
    <div className=" ">
      <div className="bg-gradient-to-r from-green-950 to-slate-100 flex justify-center items-center py-16 rounded-b-lg">
        <img src="/bidaal.svg" alt="bidaal" className="h-20 text-white" />
      </div>
      <div className="my-5 max-w-[75vw] mx-auto">{children}</div>
    </div>
  );
};

export default layout;
