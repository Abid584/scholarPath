import React from "react";
import Container from "../../../components/Container/Container";
import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I apply for a scholarship?",
      answer:
        "It's simple! Create an account, browse our extensive list of scholarships, click the 'View Details' button, and then hit 'Apply Now'. You'll need to fill out a brief form and pay the application fee securely.",
    },
    {
      question: "Is the application fee refundable?",
      answer:
        "The application fee covers the administrative costs of processing your application and verifying documents. Therefore, it is generally non-refundable, even if the application is rejected by the university.",
    },
    {
      question: "Can I apply for multiple scholarships?",
      answer:
        "Absolutely! We encourage you to maximize your chances. You can apply for as many scholarships as you are eligible for. You can track all your applications from your personal Dashboard.",
    },
    {
      question: "How do I know if I got selected?",
      answer:
        "Transparency is key. You can check the real-time status of your application (Pending, Processing, Completed) in your Dashboard. Additionally, we send instant email notifications for any status updates.",
    },
    {
      question: "What documents do I usually need?",
      answer:
        "Most scholarships require a valid passport, academic transcripts, a CV/Resume, and a Statement of Purpose. Specific requirements are listed on each scholarship's details page.",
    },
  ];

  return (
    <>
      <Container >
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Text Header & Illustration */}
          <div className="lg:w-1/3 sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <FaQuestionCircle className="text-primary text-2xl" />
              <span className="font-bold text-sm tracking-widest text-primary uppercase">
                Support
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-base-content leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-base-content/70 text-lg mb-8">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>

            <button className="btn btn-primary btn-outline rounded-full px-8">
              Contact Support
            </button>
          </div>

          {/* Right Side: Accordion Items */}
          <div className="lg:w-2/3 w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl"
              >
                {/* 
                   Logic: 
                   - 'defaultChecked' is only true for the first item (index === 0)
                   - Using 'name="my-accordion-2"' ensures only one opens at a time 
                */}
                <input
                  type="radio"
                  name="my-accordion-2"
                  defaultChecked={index === 0}
                />

                <div className="collapse-title text-lg font-bold text-base-content">
                  {faq.question}
                </div>
                <div className="collapse-content text-base-content/70 leading-relaxed">
                  <p className="pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
