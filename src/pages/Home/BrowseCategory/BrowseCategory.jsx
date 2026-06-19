import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaLaptopCode,
  FaBriefcase,
  FaPalette,
  FaFlask,
  FaGavel,
} from "react-icons/fa";
import Container from "../../../components/Container/Container";

const categories = [
  { id: 1, name: "Medical", icon: <FaStethoscope />, query: "medical" },
  { id: 2, name: "Engineering", icon: <FaLaptopCode />, query: "engineering" },
  { id: 3, name: "Business", icon: <FaBriefcase />, query: "business" },
  { id: 4, name: "Arts & Humanities", icon: <FaPalette />, query: "arts" },
  { id: 5, name: "Science", icon: <FaFlask />, query: "science" },
  { id: 6, name: "Law", icon: <FaGavel />, query: "law" },
];

const BrowseCategory = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryQuery) => {
    // Navigate to All Scholarships page with the category query parameter
    navigate(`/scholarships?search=${categoryQuery}`);
  };

  return (
    <>
      <Container className={'my-32'}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find scholarships that match your field of study. Select a category
            to start your search.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(cat.query)}
              className="card bg-base-100 shadow-md hover:shadow-xl hover:border-primary border border-transparent cursor-pointer transition-all duration-300 group"
            >
              <div className="card-body items-center text-center p-6">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>

                {/* Category Name */}
                <h3 className="font-semibold text-lg mt-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default BrowseCategory;
