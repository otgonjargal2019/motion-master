import React from "react";

const AnimatedLine = () => {
  return (
    <div className="relative flex-1 h-[3px] bg-white overflow-hidden">
      <div className="absolute bg-[#FF5B15] animate-moving-line"></div>
    </div>
  );
};

export default AnimatedLine;
