import { Outlet } from "react-router";
import Footer from "./sharedComponents/Footer";
import Navbar from "./sharedComponents/Navbar";

const Root = () => {
  return (
    <>
      <div className='min-h-svh'>
        <Navbar />
        <div className='max-width'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
