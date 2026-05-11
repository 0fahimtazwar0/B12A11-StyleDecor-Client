import { RiFacebookFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";
import { Link } from "react-router";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=' bg-neutral text-neutral-content'>
      <div className='footer sm:footer-horizontal p-10 max-width'>
        <aside>
          <img src={Logo} alt='StyleDecor Logo' className='w-15' />
          <p>
            <span className='font-medium'>StyleDecor Management Ltd.</span>
            <br />
            <span className='opacity-60'>Providing service since 2007</span>
          </p>
        </aside>
        <nav>
          <h6 className='footer-title'>Social</h6>
          <div className='grid grid-flow-col gap-4'>
            <Link to='https://x.com/'>
              <RiTwitterXFill size={24} />
            </Link>
            <Link to='https://youtube.com/'>
              <RiYoutubeFill size={24} />
            </Link>
            <Link to='https://facebook.com/'>
              <RiFacebookFill size={24} />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
