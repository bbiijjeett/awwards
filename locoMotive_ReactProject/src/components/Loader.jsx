import videoSrc from "../assets/4_version1.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to("#yellow1", {
      top: "-100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    });
    tl.from(
      "#yellow2",
      {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out",
      },
      "anim"
    );
    tl.to("#text", { delay: 0.6, color: "black", duration: 0.7 }, "anim");
    tl.to("#loader", { opacity: 0 });
    tl.to("#loader", { display: "none" });
  }, []);

  return (
    <section id="loader" className="flex flex-col justify-between">
      <div
        id="yellow1"
        className="h-screen w-full bg-[#F5E41B] absolute z-20"
      ></div>
      <div
        id="yellow2"
        className="h-screen w-full bg-[#F5E41B] absolute z-20"
      ></div>
      <div id="video" className="h-screen w-full absolute z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div
        id="text"
        className="h-full mt-[100px] w-full tracking-tight flex flex-col justify-center items-center text-4xl md:text-8xl tk-freight-big-pro leading-8 md:leading-[5vw] "
      >
        <p>
          <em>We are a</em> CREATIVE <em>studio</em>
        </p>
        <p>
          DEDICATED <em>to</em> CULTURAL
        </p>
        <p>
          ADVANCEMENT <em>through</em>{" "}
        </p>
        <p>
          STRATEGY <em>and</em> DESIGN.
        </p>
      </div>
    </section>
  );
};

export default Loader;
