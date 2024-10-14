import React from "react";

const Leftside = () => {
  return (
    <div className="flex items-center gap-5">
      <h1 className="text-2xl">
        Tax<span className="text-[#2563EB]  font-semibold">pal</span>
      </h1>
      <p className="hover:bg-stone-200 rounded-lg px-2 py-1 font-light">
        Feature
      </p>
      <p className="hover:bg-stone-200 rounded-lg px-2 py-1 font-light">
        Testimonials
      </p>
      <p className="hover:bg-stone-200 rounded-lg px-2 py-1 font-light">
        Pricing
      </p>
    </div>
  );
};

export default Leftside;
