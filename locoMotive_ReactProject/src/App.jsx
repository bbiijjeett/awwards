/* eslint-disable no-unused-vars */
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const locomotiveScroll = new LocomotiveScroll();
const App = () => {
  return (
    <div className="h-full w-full">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
};

export default App;
