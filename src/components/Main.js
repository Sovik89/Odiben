import React from "react";
import Filter from "./Filter";
import ViewPort from "./ViewPort";

function Main() {
  return (
    <main className="flex justify-between">
      <div className="sidebar w-2/12  hidden md:block">
        <Filter />
      </div>
      <div className="viewport w-10/12">
        <ViewPort />
      </div>
    </main>
  );
}

export default Main;
