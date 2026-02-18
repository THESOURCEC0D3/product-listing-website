import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/products/ProductList.jsx";
import Footer from "../components/Footer.jsx";
import { products } from "../data/products.js";
import Testimonials from "../components/Testimonial.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
