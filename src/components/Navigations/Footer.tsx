import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center p-5 text-white">
      <p>
        Built with{" "}
        <a
          href="https://tesseract.projectnaptha.com"
          target="_blank"
          referrerPolicy="no-referrer"
          className="underline text-[#ff8e3d]"
        >
          tesseract.js
        </a>{" "}
        💗{" "}
        <a
          href="https://github.com/ScreenTechnicals"
          target="_blank"
          referrerPolicy="no-referrer"
          className=" text-[#ffffff]"
        >
          Dev Verse
        </a>
      </p>
    </footer>
  );
};

export default Footer;
