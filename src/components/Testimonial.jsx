import { motion } from "framer-motion";
import { testimonials } from "../data/testimonial.js";

const Testimonials = () => {
  // 1. Duplicate the array so we have 20 items (10 original + 10 clones)
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-3">Trusted by many happy customers</p>
      </div>

      {/* The "Mask" container that hides the overflow */}
      <div className="relative flex overflow-hidden group">
        {/* The Animated Track */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // Move from start to the half-way point
          }}
          transition={{
            duration: 35, // Adjust speed (lower is faster)
            ease: "linear", // Crucial for seamless movement
            repeat: Infinity, // Loop forever
          }}
          // The "Stop on Hover" logic
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="flex-shrink-0 w-[350px] px-4"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full border border-gray-100 whitespace-normal">
                <p className="text-gray-700 mb-6 text-base italic">
                  “{testimonial.message}”
                </p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Optional: Gradient overlays for the "fade" effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Testimonials;
