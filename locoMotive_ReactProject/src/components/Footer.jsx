import { useState } from "react";

const Footer = () => {
  const [newsletter, setNewsletter] = useState(false);

  const handleNewsletter = () => {
    setNewsletter(!newsletter);
  };

  return (
    <footer className="uppercase text-xs md:text-lg flex justify-between px-2  md:justify-around items-center bg-black h-40 w-full text-white">
      <a href="mailto:hello@works.studio">hello@works.studio</a>
      <div className="flex items-baseline gap-2 md:gap-5">
        <div className="flex gap-1 md:gap-5">
          <button
            className={`inline-block transition-all ease-out duration-1000 delay-1000 ${
              newsletter ? "hidden" : ""
            }`}
            onClick={handleNewsletter}
          >
            NEWSLETTER
          </button>
          <span className={`flex   ${newsletter ? "" : "hidden"}   `}>
            <input
              type="text"
              className="w-[40vw] md:w-[18vw] border-b-2 border-white bg-black text-white transition-all ease-in duration-1000"
              placeholder="SIGN UP FOR OUR NEWSLETTER"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="10"
              viewBox="0 0 31 12"
              className="-rotate-90 mt-1.5 md:mt-2.5"
            >
              <polyline
                fill="#000"
                stroke="#FFFFFF"
                points="0 0 15 10 30 0"
                transform="translate(.301 1)"
              />
            </svg>
          </span>
        </div>

        <a href="#" className="hover:underline">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
