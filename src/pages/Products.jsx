import Header from "../components/Header";
import ProductList from "../components/products/ProductList";
import { products } from "../data/products";
import MobileSidebar from "../components/MobileSidebar";
import { useState } from "react";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="pt-24">
        <h1 className="m-5 border-gray-400 bg-linear-to-r from-blue-600 via-white to-purple-400 shadow-2xl rounded-2xl p-5 text-black">
          Our Products
        </h1>
        <ProductList products={products} className="" />
      </div>
    </div>
  );
};

export default Products;
