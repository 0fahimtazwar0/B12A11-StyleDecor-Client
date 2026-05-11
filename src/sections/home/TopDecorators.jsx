import Marquee from "react-fast-marquee/dist/index.js";

const TopDecorators = () => {
  const rating = 4.7;
  const ratingStarCalc = (rating) => {
    if (rating > 5) {
      console.log("invalid rating");
      return;
    }
    const x = Math.floor(rating);
    const extra = x - rating == 0 ? false : true;
    if (extra) {
      const stars = x * 2 + 1;
      return stars;
    } else {
      const stars = x * 2;
      return stars;
    }
  };
  const stars = ratingStarCalc(rating);

  const data = [
    { no: 1 },
    { no: 1 },
    { no: 1 },
    { no: 1 },
    { no: 1 },
    { no: 1 },
    { no: 1 },
    { no: 1 },
    { no: 1 },
  ];
  return (
    <div>
      <h1 className='section-heading'>Our Top Decorators</h1>
      <div className='flex gap-8'>
        {/* <Marquee> */}
        {data.map(() => (
          <div className='bg-base-300 p-7 rounded-4xl flex gap-7 w-fit shadow-md'>
            <div className='flex justify-center'>
              <img
                src='https://tr.rbxcdn.com/180DAY-d4a6d1564bf7c0e65447501bdb3cc584/420/420/FaceAccessory/Webp/noFilter'
                alt="Decorator's Photo"
                className='size-24 rounded-full'
              />
            </div>
            <div className='flex flex-col justify-around'>
              <div className='flex flex-col'>
                <h3 className='font-bold text-xl'>Elena Rodriguez</h3>
                <p className='text-sm opacity-70'>Residential Specialist</p>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='rating rating-sm rating-half'>
                  {Array.from({ length: 10 }, (_, i) => {
                    const x = i + 1;
                    return (
                      <div
                        className={`mask mask-star-2 ${x % 2 == 0 ? "mask-half-2" : "mask-half-1"} bg-amber-500`}
                        aria-label={`${x * 0.5 + " star"}`}
                        aria-current={`${x == stars && true}`}
                      />
                    );
                  })}
                </div>
                <p className='opacity-70 flex gap-1.25'>
                  <span>{rating}</span>
                  <span>(170)</span>
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* </Marquee> */}
        {/* <Marquee gradient={false} speed={50}>
          hello
        </Marquee> */}
      </div>
    </div>
  );
};

export default TopDecorators;
