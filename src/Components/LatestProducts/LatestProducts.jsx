import { use } from "react";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

const LatestProducts = ({ productsAll }) => {
  const products = use(productsAll);
  console.log(products);
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <header className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-primary">Products</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Browse our most popular and trending products
        </p>
      </header>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
