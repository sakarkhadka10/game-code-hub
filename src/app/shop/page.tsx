import React from "react";
import { allProduct } from "../../../api/allProductsList";
import { ShoppingPage } from "@/components/ShoppingPage/ShoppingPage";

export interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  slug: string;
  price: string;
  inStock: number;
}

export default function Page() {
  return <ShoppingPage items={allProduct} />;
}
