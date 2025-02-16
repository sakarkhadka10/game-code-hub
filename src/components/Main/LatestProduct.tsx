"use client";
import React from "react";
import { allProduct } from "../../../api/allProductsList";
import { ShoppingPage } from "../ShoppingPage/ShoppingPage";
import { Button } from "../ui/button";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

const LatestProduct = () => {
  const limitedItems = allProduct.slice(0, 8);
  return (
    <>
      <div className="mt-16 mx-11">
        <div className="flex justify-between items-center mx-16">
          <h1 className="font-bold text-2xl">Latest Projects</h1>
          <Link href="/shop">
            <Button>
              <IoEyeSharp />
              View All
            </Button>
          </Link>
        </div>

        <div>
          {/* Pass limitedItems as a prop to ShoppingPage */}
          <ShoppingPage items={limitedItems} />
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
