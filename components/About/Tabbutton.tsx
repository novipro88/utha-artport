"use client";

import { motion } from "framer-motion";
import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabbuttonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const Tabbutton = ({ active, children, selectTab }: TabbuttonProps) => {
  const buttonClasses = active ? "text-white" : "text-slate-100";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-mycolor-100 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default Tabbutton;
