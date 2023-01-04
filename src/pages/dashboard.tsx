import Image from "next/image";
import React from "react";

const dashboard = () => {
  return (
    <div className="pt-12">
      <img
        src="/dot-texture.jpg"
        alt="hero section cartwheel"
        className="fixed top-0 z-[-10] h-[100vh] w-[100vw] object-cover opacity-40"
      />
      <div className="fixed top-0 z-[-10] h-full w-full bg-gradient-to-b from-white via-white to-purple-100 opacity-90"></div>
    </div>
  );
};

export default dashboard;
