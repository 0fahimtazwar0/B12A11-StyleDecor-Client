import { Link, NavLink } from "react-router";

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? "bg-neutral text-neutral-content" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/services'
          className={({ isActive }) =>
            isActive ? "bg-neutral text-neutral-content" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "bg-neutral text-neutral-content" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? "bg-neutral text-neutral-content" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=' bg-base-100 shadow-sm'>
      <div className='navbar max-width'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {" "}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex='-1'
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow gap-1'
            >
              {list}
            </ul>
          </div>
          <Link to='/' className='btn btn-ghost text-xl font-bold'>
            StyleDecor
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-1'>{list}</ul>
        </div>
        <div className='navbar-end'>
          <a className='btn'>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
