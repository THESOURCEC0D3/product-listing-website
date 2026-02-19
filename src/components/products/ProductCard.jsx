import { createWhatsAppOrderLink } from "../../utils/whatsapp.js";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="flex flex-col space-y-3 items-center border rounded-2xl shadow-2xl shadow-gray-500 p-4 hover:scale-110 hover:border-blue-400 hover:shadow-2xl hover:shadow-purple-500 bg-white transition-all duration-500 z-10 cursor-pointer">
      <img src={product.image} alt={product.name} className="size-52" />
      <h2 className="text-black">{product.name}</h2>
      <p className="text-black">{product.price.toLocaleString()}</p>
      <p className="text-black">
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      <a
        href={createWhatsAppOrderLink(product, 2348065429005)}
        className="p-3 text-black bg-gray-200 rounded-2xl"
      >
        Get Product
      </a>
    </div>
  );
};

export default ProductCard;
