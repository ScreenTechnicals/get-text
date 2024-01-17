"use client";

import TextCard from "@/components/Cards/TextCard";
import convertor from "@/lib/convertor";
import React, { useRef, useState } from "react";
import { BsImageFill } from "react-icons/bs";

const Home = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [texts, setTexts] = useState<Array<string>>([]);
  const imageInputRef: any = useRef(null);
  const openBrowseImage = async () => {
    await imageInputRef.current.click();
  };

  const convert = async (url: string) => {
    if (url.length) {
      setProcessing(true);
      await convertor(url).then((txt: string) => {
        let copyTexts: Array<string> = texts;
        copyTexts.push(txt);
        setTexts(copyTexts);
      });
      setProcessing(false);
    }
  };
  return (
    <div className="min-h-[90vh]">
      <h1 className="text-white text-4xl md:text-6xl text-center px-5 pt-5 font-[800] ">
        Built With{" "}
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Tesseract Js{" "}
        </span>
      </h1>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          let url: string = URL.createObjectURL(e.target.files?.[0]!);
          convert(url);
        }}
        ref={imageInputRef}
        type="file"
        hidden
        required
      />
      <div className="relative md:bottom-10 w-full flex flex-col gap-10 items-center justify-center p-5 md:p-20">
        <div
          onClick={() => {
            openBrowseImage();
          }}
          onDragOver={(e: any) => {
            e.preventDefault();
          }}
          onDrop={(e: any) => {
            e.preventDefault();
            let url: string = URL.createObjectURL(e.dataTransfer.files?.[0]!);
            convert(url);
          }}
          className="w-full min-h-[30vh] md:min-h-[50vh] p-5 bg-[#202020] cursor-pointer rounded-xl flex items-center justify-center"
        >
          <div className="w-full flex items-center justify-center flex-col gap-3">
            <p className="text-2xl md:text-3xl text-center text-[#707070] font-[800]">
              {processing
                ? "Processing Image..."
                : "Browse Or Drop Your Image Here"}
            </p>
            <span className="text-8xl md:text-[150px] block  text-[#5f5f5f]">
              <BsImageFill className={processing ? "animate-pulse" : ""} />
            </span>
          </div>
        </div>
        {texts.map((t, i) => {
          return <TextCard t={t} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
