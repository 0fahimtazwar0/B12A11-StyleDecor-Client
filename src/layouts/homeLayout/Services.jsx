import { FiSearch } from "react-icons/fi";
import RangeSlider from "../../sharedComponents/RangeSlider";
import { RiSidebarFoldLine, RiSidebarUnfoldLine } from "react-icons/ri";

const Services = () => {
  const card = (
    <div className='card bg-base-100 max-w-96 shadow-sm'>
      <figure>
        <img
          src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <div className='badge badge-soft badge-primary'>Primary</div>
        <h2 className='card-title'>Card Title</h2>
        <div className='card-actions justify-end items-center mt-5'>
          <p className='text-xl font-bold'>$500</p>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );

  const filters = (
    <div>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>Filters</h3>
        <label
          htmlFor='my-drawer-1'
          className='btn drawer-button bg-base-300 btn-square lg:hidden'
        >
          <RiSidebarFoldLine size={20} />
        </label>
      </div>
      <div className=''>
        <div className='divider my-3.5'></div>
        <form className='flex flex-col gap-3'>
          <h2 className='uppercase font-bold opacity-60'>Service Type</h2>
          <label className='flex gap-2 items-center'>
            <input
              type='radio'
              name='radio-1'
              className='radio radio-sm'
              defaultChecked
            />
            <p>Interior Styling</p>
          </label>
          <label className='flex gap-2 items-center'>
            <input type='radio' name='radio-1' className='radio radio-sm' />
            <p>Interior Styling</p>
          </label>
          <label className='flex gap-2 items-center'>
            <input type='radio' name='radio-1' className='radio radio-sm' />
            <p>Interior Styling</p>
          </label>
          <label className='flex gap-2 items-center'>
            <input type='radio' name='radio-1' className='radio radio-sm' />
            <p>Interior Styling</p>
          </label>
        </form>

        <div className='divider my-3.5'></div>

        <form className='flex flex-col gap-3'>
          <h2 className='uppercase font-bold opacity-60'>Budget Range</h2>
          <div className='mr-3'>
            <RangeSlider MIN={0} MAX={10000} />
          </div>
        </form>
      </div>
    </div>
  );
  return (
    <div>
      <h1 className='section-heading'>Discover Our Services</h1>
      <div className='flex gap-7'>
        <div className='flex-1 min-w-2xs hidden lg:block'>{filters}</div>
        <div className='flex-4 flex flex-col gap-5'>
          <div className='flex gap-5'>
            <div className='drawer w-fit lg:hidden'>
              <input
                id='my-drawer-1'
                type='checkbox'
                className='drawer-toggle'
              />
              <div className='drawer-content'>
                {/* Page content here */}
                <label
                  htmlFor='my-drawer-1'
                  className='btn drawer-button bg-base-300 sm:px-3 max-sm:btn-square'
                >
                  <RiSidebarUnfoldLine size={24} />
                  <span className='hidden sm:block'>Filters</span>
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
                  {filters}
                </div>
              </div>
            </div>
            <div className='join w-full'>
              <label className='input rounded-l-md w-full bg-base-300 input-ghost'>
                <input
                  type='search'
                  required
                  placeholder='Looking for something?'
                />
              </label>
              <button className='btn btn-neutral join-item rounded-r-md!'>
                <FiSearch /> Search
              </button>
            </div>
          </div>

          <div className='bg-base-300 p-3.5 rounded-xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-7 max-sm:w-fit max-sm:mx-auto'>
            {card}
            {card}
            {card}
            {card}
            {card}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
