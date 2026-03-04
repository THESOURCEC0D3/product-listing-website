import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MobileFilter = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide Panel */}
          <motion.div
            className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl p-6 overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            {/* Filter Sections */}
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Perfumes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Body Mists
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Skincare
                  </label>
                </div>
              </div>

              {/* Brand */}
              <div>
                <h3 className="font-medium mb-2">Brand</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Dior
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Nivea
                  </label>
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-medium mb-2">Price</h3>
                <input type="range" min="0" max="100000" className="w-full" />
              </div>
            </div>

            {/* Apply Button */}
            <button
              onClick={onClose}
              className="mt-8 w-full text-white py-3 rounded-xl bg-purple-600"
            >
              Apply Filters
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileFilter;
