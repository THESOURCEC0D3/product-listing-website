import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center fixed inset-x-0 p-5 bg-white/50 backdrop-blur-md shadow-xl shadow-purple-400 z-30 ">
      <Link to="/" className="text-5xl font-bold text-purple-600 text-shadow-lg text-shadow-gray-500">
        Cosmart
      </Link>
      <Link
        to="/products"
        className="p-3 bg-gray-200 rounded-2xl text-purple-600"
      >
        Our Products
      </Link>
      <Link
        to="/contact"
        className="p-3 bg-gray-200 rounded-2xl text-purple-600"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
