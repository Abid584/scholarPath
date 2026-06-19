import Container from "../../components/Container/Container";
import {
  FaGraduationCap,
  FaGlobeAmericas,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    bio: "Former Harvard admissions officer with a passion for democratizing education.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    bio: "Ensures every application is processed smoothly and efficiently.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    bio: "Building the technology that connects students to their dreams.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Student Success Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    bio: "Helping students craft the perfect essay and ace their interviews.",
  },
];

const About = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* 1. HERO SECTION */}
      <div className="relative py-24 bg-base-200 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <Container>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-base-content">
                Empowering the Next <br /> Generation of{" "}
                <span className="text-primary">Leaders</span>
              </h1>
              <p className="text-xl text-base-content/70 leading-relaxed">
                ScholarStream is more than just a platform; it's a movement. We
                believe financial constraints should never stop a brilliant mind
                from achieving their potential.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>

      <Container className="py-20">
        {/* 2. MISSION & VISION (Split Layout) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
              alt="Students studying"
              className="relative rounded-xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-base-content/70 text-lg leading-relaxed">
              Founded in 2024, ScholarStream was built to solve a simple
              problem: Information Asymmetry. Millions of dollars in scholarship
              funds go unclaimed every year simply because students don't know
              they exist.
            </p>
            <p className="text-base-content/70 text-lg leading-relaxed">
              We aggregate opportunities from across the globe, verify them for
              authenticity, and provide a seamless application process.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-base-100 border border-base-200 rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-sm text-gray-500">Partner Universities</p>
              </div>
              <div className="p-4 bg-base-100 border border-base-200 rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-secondary">$10M+</h3>
                <p className="text-sm text-gray-500">Scholarships Awarded</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CORE VALUES */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaGraduationCap />,
                title: "Education First",
                desc: "We prioritize learning above all else.",
              },
              {
                icon: <FaGlobeAmericas />,
                title: "Global Access",
                desc: "Opportunities for students from every country.",
              },
              {
                icon: <FaUsers />,
                title: "Inclusivity",
                desc: "Supporting diverse backgrounds and stories.",
              },
              {
                icon: <FaHandshake />,
                title: "Transparency",
                desc: "No hidden fees, no fake promises.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="card bg-base-100 shadow-md border border-base-200 p-6 text-center hover:border-primary transition-colors"
              >
                <div className="text-4xl text-primary mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                <p className="text-sm text-base-content/70">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TEAM SECTION */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet the Team</h2>
            <p className="text-gray-500">
              The people working behind the scenes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={member.id}
                className="card bg-base-100 shadow-xl overflow-hidden group"
              >
                <figure className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </figure>
                <div className="card-body text-center p-6">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-base-content/60">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
