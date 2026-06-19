import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaFileSignature,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";
import Container from "../../../components/Container/Container";

const steps = [
  {
    id: 1,
    title: "Search & Select",
    description:
      "Browse through our curated list of scholarships. Filter by category, location, or university to find your perfect match.",
    icon: <FaSearch />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Apply Online",
    description:
      "Create your profile, upload necessary documents, and pay the application fee securely through our platform.",
    icon: <FaFileSignature />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Get Funded",
    description:
      "Track your application status in real-time. Once accepted, connect with the university and start your journey.",
    icon: <FaUserGraduate />,
    color: "bg-purple-100 text-purple-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Each child animates 0.3s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const HowItWorks = () => {
  return (
    <Container className={"my-32"}>
      <div>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Securing a scholarship hasn't been this easy. Follow these three
            simple steps to achieve your academic dreams.
          </p>
        </div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-base-100 border border-base-200 shadow-sm hover:shadow-2xl transition-all duration-300 z-10"
            >
              {/* Icon Bubble */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 ${step.color} shadow-inner`}
              >
                {step.icon}
              </div>

              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 badge badge-neutral badge-lg font-bold">
                0{step.id}
              </div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow for Desktop (Visual Connector) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-0 text-gray-300">
                  <FaArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default HowItWorks;
