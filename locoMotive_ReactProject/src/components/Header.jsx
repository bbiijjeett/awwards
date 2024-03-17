import "../assets/fonts.css";

const Header = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".04"
      className="h-full mt-[100px] w-full tracking-tight flex flex-col justify-center items-center text-2xl md:text-8xl tk-freight-big-pro leading-8 md:leading-[5vw] "
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
  );
};

export default Header;
