import React, { useState } from "react";
import Container from "../../components/Container/Container";
import {
  FaPassport,
  FaPenNib,
  FaUserTie,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

// 1. Updated Data with 'content' field
const resourcesData = [
  {
    id: 1,
    category: "essay",
    title: "How to Write a Winning Scholarship Essay",
    description:
      "The essay is the most important part of your application. Learn how to tell your story effectively.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
    readTime: "5 min read",
    author: "Admissions Team",
    content: `
      <p class="mb-4"><strong>1. Start with a Hook:</strong> The first sentence is crucial. Don't start with "My name is..." Start with a defining moment in your life.</p>
      <p class="mb-4"><strong>2. Be Authentic:</strong> Scholarship committees read thousands of essays. They can spot a fake story. Write about what truly moves you.</p>
      <p class="mb-4"><strong>3. Show, Don't Tell:</strong> Instead of saying "I am hardworking," describe a time you worked two jobs to support your family.</p>
      <p><strong>4. Proofread:</strong> Spelling mistakes are a major red flag. Have at least two people read your essay before you submit it.</p>
    `,
  },
  {
    id: 2,
    category: "visa",
    title: "US Student Visa (F1) Application Guide",
    description:
      "Step-by-step walkthrough of the DS-160 form and how to crack the visa interview.",
    image:
      "https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=1000&auto=format&fit=crop",
    readTime: "8 min read",
    author: "Visa Expert",
    content: `
      <p class="mb-4">Getting an F1 visa involves several steps:</p>
      <ul class="list-disc ml-5 mb-4">
        <li>Apply to a SEVP-approved school and get your I-20.</li>
        <li>Pay the SEVIS I-901 fee.</li>
        <li>Complete the DS-160 form online.</li>
        <li>Schedule your visa interview.</li>
      </ul>
      <p><strong>Interview Tip:</strong> Be clear about your intent to return to your home country after your studies. This is the #1 reason for rejection.</p>
    `,
  },
  {
    id: 3,
    category: "interview",
    title: "Top 10 Scholarship Interview Questions",
    description:
      "Prepare for these common questions to impress the scholarship committee.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    readTime: "6 min read",
    author: "Alumni Network",
    content: `
      <p class="mb-4">Prepare answers for these common questions:</p>
      <ol class="list-decimal ml-5 mb-4">
        <li>Tell us about yourself.</li>
        <li>Why do you deserve this scholarship?</li>
        <li>What are your greatest strengths and weaknesses?</li>
        <li>Where do you see yourself in 5 years?</li>
        <li>How will this scholarship help you achieve your academic and career goals?</li>
        <li>What challenges have you faced, and how did you overcome them?</li>
        <li>Why did you choose your field of study?</li>
        <li>What extracurricular activities or community service are you involved in?</li>
        <li>How do you plan to give back to the community after completing your studies?</li>
        <li>What makes you different from other applicants?</li>

      </ol>
      <p><strong>Pro Tip:</strong> Practice in front of a mirror or with a friend. Body language matters as much as your answers.</p>
    `,
  },
  {
    id: 4,
    category: "essay",
    title: "Structuring Your Statement of Purpose (SOP)",
    description:
      "A clear structure for your SOP that highlights your academic achievements and future goals.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
    readTime: "4 min read",
    author: "Academic Advisor",
    content: `
      <p class="mb-4">A standard SOP should follow this structure:</p>
      <p class="mb-2"><strong>Paragraph 1: Introduction.</strong> Who are you and what do you want to study?</p>
      <p class="mb-2"><strong>Paragraph 2: Academic Background.</strong> What have you done so far to prepare for this?</p>
      <p class="mb-2"><strong>Paragraph 3: Professional Experience.</strong> Any internships or jobs?</p>
      <p class="mb-2"><strong>Paragraph 4: Why this University?</strong> Mention specific professors or labs.</p>
      <p class="mb-2"><strong>Paragraph 5: Future Goals.</strong> How will this degree help you?</p>
    `,
  },
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null); // 2. State for Modal

  const filteredResources =
    activeTab === "all"
      ? resourcesData
      : resourcesData.filter((item) => item.category === activeTab);

  // 3. Handler to open modal
  const handleReadArticle = (article) => {
    setSelectedArticle(article);
    document.getElementById("article_modal").showModal();
  };

  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-base-content">
          Student <span className="text-primary">Resources</span>
        </h1>
        <p className="text-base-content/60 max-w-2xl mx-auto">
          Expert guides, tips, and strategies to help you secure your dream
          scholarship.
        </p>
      </div>

      {/* Tabs... (Same as before) */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("all")}
          className={`btn rounded-full px-6 ${activeTab === "all" ? "btn-primary" : "btn-outline"}`}
        >
          All Resources
        </button>
        <button
          onClick={() => setActiveTab("essay")}
          className={`btn rounded-full px-6 gap-2 ${activeTab === "essay" ? "btn-primary" : "btn-outline"}`}
        >
          <FaPenNib /> Essay Tips
        </button>
        <button
          onClick={() => setActiveTab("visa")}
          className={`btn rounded-full px-6 gap-2 ${activeTab === "visa" ? "btn-primary" : "btn-outline"}`}
        >
          <FaPassport /> Visa Guide
        </button>
        <button
          onClick={() => setActiveTab("interview")}
          className={`btn rounded-full px-6 gap-2 ${activeTab === "interview" ? "btn-primary" : "btn-outline"}`}
        >
          <FaUserTie /> Interview Prep
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={item.id}
            className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <span className="badge badge-ghost uppercase font-bold">
                  {item.category}
                </span>
                <span>{item.readTime}</span>
              </div>
              <h3 className="card-title text-xl font-bold hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-base-content/70 text-sm mt-2">
                {item.description}
              </p>
              <div className="card-actions mt-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-6">
                      <span>{item.author[0]}</span>
                    </div>
                  </div>
                  {item.author}
                </div>
                {/* 4. Attach onClick handler */}
                <button
                  onClick={() => handleReadArticle(item)}
                  className="btn btn-link btn-sm text-primary no-underline p-0 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read Article <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 5. The Modal Component */}
      <dialog id="article_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-3xl p-0 overflow-hidden bg-base-100">
          {selectedArticle && (
            <>
              {/* Modal Header Image */}
              <div className="h-48 w-full relative">
                <img
                  src={selectedArticle.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedArticle.title}
                  </h2>
                </div>
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-black/20 hover:bg-black/40">
                    ✕
                  </button>
                </form>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 border-b pb-4">
                  <span className="flex items-center gap-1">
                    <FaUserTie /> {selectedArticle.author}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                {/* Dangerous HTML rendering for rich text feel */}
                <div
                  className="prose prose-lg max-w-none text-base-content"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                ></div>

                <div className="modal-action mt-8">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </Container>
  );
};

export default Resources;
