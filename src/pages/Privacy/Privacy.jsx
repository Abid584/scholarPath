import React from "react";
import Container from "../../components/Container/Container";
import { FaLock, FaUserSecret, FaCookieBite, FaServer } from "react-icons/fa";

const Privacy = () => {
  return (
    <div className="bg-base-100 min-h-screen py-12">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            Your privacy is critically important to us. This policy explains how
            we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-base-content/50 mt-4">
            Effective Date: January 1, 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: Info Collection */}
          <div className="card bg-base-100 border border-base-200 shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full mt-1">
                <FaUserSecret size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-base-content/70 mb-4">
                  We collect information to provide better services to all our
                  users. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-base-content/70">
                  <li>
                    <strong>Personal Information:</strong> Name, email address,
                    phone number, and profile picture provided during
                    registration.
                  </li>
                  <li>
                    <strong>Application Data:</strong> Academic transcripts,
                    essays, and other documents uploaded for scholarship
                    applications.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Transaction details
                    processed securely via Stripe (we do not store full credit
                    card numbers).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: How We Use Data */}
          <div className="card bg-base-100 border border-base-200 shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-full mt-1">
                <FaServer size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-base-content/70">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-base-content/70">
                  <li>
                    Process your scholarship applications and submit them to
                    universities.
                  </li>
                  <li>Verify your identity and prevent fraud.</li>
                  <li>Send you updates regarding your application status.</li>
                  <li>
                    Improve our platform's functionality and user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Data Security */}
          <div className="card bg-base-100 border border-base-200 shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-full mt-1">
                <FaLock size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                <p className="text-base-content/70">
                  We implement industry-standard security measures to protect
                  your data. We use SSL encryption for data transmission and
                  secure database storage. However, no method of transmission
                  over the internet is 100% secure.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Cookies */}
          <div className="card bg-base-100 border border-base-200 shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full mt-1">
                <FaCookieBite size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                <p className="text-base-content/70">
                  We use cookies to authentication (JWT) and to remember your
                  preferences (like Dark Mode). You can instruct your browser to
                  refuse all cookies, but some portions of our service may not
                  function properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
