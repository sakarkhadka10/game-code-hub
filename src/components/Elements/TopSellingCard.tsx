import Image from "next/image";
import React from "react";

const TopSellingCard = ({
  image,
  title,
  category,
  price,
}: {
  image: string;
  title: string;
  category: string;
  price: string;
}) => {
  return (
    <div className="relative w-full h-full rounded-sm shadow-[3px_2px_10px_black] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-lg hover:shadow-[4px_4px_0px_black] flex flex-col">
      <div className="relative w-full h-[130px]">
        {/* Wrapper div for responsive image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-sm"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between text-center py-2 px-0.5">
        <h3 className="text-md font-semibold  flex-1">{title}</h3>
        <div className="mt-auto">
          <p className="text-gray-500 text-xs italic">{category}</p>
          <span className="text-lg font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default TopSellingCard;
