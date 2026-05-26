import { FaFileAlt, FaGift, FaFileInvoice } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { MdGroups, MdGroups2 } from "react-icons/md";

const Overview = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-10 justify-center min-h-128 md:min-h-96'>
      <div className='stats shadow-2xl'>
        <div className='stat'>
          <div className='stat-title'>New Projects</div>
          <div className='stat-value flex items-center justify-between'>
            3 <FaFileAlt className='text-secondary' />
          </div>
        </div>
      </div>
      <div className='stats shadow-2xl'>
        <div className='stat'>
          <div className='stat-title'>Pending Projects</div>
          <div className='stat-value flex items-center justify-between'>
            3 <IoTimerSharp className='text-secondary' />
          </div>
        </div>
      </div>
      <div className='stats shadow-2xl'>
        <div className='stat'>
          <div className='stat-title'>Completed Projects</div>
          <div className='stat-value flex items-center justify-between'>
            3<FaGift className='text-secondary' />
          </div>
        </div>
      </div>
      <div className='stats shadow-2xl'>
        <div className='stat'>
          <div className='stat-title'>Total Users</div>
          <div className='stat-value flex items-center justify-between'>
            3 <MdGroups className='text-secondary' />
          </div>
        </div>
      </div>
      <div className='stats shadow-2xl'>
        <div className='stat'>
          <div className='stat-title'>Total Decorators</div>
          <div className='stat-value flex items-center justify-between'>
            6 <MdGroups2 className='text-secondary' />
          </div>
        </div>
      </div>
      <div className='stats shadow-2xl'>
        <div className='stat'>
          <div className='stat-title'>New Decorators Request</div>
          <div className='stat-value flex items-center justify-between'>
            3 <FaFileInvoice className='text-secondary' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
