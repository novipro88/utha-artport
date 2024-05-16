import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ isSelected, name, onClick }: ProjectTagProps) => {
  const buttonClasses = isSelected
    ? "text-white border-mycolor-100"
    : "text-slate-100 border-mycolor-200 hover:border-mycolor-100";

  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonClasses} rounded-full  
    border-2 px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
