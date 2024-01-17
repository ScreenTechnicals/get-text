"use client";

import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 backdrop-blur-xl px-5 md:px-20 py-5 text-white flex items-center justify-between">
      <div className="">
        <Link
          href={"/"}
          className="flex items-center font-[900] text-xl md:text-3xl"
        >
          Get Text
        </Link>
      </div>

      <div>
        <a
          href="https://github.com/ScreenTechnicals/get-text"
          target="_blank"
          referrerPolicy="no-referrer"
          className="bg-white px-5 py-2 text-black rounded-md font-[800] text-sm md:text-base flex items-center md:gap-1"
        >
          <span>Github</span>
          <span className="text-md md:text-xl">
            <FiArrowUpRight />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
