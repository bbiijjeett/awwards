const Foot = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-2"
      className="px-5 pb-40 md:px-20 py-3 md:py-9 b-0  flex   justify-between"
    >
      <a className="text-lg hover:underline" href="#">
        CONTACT
      </a>
      <button className="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="17"
          viewBox="0 0 49 17"
        >
          <polyline
            fill="none"
            stroke="#231F20"
            strokeWidth="2"
            points="937 991 960.336 1005.098 983.673 991"
            transform="translate(-936 -990)"
          />
        </svg>
      </button>
      <a className="text-lg hover:underline" href="#">
        INSTAGRAM
      </a>
    </div>
  );
};

export default Foot;
