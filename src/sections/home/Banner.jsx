import { FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const imageLinks = [
    "https://images.unsplash.com/photo-1693578616322-c8abe6c7393d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531904300735-5f40721f712f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612908317776-a3afde8232fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1693191540919-2ddde89a2f89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1565058650109-849d383455ef?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        speed={1000}
        allowTouchMove={false}
        lazyPreloadPrevNext={2}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 1500 }}
        // style={{ height: "100svh", borderRadius: 12, background: "red" }}
        className='h-[calc(100svh-64px)] flex justify-center items-center relative'
      >
        {imageLinks.map((link, index) => (
          <SwiperSlide>
            <img
              src={link}
              alt={"Slide " + (index + 1)}
              className='h-full w-full object-cover'
            />
          </SwiperSlide>
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            color: "#fff",
          }}
          className='flex flex-col gap-5 justify-center sm:items-center pl-4 sm:p-0'
        >
          <h1 className='text-5xl font-bold text-left sm:w-fit w-full'>
            Elevate <br className='sm:hidden block' /> Your Space
          </h1>
          <p className='mr-10 sm:m-0 lg:w-3xl text-left sm:text-center text-gray-300'>
            Tailored decoration services for discerning individuals who value
            elegance, simplicity, and timeless design.
          </p>
          <button className='btn btn-primary rounded-l-xs rounded-r-full sm:rounded-full text-xl p-7 mt-3.5 w-fit'>
            <p className='flex items-center justify-center'>
              Book Now<span className='hidden sm:block'>!</span>
              <FaChevronRight className='sm:hidden ml-1' />
            </p>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
