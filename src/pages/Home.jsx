import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/products/ProductList.jsx";
import Footer from "../components/Footer.jsx";
import { products } from "../data/products.js";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
