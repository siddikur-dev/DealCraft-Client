import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  const allProducts = useLoaderData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 container mx-auto">
      {allProducts?.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default AllProducts;
