import {
  FaArrowRight,
  FaFacebook,
  FaPhone,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div>
      <div className=' bg-base-200 p-10 rounded-4xl shadow-2xl'>
        <h1 className='section-heading mb-2!'>Contact Us</h1>
        <p className='max-w-2xl text-sm opacity-80'>Follow Us Everywhere </p>
        <hr className='my-10 text-neutral-300' />
        <div className=' text-sm md:text-base flex flex-col gap-3.5 w-fit'>
          <Link to={"https://www.x.com"} className='flex items-center gap-3'>
            <FaXTwitter /> StyleDecor1049
          </Link>
          <Link
            to={"https://www.youtube.com"}
            className='flex items-center gap-3'
          >
            <FaYoutube /> StyleDecorYT
          </Link>
          <Link
            to={"https://www.facebook.com"}
            className='flex items-center gap-3'
          >
            <FaFacebook />
            StyleDecor Official
          </Link>
          <hr className='text-neutral-400 w-[110%]' />
          <div
            to={"https://www.youtube.com"}
            className='flex items-center gap-3'
          >
            <FaPhoneAlt /> +880 1234-567890
          </div>
          <div
            to={"https://www.facebook.com"}
            className='flex items-center gap-3'
          >
            <MdEmail />
            info@styledecor.com
          </div>
        </div>
        <button className='btn btn-primary w-full mt-10 md:mt-20'>
          Check Out Our Services <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Contact;
