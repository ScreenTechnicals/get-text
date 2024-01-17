import React from "react";
import toast from "react-hot-toast";

const TextCard = ({ t, i }: { t: string; i: number }) => {
  const copyToCLipBoard = (txt: string) => {
    navigator.clipboard.writeText(txt);
    toast.success("Copied To Clipboard.");
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5 px-5 gap-10">
        <p className="text-white text-sm md:text-xl">
          {"(" + (i + 1) + ") "}
          {new Date().toUTCString()}
        </p>
        <button
          onClick={() => {
            copyToCLipBoard(t);
          }}
          className="bg-[#fff] px-5 py-2 rounded-md hover:bg-[#8d8d8d] transition-all md:text-base text-sm"
        >
          Copy
        </button>
      </div>
      <textarea
        className="w-full outline-none rounded-xl text-white min-h-[25vh] md:min-h-[50vh] bg-[#202020] p-5 tracking-wider font-[300] text-sm"
        defaultValue={t}
      ></textarea>
    </div>
  );
};

export default TextCard;
