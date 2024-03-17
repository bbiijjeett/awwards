import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll({
    smooth: true,
    mobile: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-full">
          <Navbar />
          <Page1 />
          <Page2 />
          <Page3 />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
