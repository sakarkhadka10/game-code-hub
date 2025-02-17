import { ShoppingPage } from "@/components/ShoppingPage/ShoppingPage";
import React from "react";

const Category = () => {
  return (
    <div className="mt-[50px] mb-[100px]">
      {/* Headlines Of The Category */}
      <div className="text-center mb-10">
        <h1 className="text-gray-900 scroll-m-20 text-xl font-extrabold tracking-tighter lg:text-2xl capitalize">
          Games Template
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-32 h-1 rounded-full bg-orange-600 inline-flex" />
        </div>

        <div>
          <div>
            {/* Pass limitedItems as a prop to ShoppingPage */}
            <ShoppingPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
