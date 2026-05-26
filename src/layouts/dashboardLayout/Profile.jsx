const Profile = () => {
  return (
    <div>
      <div className='bg-base-100 p-5 sm:p-10  rounded-2xl shadow-2xl w-fit mx-auto '>
        <div className='flex flex-col lg:flex-row items-center gap-20'>
          <img
            src='https://png.pngtree.com/background/20250524/original/pngtree-cute-cat-posing-with-sunglass-picture-image_16567564.jpg'
            alt='Profile Pic'
            className='aspect-square object-cover size-36 lg:size-48 border-4 border-primary rounded-full'
          />
          <div className='text-2xl lg:text-3xl font-bold text-primary flex flex-col gap-5 lg:gap-10'>
            <p>Name: Mustafiz Khan</p>
            <p>Email: mustakahn@gmail.com</p>
          </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-5 mt-10'>
          <button className='btn btn-primary btn-wide'>Edit</button>
          <button className='btn btn-error  text-primary-content btn-wide'>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
