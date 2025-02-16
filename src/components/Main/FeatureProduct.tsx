"use client";
import React from "react";
import { allProduct } from "../../../api/allProductsList";
import ShoppingPage from "@/app/shop/page";
import { Button } from "../ui/button";
import { IoEyeSharp } from "react-icons/io5";

const FeatureProduct = () => {
  // Filter only the products that are featured
  const featuredProducts = allProduct.filter(
    (product) => product.featured === true
  );
  // Limit to the first 8 featured products
  const limitedItems = featuredProducts.slice(0, 8);
  return (
    <>
      <div className="mt-20 mx-11">
        <div className="flex justify-between items-center mx-16">
          <h1 className="font-bold text-2xl">Feature Games</h1>
          <Button>
            <IoEyeSharp />
            View All
          </Button>
        </div>

        <div>
          {/* Pass limitedItems as a prop to ShoppingPage */}
          <ShoppingPage items={limitedItems} />
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
