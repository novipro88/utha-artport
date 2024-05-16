import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-mycolor-200 text-center items-center justify-center">
      <div className="flex flex-col">
        <div className="container p-12 flex text-2xl text-white text-center items-center justify-between ">
          <Link href="https://utha-artgal.vercel.app/gallery" target="_blank">
            <span className="text-xl md:text-2xl text-mycolor-700 font-semibold font-pacifico mr-4 text-transparent bg-clip-text bg-gradient-to-r from-mycolor-200 to-mycolor-100">
              Utha Art Studio
            </span>
          </Link>
          © 2024 | All Rights reserverd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
