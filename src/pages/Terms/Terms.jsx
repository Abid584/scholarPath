import React from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
import {
  FaShieldAlt,
  FaGavel,
  FaFileContract,
  FaUserSecret,
} from "react-icons/fa";

const Terms = () => {
  // Function to handle smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-base-100 min-h-screen py-12">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using ScholarStream. By
            using our platform, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-base-content/50 mt-4">
            Last Updated: January 1, 2026
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Sidebar Navigation (Sticky) */}
          <div className="hidden lg:block w-1/4">
            <div className="sticky top-24 menu bg-base-200 rounded-box p-4">
              <li className="menu-title text-primary uppercase font-bold tracking-wider mb-2">
                Table of Contents
              </li>
              <li>
                <button onClick={() => scrollToSection("acceptance")}>
                  1. Acceptance of Terms
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("accounts")}>
                  2. User Accounts
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("payments")}>
                  3. Payments & Refunds
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("content")}>
                  4. Content & Conduct
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("liability")}>
                  5. Limitation of Liability
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("termination")}>
                  6. Termination
                </button>
              </li>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 space-y-12">
            {/* Section 1 */}
            <section
              id="acceptance"
              className="prose max-w-none text-base-content"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaFileContract className="text-3xl text-primary" />
                <h2 className="text-2xl font-bold m-0">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p>
                By accessing or using the ScholarStream website, you agree to
                comply with and be bound by these Terms of Service. If you do
                not agree to these terms, please do not use our services. We
                reserve the right to modify these terms at any time, and your
                continued use constitutes acceptance of those changes.
              </p>
            </section>

            <div className="divider"></div>

            {/* Section 2 */}
            <section
              id="accounts"
              className="prose max-w-none text-base-content"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaUserSecret className="text-3xl text-secondary" />
                <h2 className="text-2xl font-bold m-0">2. User Accounts</h2>
              </div>
              <p>
                To access certain features, you must register for an account.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>
                  You must provide accurate and complete information during
                  registration.
                </li>
                <li>
                  You may not use another user's account without permission.
                </li>
                <li>
                  We reserve the right to terminate accounts that violate our
                  policies.
                </li>
              </ul>
            </section>

            <div className="divider"></div>

            {/* Section 3 */}
            <section
              id="payments"
              className="prose max-w-none text-base-content"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-3xl text-accent" />
                <h2 className="text-2xl font-bold m-0">
                  3. Payments & Refunds
                </h2>
              </div>
              <p>
                ScholarStream facilitates application processing fees for
                scholarships. All payments are processed securely via Stripe.
              </p>
              <p className="font-bold mt-4">Refund Policy:</p>
              <p>
                Application fees and service charges are generally{" "}
                <strong>non-refundable</strong> once the application has been
                submitted to the university. Refunds are only considered in
                cases of technical error where a user was charged twice.
              </p>
            </section>

            <div className="divider"></div>

            {/* Section 4 */}
            <section
              id="content"
              className="prose max-w-none text-base-content"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaGavel className="text-3xl text-warning" />
                <h2 className="text-2xl font-bold m-0">4. Content & Conduct</h2>
              </div>
              <p>
                Users may post reviews and comments. You retain ownership of
                your content, but grant ScholarStream a license to display it.
              </p>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Post false or misleading information.</li>
                <li>Harass, abuse, or harm another person.</li>
                <li>
                  Attempt to interfere with the proper working of the site.
                </li>
              </ul>
            </section>

            <div className="divider"></div>

            {/* Section 5 */}
            <section
              id="liability"
              className="prose max-w-none text-base-content"
            >
              <h2 className="text-2xl font-bold mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                ScholarStream is a platform connecting students with
                opportunities. We do not guarantee scholarship acceptance. We
                are not liable for any direct, indirect, incidental, or
                consequential damages arising from your use of the service.
              </p>
            </section>

            {/* Footer Note */}
            <div className="bg-base-200 p-8 rounded-xl mt-12">
              <h3 className="font-bold text-lg mb-2">
                Have questions about our Terms?
              </h3>
              <p className="mb-4">
                Our legal team is available to help clarify any points.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
