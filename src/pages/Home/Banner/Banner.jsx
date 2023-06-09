import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url('https://hips.hearstapps.com/hmg-prod/images/gettyimages-143176813-2-1563823040.jpg?crop=1.00xw:0.751xh;0,0.174xh&resize=1200:*')",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">
                  Unlock a World of Language Possibilities
                </h1>
                <p className="mb-5 text-[18px]">
                  Immerse yourself in a vibrant and inclusive community of
                  language learners, where experienced instructors and
                  interactive methods make mastering a new language an enriching
                  and enjoyable experience.
                </p>
                <Link to="/login">
                  <button className="btn btn-neutral">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg')",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">
                  Embark on a Journey of Multilingual Proficiency
                </h1>
                <p className="mb-5 text-[18px]">
                  Expand your horizons and open doors to global opportunities
                  with our comprehensive language programs. From beginner to
                  advanced levels, we provide personalized instruction that
                  nurtures fluency and cultural understanding.
                </p>
                <Link to="/login">
                  <button className="btn btn-neutral">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">
                  Discover the Power of Language at [Language Safari]
                </h1>
                <p className="mb-5 text-[18px]">
                  Experience the transformative power of language education at
                  our renowned school. Our innovative curriculum,
                  state-of-the-art facilities, and immersive approach ensure
                  rapid progress and a lifelong love for languages.
                </p>
                <Link to="/login">
                  <button className="btn btn-neutral">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
