import React from "react";

const Rightside = () => {
  return (
    <div className="flex items-center gap-5">
      <p className="hover:bg-stone-200 rounded-lg px-2 py-1 font-light">
        Sign-in
      </p>
      <button className="bg-[#2563EB] hover:bg-[#286cff] text-white rounded-lg px-4 py-2 ">
        Get started
      </button>
    </div>
  );
};

export default Rightside;
