import { motion } from "framer-motion";
import Banner from "./Banner/Banner";
import FAQ from "./Faq/Faq";
import TopScholarship from "./TopScholarship/TopScholarship";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import Stats from "./Stats/Stats";
import BrowseCategory from "./BrowseCategory/BrowseCategory";
import HowItWorks from "./HowItWorks/HowItWorks";
import TrustedUniversities from "./TrustedUniversities/TrustedUniversities";
import SuccessStories from "./SuccessStories/SuccessStories";

const Home = () => {
  const statsRef = useRef();
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToTopScholarships = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // 'overflow-x-hidden' prevents horizontal scrollbars during animation
    <section className="overflow-hidden">
      {/* Banner: Animates immediately on page load */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <Banner />
      </motion.div>

      <div
        onClick={scrollToTopScholarships}
        className="animate-bounce bg-primary text-primary-content cursor-pointer w-12 h-12 rounded-full mx-auto flex items-center justify-center mt-10 active:scale-95 transition-all duration-100 hover:bg-primary/90"
      >
        <ArrowDown />
      </div>

      <div ref={statsRef} className="scroll-mt-24">
        <Stats />
      </div>

      {/* Top Scholarship: Animates when user scrolls to it */}
      <div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // 'once: true' means it won't animate again when scrolling up
          className="my-12" // Add spacing between sections
        >
          <TopScholarship />
        </motion.div>
      </div>

      {/* Browse by category  */}
      <BrowseCategory />

      {/* How is it works */}
      <HowItWorks />

      {/* Trusted Universities */}
      <TrustedUniversities />

      {/* SuccessStories  */}
      <SuccessStories />

      {/* FAQ Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="my-12"
      >
        <FAQ />
      </motion.div>
    </section>
  );
};

export default Home;
