/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marque from "./components/Marque";

const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <Landing />
      <Marque />
    </div>
  );
};

export default App;
