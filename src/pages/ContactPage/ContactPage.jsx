import React from "react";
import Container from "../../components/Container/Container";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Contact from "../Home/Contact/Contact";

const ContactPage = () => {
  return (
    <div className="py-16 bg-base-100">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            Have a question about a scholarship? Need help with your
            application? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Info Card 1: Office */}
          <div className="card bg-base-100 shadow-xl border border-base-200 text-center p-8 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-bold text-xl mb-2">Our Office</h3>
            <p className="text-base-content/70">
              123 Education Lane,
              <br />
              Knowledge City, NY 10012
            </p>
          </div>

          {/* Info Card 2: Contact */}
          <div className="card bg-base-100 shadow-xl border border-base-200 text-center p-8 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <FaEnvelope />
            </div>
            <h3 className="font-bold text-xl mb-2">Contact Info</h3>
            <p className="text-base-content/70">support@scholarstream.com</p>
            <p className="text-base-content/70">+1 (555) 123-4567</p>
          </div>

          {/* Info Card 3: Hours */}
          <div className="card bg-base-100 shadow-xl border border-base-200 text-center p-8 hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <FaClock />
            </div>
            <h3 className="font-bold text-xl mb-2">Working Hours</h3>
            <p className="text-base-content/70">Mon - Fri: 9AM - 6PM</p>
            <p className="text-base-content/70">Sat - Sun: Closed</p>
          </div>
        </div>

        {/* Divider Text */}
        <div className="divider mb-12 font-semibold">OR SEND US A MESSAGE</div>

        {/* Reuse your existing Contact Form Component */}

        <Contact />
      </Container>
    </div>
  );
};

export default ContactPage;
