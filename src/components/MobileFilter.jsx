import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MobileFilter = ({ isOpen, onClose, filters, setFilters }) => {
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
            className="fixed top-0 left-0 h-full w-90 bg-white z-50 shadow-xl p-6 overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-black">Filters</h2>
              <button onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            {/* Filter Sections */}
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h3 className="font-medium mb-2 text-black">Category</h3>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      checked={filters.category.includes("Perfumes")}
                      onChange={() => {
                        if (filters.category.includes("Perfumes")) {
                          setFilters({
                            ...filters,
                            category: filters.category.filter(
                              (item) => item !== "Perfumes",
                            ),
                          });
                        } else {
                          setFilters({
                            ...filters,
                            category: [...filters.category, "Perfumes"],
                          });
                        }
                      }}
                    />
                    Perfumes
                  </label>
                  {filters.category.includes("Perfumes") && (
                    <div className="my-5 space-y-2">
                      <p className="text-sm font-medium text-black text-left">
                        Gender(Optional)
                      </p>

                      <div className="flex gap-2">
                        <div>
                          <label className="flex items-center gap-2 text-black">
                            <input
                              type="checkbox"
                              checked={filters.gender.includes("Male")}
                              onChange={() => {
                                if (filters.gender.includes("Male")) {
                                  setFilters({
                                    ...filters,
                                    gender: filters.gender.filter(
                                      (g) => g !== "Male",
                                    ),
                                  });
                                } else {
                                  setFilters({
                                    ...filters,
                                    gender: [...filters.gender, "Male"],
                                  });
                                }
                              }}
                            />
                            Male
                          </label>
                          {filters.gender.includes("Male") && (
                            <div className="mt-2 space-y-2 ">
                              <p className="text-sm font-medium text-black text-left">
                                Male Scents (Optional)
                              </p>
                              <div className="">
                                {[
                                  "Fresh Aquatic",
                                  "Woody",
                                  "Spicy",
                                  "Sweet",
                                ].map((scent) => (
                                  <label
                                    key={scent}
                                    className="flex items-center gap-2 text-black"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={filters.scent.includes(scent)}
                                      onChange={() => {
                                        if (filters.scent.includes(scent)) {
                                          setFilters({
                                            ...filters,
                                            scent: filters.scent.filter(
                                              (s) => s !== scent,
                                            ),
                                          });
                                        } else {
                                          setFilters({
                                            ...filters,
                                            scent: [...filters.scent, scent],
                                          });
                                        }
                                      }}
                                    />
                                    {scent}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-black">
                            <input
                              type="checkbox"
                              checked={filters.gender.includes("Female")}
                              onChange={() => {
                                if (filters.gender.includes("Female")) {
                                  setFilters({
                                    ...filters,
                                    gender: filters.gender.filter(
                                      (g) => g !== "Female",
                                    ),
                                  });
                                } else {
                                  setFilters({
                                    ...filters,
                                    gender: [...filters.gender, "Female"],
                                  });
                                }
                              }}
                            />
                            Female
                          </label>
                          {filters.gender.includes("Female") && (
                            <div className="mt-2 space-y-2">
                              <p className="text-sm font-medium text-black text-left">
                                Female Scents (Optional)
                              </p>
                              <div className="">
                                {[
                                  "Floral",
                                  "Fruity",
                                  "Sweet",
                                ].map((scent) => (
                                  <label
                                    key={scent}
                                    className="flex items-center gap-2 text-black"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={filters.scent.includes(scent)}
                                      onChange={() => {
                                        if (filters.scent.includes(scent)) {
                                          setFilters({
                                            ...filters,
                                            scent: filters.scent.filter(
                                              (s) => s !== scent,
                                            ),
                                          });
                                        } else {
                                          setFilters({
                                            ...filters,
                                            scent: [...filters.scent, scent],
                                          });
                                        }
                                      }}
                                    />
                                    {scent}
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-black">
                            <input
                              type="checkbox"
                              checked={filters.gender.includes("Unisex")}
                              onChange={() => {
                                if (filters.gender.includes("Unisex")) {
                                  setFilters({
                                    ...filters,
                                    gender: filters.gender.filter(
                                      (g) => g !== "Unisex",
                                    ),
                                  });
                                } else {
                                  setFilters({
                                    ...filters,
                                    gender: [...filters.gender, "Unisex"],
                                  });
                                }
                              }}
                            />
                            Unisex
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      checked={filters.category.includes("Body Sprays")}
                      onChange={() => {
                        if (filters.category.includes("Body Sprays")) {
                          setFilters({
                            ...filters,
                            category: filters.category.filter(
                              (item) => item !== "Body Sprays",
                            ),
                          });
                        } else {
                          setFilters({
                            ...filters,
                            category: [...filters.category, "Body Sprays"],
                          });
                        }
                      }}
                    />
                    Body Sprays
                  </label>

                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      checked={filters.category.includes("Skincare Products")}
                      onChange={() => {
                        if (filters.category.includes("Skincare Products")) {
                          setFilters({
                            ...filters,
                            category: filters.category.filter(
                              (item) => item !== "Skincare Products",
                            ),
                          });
                        } else {
                          setFilters({
                            ...filters,
                            category: [
                              ...filters.category,
                              "Skincare Products",
                            ],
                          });
                        }
                      }}
                    />
                    Skincare Products
                  </label>
                </div>
              </div>

              {/* Brand */}
              <div>
                <h3 className="font-medium mb-2 text-black">Brand</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes("Dior")}
                      onChange={() => {
                        if (filters.brand.includes("Dior")) {
                          setFilters({
                            ...filters,
                            brand: filters.brand.filter((b) => b !== "Dior"),
                          });
                        } else {
                          setFilters({
                            ...filters,
                            brand: [...filters.brand, "Dior"],
                          });
                        }
                      }}
                    />
                    Dior
                  </label>
                  <label className="flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes("Nivea")}
                      onChange={() => {
                        if (filters.brand.includes("Nivea")) {
                          setFilters({
                            ...filters,
                            brand: filters.brand.filter((b) => b !== "Nivea"),
                          });
                        } else {
                          setFilters({
                            ...filters,
                            brand: [...filters.brand, "Nivea"],
                          });
                        }
                      }}
                    />
                    Nivea
                  </label>
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-medium mb-2 text-black">Price</h3>
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
