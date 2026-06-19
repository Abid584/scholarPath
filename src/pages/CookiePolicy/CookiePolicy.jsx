import React from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
import { FaCookie, FaInfoCircle, FaCog, FaShieldAlt } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <>
      <Container className={'py-20'}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-yellow-100 text-yellow-600 mb-4">
            <FaCookie size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            Transparency is important to us. This policy explains how we use
            cookies and similar technologies to recognize you when you visit our
            website.
          </p>
          <p className="text-sm text-base-content/50 mt-4">
            Last Updated: January 1, 2026
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: What are cookies? */}
          <section className="prose max-w-none text-base-content">
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-2xl text-primary" />
              <h2 className="text-2xl font-bold m-0">1. What are Cookies?</h2>
            </div>
            <p>
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
            </p>
          </section>

          <div className="divider"></div>

          {/* Section 2: Why we use them */}
          <section className="prose max-w-none text-base-content">
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-2xl text-secondary" />
              <h2 className="text-2xl font-bold m-0">2. How We Use Cookies</h2>
            </div>
            <p>ScholarStream uses cookies for several important reasons:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 not-prose">
              {/* Card 1 */}
              <div className="card bg-base-100 border border-base-200 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-2 text-primary">
                  Essential Cookies
                </h3>
                <p className="text-sm text-base-content/70">
                  These are strictly necessary for the website to function. For
                  example, we use a secure HTTP-only cookie to store your{" "}
                  <strong>JWT (Session Token)</strong> so you stay logged in
                  securely.
                </p>
              </div>
              {/* Card 2 */}
              <div className="card bg-base-100 border border-base-200 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-2 text-secondary">
                  Preference Cookies
                </h3>
                <p className="text-sm text-base-content/70">
                  These allow the website to remember choices you make, such as
                  your <strong>Dark/Light Theme</strong> preference (stored in
                  LocalStorage) or language settings.
                </p>
              </div>
              {/* Card 3 */}
              <div className="card bg-base-100 border border-base-200 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-2 text-accent">
                  Analytics Cookies
                </h3>
                <p className="text-sm text-base-content/70">
                  We use these to collect information about how you interact
                  with our website (e.g., which scholarship categories are most
                  popular) to improve our services.
                </p>
              </div>
              {/* Card 4 */}
              <div className="card bg-base-100 border border-base-200 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-2 text-warning">
                  Stripe Payment
                </h3>
                <p className="text-sm text-base-content/70">
                  Our payment processor (Stripe) uses cookies to detect fraud
                  and ensure secure transactions during the application fee
                  checkout process.
                </p>
              </div>
            </div>
          </section>

          <div className="divider"></div>

          {/* Section 3: Managing Cookies */}
          <section className="prose max-w-none text-base-content">
            <div className="flex items-center gap-3 mb-4">
              <FaCog className="text-2xl text-accent" />
              <h2 className="text-2xl font-bold m-0">
                3. Managing Your Preferences
              </h2>
            </div>
            <p>
              You have the right to decide whether to accept or reject cookies.
              You can exercise your cookie rights by setting your browser
              controls to accept or refuse cookies.
            </p>
            <p>
              <strong>Note:</strong> Because our login system relies on a secure
              cookie (`token`), blocking all cookies will prevent you from
              logging in to your Dashboard.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="alert bg-base-200 mt-12">
            <FaInfoCircle className="text-primary" />
            <div>
              <h3 className="font-bold">
                Have questions about our cookie usage?
              </h3>
              <div className="text-xs">
                Contact our privacy team for more details.
              </div>
            </div>
            <Link to="/contact" className="btn btn-sm btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CookiePolicy;
