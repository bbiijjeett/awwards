import Header from "../components/Header";
import Foot from "../components/Foot";

const Page1 = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.35"
      className="z-10 h-screen w-full bg-[#F5E41B] flex flex-col justify-between"
    >
      <Header />
      <Foot />
    </div>
  );
};

export default Page1;
