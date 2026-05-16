import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";

const STORAGE_KEY = "theme";
const DEBOUNCE_MS = 1000;

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored;

  // Nothing in storage → check device preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const detected = prefersDark ? "night" : "light";

  // Write it immediately (first visit only, no need to debounce)
  localStorage.setItem(STORAGE_KEY, detected);
  return detected;
}

const Navbar = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const timerRef = useRef(null);

  // Keep <html data-theme="..."> in sync
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Cleanup on unmount
  useEffect(() => () => clearTimeout(timerRef.current), []);

  function toggleTheme() {
    const next = theme === "light" ? "night" : "light";
    setTheme(next); // instant UI update

    // Debounced write
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, next);
    }, DEBOUNCE_MS);
  }

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
    <div
      className='   bg-base-100/70
    backdrop-blur-md
    border-b
    border-base-300/50
    shadow-sm
    sticky
    top-0
    z-1000'
    >
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
        <div className='navbar-end gap-5'>
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            {theme == "light" ? (
              <input
                type='checkbox'
                className='theme-controller'
                value='light'
                onChange={toggleTheme}
                defaultChecked
              />
            ) : (
              <input
                type='checkbox'
                className='theme-controller'
                value='night'
                onChange={toggleTheme}
              />
            )}

            {/* sun icon */}
            <svg
              className='swap-off size-7 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
            </svg>

            {/* moon icon */}
            <svg
              className='swap-on size-7 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
            </svg>
          </label>
          <Link to={"/login"} className='btn'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
