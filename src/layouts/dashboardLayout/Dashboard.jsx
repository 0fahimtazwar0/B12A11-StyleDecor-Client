import {
  FaBookmark,
  FaCalendarAlt,
  FaChartLine,
  FaFileInvoiceDollar,
  FaFileSignature,
  FaPaintRoller,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import {
  MdAssignment,
  MdDashboard,
  MdPayments,
  MdPerson,
} from "react-icons/md";
import { RiSidebarFoldLine, RiSidebarUnfoldLine } from "react-icons/ri";
import { NavLink, Outlet, useLocation } from "react-router";

const Dashboard = () => {
  const menu = (
    <div>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>Menu</h3>
        <label
          htmlFor='my-drawer-1'
          className='btn drawer-button bg-base-300 btn-square lg:hidden'
        >
          <RiSidebarFoldLine size={20} />
        </label>
      </div>
      <div className=''>
        <div className='divider my-3.5'></div>
        <div className='flex flex-col gap-3.5'>
          <NavLink
            to={"/dashboard"}
            end
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary btn-outline w-full justify-start  btn-active"
                : "btn btn-primary btn-outline w-full justify-start "
            }
          >
            <MdDashboard />
            Overview
          </NavLink>
          <NavLink
            to={"/dashboard/profile"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary btn-outline w-full justify-start  btn-active"
                : "btn btn-primary btn-outline w-full justify-start "
            }
          >
            <MdPerson />
            Profile
          </NavLink>
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <FaBookmark />
            Bookings
          </NavLink>
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <MdPayments />
            Payment History
          </NavLink>
          {/* admin */}
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <FaUserGroup />
            Manage Decorators
          </NavLink>
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <FaPaintRoller />
            Edit Services
          </NavLink>
          <NavLink
            to={"/dashboard/manage-bookings"}
            className={({ isActive }) =>
              isActive
                ? "btn btn-primary btn-outline w-full justify-start  btn-active"
                : "btn btn-primary btn-outline w-full justify-start "
            }
          >
            <FaFileSignature />
            Manage Bookings
          </NavLink>
          {/* Assign Decorator for On-Site Services in here */}
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <FaFileInvoiceDollar />
            Revenue Monitoring
          </NavLink>
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <FaChartLine />
            Analytics Charts
          </NavLink>

          {/* decorator */}
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <MdAssignment />
            Assigned Projects
          </NavLink>
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <FaCalendarAlt />
            Schedule
          </NavLink>
          <NavLink className='btn btn-primary btn-outline w-full justify-start'>
            <FaFileInvoiceDollar />
            Earning
          </NavLink>
        </div>
      </div>
    </div>
  );
  const location = useLocation();
  function formatPath(path) {
    if (path === "/dashboard") return "Overview";

    // Split the path by slashes and get the last segment
    const segments = path.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    // Capitalize first letter
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  }

  return (
    <div>
      <div className='lg:hidden flex items-start gap-4'>
        <div className='drawer w-fit '>
          <input id='my-drawer-1' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            {/* Page content here */}
            <label
              htmlFor='my-drawer-1'
              className='btn drawer-button bg-base-300 sm:px-3 max-sm:btn-square'
            >
              <RiSidebarUnfoldLine size={24} />
              <span className='hidden sm:block'>Menu</span>
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer-1'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <div className='menu bg-base-200 min-h-full min-w-sm px-10 pt-24'>
              {/* Sidebar content here */}
              {menu}
            </div>
          </div>
        </div>
        <h1 className='section-heading'>{formatPath(location.pathname)}</h1>
      </div>
      <div className='flex gap-10'>
        <div className='max-w-50 max-lg:hidden flex-1'>{menu}</div>
        <div className='flex flex-col w-full flex-1'>
          <h1 className='section-heading max-lg:hidden'>
            {formatPath(location.pathname)}
          </h1>
          <div className='w-full flex-1'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
