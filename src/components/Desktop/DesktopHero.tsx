"use client";
import React from "react";
import AnimatedButton from "@/components/Elements/AnimatedButton";
import { FlipWords } from "../ui/flip-words";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

const DesktopHero = () => {
  const words = ["Games", "Websites"];
  const placeholders = [
    "Bus Mania : Station Shuffle Game Buy Unity Source",
    "Santa’s Christmas Bundle Top 10 Unity Game Source Code",
    "Human vs Alien – Multiplayer Game Buy Unity Source Code",
    "Metal Black OPS Game Buy Unity Source Code",
    "Summer Special Deal 30 Unity Source Code Bundle",
    "New Year Simulation Bundle 10 Best Unity Game Source Code",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <div className=" h-96 bg-[url(https://i.pinimg.com/736x/36/3a/05/363a05ba5c7700b20b29898fd7c5a0f1.jpg)] bg-center bg-no-repeat bg-cover bg-origin-content">
        <div className="flex flex-col justify-center items-center p-6 pt-24">
          <h1 className="text-2xl font-extrabold pb-2">
            Unlock Creativity with Premium <FlipWords words={words} /> Source
            Codes
          </h1>
          <p className="text-lg">
            Kickstart the New Year with Exclusive Game & Web Source Codes !
          </p>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <div className="text-center flex items-center justify-center gap-4">
          <AnimatedButton name="New Arival" active />
          <AnimatedButton name="Game Template" />
          <AnimatedButton name="Web Template" />
        </div>
        <br />
      </div>
    </>
  );
};

export default DesktopHero;
