import { useState } from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";

const images = [img1, img2, img3, img4, img5];

const Page2 = () => {
  const [bgImg, setBgImag] = useState("bg-black");

  const handleBGimg = (imageUrl) => {
    setBgImag(`url(${imageUrl})`);
  };

  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      className="h-[100vh] w-full  flex flex-col justify-center items-center text-white text-center bg-center bg-cover bg-black"
      style={{ backgroundImage: bgImg }}
    >
      {["MINIRAL", "CONVERSE", "SKY", "BOLDLY", "u.c.scorer"].map(
        (item, index) => (
          <div
            key={index}
            className="elem cursor-pointer w-full relative"
            onMouseEnter={() => {
              handleBGimg(images[index]);
            }}
          >
            <h1 className="select-none text-7xl md:text-8xl uppercase tk-freight-big-pro relative z-10 leading-1 md:leading-[5vw] hover:italic hover:text-black">
              {item}
            </h1>
            <div className="moving absolute top-[50%] -translate-y-[45%]  bg-[#F5E41B] font-xs whitespace-nowrap text-base uppercase py-1 ">
              <div className="blur1 h-full w-2/5 absolute"></div>
              <div className="movingIn inline-block animate-marquee">
                <h5 className="text-black inline-block mr-6">
                  Creative Direction
                </h5>
                <h5 className="text-black inline-block mr-6">Strategy</h5>
                <h5 className="text-black inline-block mr-6">
                  Branding &amp; Identity
                </h5>
                <h5 className="text-black inline-block mr-6">
                  Packaging Design
                </h5>
              </div>
              <div className="movingIn b inline-block animate-marquee">
                <h5 className="text-black inline-block mr-6">
                  Creative Direction
                </h5>
                <h5 className="text-black inline-block mr-6">Strategy</h5>
                <h5 className="text-black inline-block mr-6">
                  Branding &amp; Identity
                </h5>
                <h5 className="text-black inline-block mr-6">
                  Packaging Design
                </h5>
              </div>
              <div className="movingIn  inline-block animate-marquee">
                <h5 className="text-black inline-block mr-6">
                  Creative Direction
                </h5>
                <h5 className="text-black inline-block mr-6">Strategy</h5>
                <h5 className="text-black inline-block mr-6">
                  Branding &amp; Identity
                </h5>
                <h5 className="text-black inline-block mr-6">
                  Packaging Design
                </h5>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Page2;
