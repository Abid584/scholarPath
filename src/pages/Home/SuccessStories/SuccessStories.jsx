import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Container from "../../../components/Container/Container";

const SuccessStories = () => {
  const axiosPublic = useAxios();

  const { data: reviews = [] } = useQuery({
    queryKey: ["topReviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/top-reviews");
      return res.data;
    },
  });

  const slides = reviews.map((review) => {
    const comment = review.comment || review.reviewMessage || "";
    const avatar = review.avater || review.reviewerImage || "/profile.png";
    const name = review.name || review.reviewerName || "Anonymous";
    const uni = review.universityName || "";
    const date = new Date(
      review.updatedDate || review.reviewDate || review.createdAt || Date.now()
    ).toLocaleDateString();
    const rating = review.rating || 5;

    return (
      <SwiperSlide key={review._id}>
        <div className="card bg-base-100 shadow-xl border border-base-200 h-80 p-8 hover:-translate-y-2 transition-transform duration-300">
          <FaQuoteLeft className="text-4xl text-primary/20 mb-4" />

          <p className="text-base-content/70 italic mb-6 line-clamp-4 grow">"{comment}"</p>

          <div className="flex items-center gap-4 mt-auto">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={avatar}
                  alt={name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/profile.png";
                  }}
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-base-content">{name}</h4>
              <p className="text-xs text-base-content/50">{uni}</p>
              <p className="text-xs text-base-content/50">{date}</p>
            </div>
          </div>

          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating ? "text-warning" : "text-gray-300"} size={14} />
            ))}
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Container className={"my-32"}>
      <div>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge badge-secondary badge-outline mb-2">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            What Our Students <span className="text-primary">Say</span>
          </h2>
          <p className="text-base-content/60 max-w-2xl mx-auto">
            Discover how ScholarPath helped students from around the world
            secure their dream scholarships.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12" // Padding bottom for pagination dots
        >
          {slides}
        </Swiper>
      </div>
    </Container>
  );
};

export default SuccessStories;
