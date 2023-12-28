import React, { useState } from "react";
import Filter from "./Filter";
import ViewPort from "./ViewPort";

function Main() {
  const [isActive, setIsActive] = useState(true);
  const filterToggle = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <main className="flex justify-between">
      <div className="sidebar w-2/12 min-w-[200px] hidden md:block ">
        <Filter />
      </div>
      <div
        onClick={filterToggle}
        className={`${
          isActive ? "" : "filter-active"
        } hamburger-icon sticky top-[4rem] left-4 w-[2.5rem] h-[2.5rem] flex flex-col justify-center items-center border-purple-800 border-2 rounded-md md:hidden`}
      >
        <div className="hamburger-line block w-8 h-1 my-[0.12rem] bg-purple-800"></div>
        <div className=" hamburger-line block w-8 h-1 my-[0.12rem] bg-purple-800"></div>
        <div className="hamburger-line block w-8 h-1 my-[0.12rem] bg-purple-800"></div>
      </div>
      <div className="viewport w-10/12">
        <ViewPort />
      </div>
    </main>
  );
}

export default Main;
