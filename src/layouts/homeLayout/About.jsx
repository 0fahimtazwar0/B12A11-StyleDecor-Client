import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className=' bg-base-200 p-10 rounded-4xl shadow-2xl'>
        <h1 className='section-heading mb-2!'>About Us</h1>
        <p className='max-w-2xl text-sm opacity-80'>
          We Make Your Dream Decor a Beautiful Reality
        </p>
        <hr className='my-10 text-neutral-300' />
        <p className='opacity-80 text-justify text-sm md:text-base'>
          StyleDecor was founded with a clear mission: to transform every
          occasion into an unforgettable memory that reflects your personal
          style and vision. We believe that every celebration, whether intimate
          or grand, deserves meticulous attention to detail, creative flair, and
          flawless execution. Our passionate team of decorators, designers, and
          event planners brings together years of experience, innovative ideas,
          and a deep understanding of aesthetic trends to craft truly magical
          experiences. From the initial consultation to the final setup, we work
          closely with you to understand your preferences, budget, and unique
          needs. Every floral arrangement, lighting design, theme concept, and
          furniture placement is thoughtfully planned to ensure harmony and
          elegance throughout your event. By combining creativity, precision,
          and a commitment to excellence, we not only decorate spaces but also
          create memories that last a lifetime. At StyleDecor, our goal is more
          than just arranging beautiful settings – it’s about turning your dream
          vision into reality, delivering a seamless, stress-free experience,
          and leaving you and your guests amazed at every detail.
        </p>
        <button className='btn btn-primary w-full mt-10 md:mt-20'>
          Check Out Our Services <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default About;
