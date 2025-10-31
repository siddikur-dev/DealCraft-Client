import { use } from "react";
import { Link } from "react-router";

const FeaturedProducts = ({ productsAll }) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-base-100 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <figure className="h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x400?text=No+Image";
                }}
              />
            </figure>

            {/* Product Info */}
            <div className="p-5 flex flex-col justify-between h-44">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {product.title}
                </h3>
                <span className="text-xl font-bold text-primary">
                  {product.price_max.toFixed(2)} - {product.price_min.toFixed()}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-outline btn-primary btn-sm w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
