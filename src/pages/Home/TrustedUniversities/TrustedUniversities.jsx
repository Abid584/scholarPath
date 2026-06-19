import React from "react";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Container from "../../../components/Container/Container";

const TrustedUniversities = () => {
  const axiosPublic = useAxios();

  const { data: universities = [] } = useQuery({
    queryKey: ["topUniversities"],
    queryFn: async () => {
      const res = await axiosPublic.get("/top-universities");
      return res.data;
    },
  });

  return (
    <Container>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-base-content">
          Trusted by Top <span className="text-primary">Universities</span>
        </h2>
        <p className="text-base-content/60 mt-2">
          We partner with world-class institutions to bring you the best
          opportunities.
        </p>
      </div>

      <div className="flex items-center">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="py-4"
        >
          {universities.map((uni, index) => (
            <div
              key={index}
              className="mx-8 flex flex-col items-center justify-center group cursor-pointer"
            >
              {/* Logo Container */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-base-100 shadow-md border border-base-200 flex items-center justify-center p-4 group-hover:border-primary transition-colors duration-300">
                <img
                  src={uni.universityImage}
                  alt={uni.universityName}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                />
              </div>

              {/* Tooltip-style Name (Optional) */}
              <p className="mt-3 text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors">
                {uni.universityName}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default TrustedUniversities;
