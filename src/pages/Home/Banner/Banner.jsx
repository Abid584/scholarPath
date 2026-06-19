import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Slide Data
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    title: "Find Your Dream Scholarship",
    subtitle:
      "Explore thousands of opportunities from top universities worldwide.",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/VcV3C4mg/university.jpg",
    title: "Invest in Your Future",
    subtitle:
      "Get financial aid, grants, and bursaries to support your education.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2070&auto=format&fit=crop",
    title: "Apply with Confidence",
    subtitle:
      "Our streamlined process makes applying for scholarships easier than ever.",
  },
];

const Banner = () => {
  return (
    <section className="w-full">
      <Swiper
        spaceBetween={30}
        effect={"fade"} // Nice fade transition instead of slide
        fadeEffect={{ crossFade: true }}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-[calc(80vh)]" // Height Control
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero h-full w-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for better text readability */}
              <div className="hero-overlay bg-black/60"></div>

              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                  <h1 className="mb-5 text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-lg md:text-xl text-gray-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center w-fit mx-auto">
                    <Link
                      to="/scholarships"
                      className="btn btn-primary btn-lg border-none text-white"
                    >
                      Browse Scholarships
                    </Link>
                    <Link
                      to="/success-stories"
                      className="btn btn-outline btn-secondary btn-lg text-white hover:text-black"
                    >
                      Success Stories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
