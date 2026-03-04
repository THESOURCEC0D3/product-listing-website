import Header from "../components/Header";
import ProductList from "../components/products/ProductList";
import { products } from "../data/products";
import MobileSidebar from "../components/MobileSidebar";
import MobileFilter from "../components/MobileFilter";
import { useState } from "react";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      <div className="pt-24">
        <div className="flex justify-between items-center mb-4 p-5">
          {/* <p>48 Products</p> */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            Filter
          </button>
        </div>
        <h1 className="m-5 font-bold text-3xl md:text-5xl border-gray-400 bg-linear-to-r from-blue-600 via-white to-purple-400 shadow-2xl rounded-2xl p-5 text-black">
          Our Products
        </h1>
        <ProductList products={products} className="" />
      </div>
    </div>
  );
};

export default Products;
