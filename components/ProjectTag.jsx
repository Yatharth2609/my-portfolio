import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyle = isSelected ? "bg-purple-500 text-white" : "text-[#adb7be] border border-slate-600 hover:border-white";
  return (
    <button className={`${buttonStyle} rounded-full px-6 py-2 text-xl cursor-pointer`} onClick={onClick}>
      {name}
    </button>
  );
};

export default ProjectTag;
