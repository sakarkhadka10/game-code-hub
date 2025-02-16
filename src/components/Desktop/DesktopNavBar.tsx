import Link from "next/link";
import React from "react";
import * as configs from "../../../config";
import Image from "next/image";

const DesktopNavBar = () => {
  const NavItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Flash Sale", link: "#" },
    { id: 4, name: "Privacy Policy", link: "#" },
    { id: 5, name: "Contact Us", link: "#" },
  ];
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3">
        <div className="text-2xl font-extrabold">
          <Link href="/">
            <h1>{configs.PROJECT_NAME}</h1>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-10">
          <ul className="flex items-center gap-6 font-semibold text-md">
            {NavItems.map((items) => {
              return (
                <li key={items.id}>
                  <Link href={items.link}>{items.name}</Link>
                </li>
              );
            })}
            <Link href="/cart">
              <button className=" flex items-center gap-1.5 cursor-pointer font-bold">
                <Image src="/cart.webp" alt="cart" width={24} height={24} />( )
              </button>
            </Link>
            <button className="bg-amber-100 px-4 py-2 rounded-lg cursor-pointer font-bold">
              <span>Account</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DesktopNavBar;
