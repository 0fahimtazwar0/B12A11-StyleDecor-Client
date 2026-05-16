import { Outlet, useLocation } from "react-router";
import Footer from "./sharedComponents/Footer";
import Navbar from "./sharedComponents/Navbar";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <div className='min-h-svh relative'>
        <Navbar />
        <div className={`${!(location.pathname === "/") && "max-width mt-5"}`}>
          <Outlet />
        </div>
        <div className='min-h-20'></div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
