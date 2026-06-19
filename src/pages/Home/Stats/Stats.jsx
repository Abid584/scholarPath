import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaUserGraduate,
  FaUniversity,
  FaFileSignature,
  FaStar,
} from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";
import Container from "../../../components/Container/Container";

const Stats = () => {
  const [stats, setStats] = useState({
    scholarshipCount: 0,
    applicationCount: 0,
    userCount: 0,
    reviewCount: 0,
  });
  const axiosInstance = useAxios();

  // Fetch data from your new API
  useEffect(() => {
    // Replace with your actual backend URL or use your Axios Hook
    axiosInstance
      .get(`/home-stats`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  // Hook to detect when user scrolls to this section
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3, // Trigger when 30% visible
  });

  const statItems = [
    {
      id: 1,
      label: "Total Scholarships",
      count: stats.scholarshipCount,
      icon: <FaUniversity className="text-4xl text-primary" />,
      color: "border-primary",
    },
    {
      id: 2,
      label: "Happy Students",
      count: stats.userCount,
      icon: <FaUserGraduate className="text-4xl text-secondary" />,
      color: "border-secondary",
    },
    {
      id: 3,
      label: "Applications",
      count: stats.applicationCount,
      icon: <FaFileSignature className="text-4xl text-accent" />,
      color: "border-accent",
    },
    {
      id: 4,
      label: "User Reviews",
      count: stats.reviewCount,
      icon: <FaStar className="text-4xl text-warning" />,
      color: "border-warning",
    },
  ];

  return (
    <Container className={"my-20"}>
      <div ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We are bridging the gap between talent and opportunity. Here is how
            we are doing so far.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((item) => (
            <div
              key={item.id}
              className={`card bg-base-100 shadow-xl border-b-4 ${item.color} p-6 hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-base-200 rounded-full">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-extrabold mb-2">
                  {inView ? (
                    <CountUp end={item.count} duration={2.5} separator="," />
                  ) : (
                    0
                  )}
                  +
                </h3>

                <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Stats;
