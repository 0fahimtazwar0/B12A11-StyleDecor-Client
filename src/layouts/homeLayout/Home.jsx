import Banner from "../../sections/home/Banner";
import BestServices from "../../sections/home/BestServices";
import TopDecorators from "../../sections/home/TopDecorators";

const Home = () => {
  return (
    <div className='flex flex-col gap-32'>
      <Banner />

      <div className='flex flex-col gap-32 max-width'>
        <BestServices />
        <TopDecorators />
      </div>
    </div>
  );
};

export default Home;
