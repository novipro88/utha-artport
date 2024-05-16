"use client";

import React from "react";
import { FiActivity, FiUsers, FiAward, FiClock } from "react-icons/fi";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const Listachieve = [
  {
    metric: "Projects",
    value: "28",
    postfix: "+",
    icon: FiActivity,
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100",
    icon: FiUsers,
  },
  {
    metric: "Awards",
    value: "4",
    icon: FiAward,
  },
  {
    metric: "Years",
    value: "3",
    icon: FiClock,
  },
];

const Archive = () => {
  return (
    <div className="py-8 px-4 mt-0 md:mt-5 lg:mt-12 xl:gap-16 ">
      <div className=" py-6 px-16 flex flex-col md:flex-row items-center justify-between ">
        {Listachieve.map((arc, index) => {
          const IconComponent = arc.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 md:my-0"
            >
              <div className="flex items-center justify-center">
                <IconComponent className="text-4xl text-white mr-2 " />

                <h2 className="text-white text-4xl font-semibold flex flex-row">
                  {arc.prefix}

                  <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={parseInt(arc.value)}
                    className="text-white text-4xl font-semibold"
                  />
                  <span className="ml-2">{arc.postfix}</span>
                </h2>
              </div>

              <p className="text-mycolor-700 text-base">{arc.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Archive;
