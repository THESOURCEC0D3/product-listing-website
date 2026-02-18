import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center fixed inset-x-0 p-5 bg-white/50 backdrop-blur-md shadow-xl shadow-purple-400 z-30 ">
      <Link
        to="/"
        className="text-5xl font-bold text-purple-600 text-shadow-lg text-shadow-gray-500"
      >
        Cosmart
      </Link>
      <Link
        to="/products"
        className="p-3 bg-gray-200 rounded-2xl text-purple-600 hidden md:block"
      >
        Our Products
      </Link>
      <Link
        to="/contact"
        className="p-3 bg-gray-200 rounded-2xl text-purple-600 hidden md:block"
      >
        Contact Us
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default Header;
