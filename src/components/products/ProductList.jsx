import ProductCard from "./ProductCard"
import {motion} from "framer-motion"

const ProductList = ({ products }) => {
  return (
    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-3" 
    initial={{opacity: 0, y: 50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, ease: "easeOut"}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}

export default ProductList