"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import Tabbutton from "./Tabbutton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Photoshop</li>
        <li>Canva</li>
        <li>Figma</li>
        <li>Adobe Illustrator</li>
        <li>ibisPaint</li>
        <li>Microsoft Office</li>
      </ul>
    ),
  },
  {
    title: "Educations",
    id: "educations",
    content: (
      <ul className="list-disc pl-2">
        <li>
          2020 - 2023, SMA Negeri 22 Palembang Jurusan Ilmu Pengetahuan Alam
          (IPA)
        </li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>
          2019 - 2020, Desainer Grafis Garuda Revolution (Part Time Remote)
        </li>
        <li>2021 - 2022, Desainer Grafis Plesbol Inc. (Part Time Remote)</li>
        <li>2023 - .., Desainer Grafis Lingkar Sepakbola (Part Time Remote)</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");

  const [isPending, startTransition] = useTransition();

  const handleChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white" id="about">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
         py-8 px-4"
      >
        <Image alt="" src="/2.jpg" width={500} height={500} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            I am creative design graphic. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas impedit modi aliquid quaerat numquam
            veniam officia ut suscipit repudiandae quos! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Molestias labore saepe, nisi
            pariatur natus illum voluptatem eius, magni, ab soluta illo veniam
            nesciunt repellat omnis laudantium quia provident a eos.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleChange("educations")}
              active={tab === "educations"}
            >
              Educations
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleChange("experiences")}
              active={tab === "experiences"}
            >
              Experiences
            </Tabbutton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
