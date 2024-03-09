import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => (
          <>
            <div key={index} className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <div className="mr-1 rounded-md w-[8vw] h-[5.2vw] relative -top-[.3vw] bg-red-500"></div>
                )}
                <h1 className="uppercase text-[7vw] leading-[6.5vw] tracking-tighter  font-bold">
                  {item}
                </h1>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-2 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-lg font-light tracking-tight leading-none "
          >
            {item}
          </p>
        ))}
        <div className="start mt-2 flex items-center gap-2">
          <div className="uppercase text-md font-regular px-3 py-1 border-[1px] border-zinc-400 rounded-full">
            Start the project
          </div>
          <div className="w-9 h-9 border-[1px] flex justify-center items-center border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
