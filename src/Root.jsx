import { Outlet, useLocation } from "react-router";
import Footer from "./sharedComponents/Footer";
import Navbar from "./sharedComponents/Navbar";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <div className='min-h-svh'>
        <Navbar />
        <div className={!(location.pathname === "/") && "max-width"}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
