"use client";
import Image from "next/image";
import React, { useState } from "react";

const SlugComponent = () => {
  const [path, setPath] = useState("");
  return (
    <div>
      <Image
        src={path ? path : "/productImg10.webp"}
        alt="product img"
        width={1024}
        height={500}
        className="w-full object-cover"
      />

      <div className="flex items-center justify-center gap-4 mx-auto mt-4">
        <div className="cursor-pointer">
          <Image
            src={"/productImg10.webp"}
            alt="screenshot1"
            width={120}
            height={60}
            onClick={() => setPath("/productImg10.webp")}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={"/productImg6.webp"}
            alt="screenshot1"
            width={120}
            height={60}
            onClick={() => setPath("/productImg6.webp")}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={"/productImg7.webp"}
            alt="screenshot1"
            width={120}
            height={60}
            onClick={() => setPath("/productImg7.webp")}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={"/productImg8.webp"}
            alt="screenshot1"
            width={120}
            height={60}
            onClick={() => setPath("/productImg8.webp")}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={"/productImg9.webp"}
            alt="screenshot1"
            width={120}
            height={60}
            onClick={() => setPath("/productImg9.webp")}
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={"/productImg12.webp"}
            alt="screenshot1"
            width={120}
            height={60}
            onClick={() => setPath("/productImg12.webp")}
          />
        </div>
      </div>
    </div>
  );
};

export default SlugComponent;
