import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Category 1 */}
          <Link href="#">
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
              <Image
                src="/productimg1.webp"
                alt="Games Cat"
                width={500}
                height={500}
                className="rounded-xl duration-500 group-hover:scale-125"
              />  
              <div className="absolute -bottom-24 group-hover:bottom-2  duration-500 scroll-m-20 text-4xl font-extrabold tracking-tighter bg-gray-700 text-center text-white w-full">
                <h1 className="uppercase">Game Templates</h1>
              </div>
            </div>
          </Link>

        {/* Category 2 */}
        <Link href="#">
          <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Image
              src="/productimg1.webp"
              alt="Games Cat"
              width={500}
              height={500}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tighter bg-gray-700 text-center text-white w-full">
              <h1 className="uppercase">Web Templates</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
