import Banner from "../../sections/home/Banner";
import BestServices from "../../sections/home/BestServices";
import ServiceCoverage from "../../sections/home/ServiceCoverage";
import TopDecorators from "../../sections/home/TopDecorators";

const Home = () => {
  return (
    <div className='flex flex-col gap-32'>
      <Banner />

      <div className='flex flex-col gap-32 max-width'>
        <BestServices />
        <TopDecorators />
        <ServiceCoverage />
      </div>
    </div>
  );
};

export default Home;
