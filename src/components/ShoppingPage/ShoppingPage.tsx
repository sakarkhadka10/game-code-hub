import React from "react";
import ProductCard from "@/components/Elements/ProductCard";
import { allProduct } from "../../../api/allProductsList";
import { Product } from "@/app/shop/page";

interface ShoppingPageProps {
  items?: Product[];
}

export const ShoppingPage: React.FC<ShoppingPageProps> = ({ items }) => {
  const productsToDisplay = items || allProduct;

  return (
    <div className="py-4">
      <div className="grid px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-16 items-stretch">
        {productsToDisplay.map((product: Product) => (
          <div
            key={product.id}
            className="w-[250] lg:w-[270px] h-auto flex flex-col"
          >
            <ProductCard
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
