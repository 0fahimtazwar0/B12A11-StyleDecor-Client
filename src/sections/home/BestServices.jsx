import { FaChevronRight } from "react-icons/fa";

const BestServices = () => {
  // const bgLinks = [
  //   "https://images.unsplash.com/photo-1693578616322-c8abe6c7393d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1531904300735-5f40721f712f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1612908317776-a3afde8232fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://images.unsplash.com/photo-1693191540919-2ddde89a2f89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ];
  const services = [
    {
      name: "Home Sanctuary",
      image:
        "https://images.unsplash.com/photo-1674109759637-82b0659b7bb6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bespoke Weddings",
      image:
        "https://images.unsplash.com/photo-1490005972496-43caf256ea41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Corporate Elegance",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAkUy562pwEWJSJmB1PjHtSWQ3vsYIoKvTH3jWnsu1uLbuByRAgYW2arrkuFsTPiJnJfxUY8ykjN7s89NHYwQptFFThIavp2Mgo4R-KAq35TGGBogh_jBIyekiFP7IT-JxfAC5pv-_YA3oK0hbwOPrAnswuPLXkWUAHTyTwNTybXMMxhY_cw1qqdbNHUXiSbEAoQxHseFUZCLEfd0hnspf_kbu8r7PhawUoFILAAsAIg0XLya8oeEcgVVKNEjhzMyAcOOSDrrLWaJZo",
    },
    {
      name: "Custom Tailored Solutions",
      image:
        "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      <h1 className='section-heading'>Most Popular Services</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((single, index) => (
          <div
            key={index}
            className={`${index == 0 || index == 3 ? "col-span-1 lg:col-span-2" : "col-span-1"} rounded-2xl  overflow-hidden relative group h-72 sm:h-96`}
          >
            <img
              src={single.image}
              className='h-full w-full object-cover group-hover:scale-110 delay-50 duration-500 transition-transform'
              alt={"Service image " + (index + 1)}
            />

            <div className='absolute inset-0 h-full w-full bg-linear-to-t from-[rgba(0,0,0,0.9)] to-transparent to-50% lg:to-30% flex flex-col justify-end items-start text-neutral-content p-5'>
              <h3 className='font-bold text-xl lg:text-2xl'>{single.name}</h3>

              <button className='btn btn-ghost btn-warning rounded-full'>
                Explore <FaChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestServices;
