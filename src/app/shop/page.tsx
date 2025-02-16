import ProductCard from "@/components/Elements/ProductCard";
import React from "react";
import { allProduct } from "../../../api/allProductsList";

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string; // You can change this to number if the price is a numeric value
  inStock: number;
}
interface ShoppingPageProps {
  items: Product[]; // An array of Product objects
}
const ShoppingPage: React.FC<ShoppingPageProps> = ({ items }) => {
  const productsToDisplay = items || allProduct;
  return (
    <>
      <div className="py-4 ">
        <div className="grid px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-16 items-stretch">
          {productsToDisplay.map((product: any) => (
            <div key={product.id} className="w-[270px] h-auto flex flex-col">
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
    </>
  );
};

export default ShoppingPage;
