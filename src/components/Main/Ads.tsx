import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/button";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import * as configs from "../../../config";

const Ads = () => {
  const words = ["Games", "Websites"];
  const social = ["Whatsapp.", "Telegram.", "Email."];
  return (
    <>
      <div className=" h-96 mt-11 bg-[url(https://i.pinimg.com/736x/36/3a/05/363a05ba5c7700b20b29898fd7c5a0f1.jpg)] bg-center bg-no-repeat bg-cover bg-origin-content">
        <div className="flex flex-col justify-center items-center p-6 pt-24">
          <h1 className="text-3xl font-extrabold pb-2">
            Want any help for <FlipWords words={words} /> Customization
          </h1>
          <p className="text-xl">
            Feel free to send us mssage on our socials channel{" "}
            <FlipWords words={social} />
          </p>
        </div>
        <div className="text-center flex items-center justify-center gap-4 mt-14">
          <a href={configs.WHATSAPP_URL}>
            <Button>
              <FaWhatsapp /> Whatsapp
            </Button>
          </a>
          <a href={configs.TELEGRAM_URL}>
            <Button>
              <FaTelegram /> Telegram
            </Button>
          </a>
          <a href={configs.EMAIL_URL}>
            <Button>
              <CgMail /> Email
            </Button>
          </a>
        </div>
        <br />
      </div>
    </>
  );
};

export default Ads;
