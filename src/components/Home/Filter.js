import React from "react";
//import { Link } from "react-router-dom";

function Filter() {
  return (
    <section className="filter border-purple-300 m-2">
      <div className="range border border-purple-800 m-4 p-2 rounded-lg shadow shadow-md shadow-purple-800/50">
        <h2 className="text-purple-800 font-semibold text-lg border-b border-purple-800">Price range</h2>
        <div className="relative mb-6">
          <label for="labels-range-input" className="sr-only">Range</label>
          <input id="labels-range-input" type="range" value="750" min="100" max="1500" className=" w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer d"/>
            <span className="text-xs text-purple-800  absolute start-0 -bottom-6">Min ($100)</span>
            <span className="text-xs text-purple-800  absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$750</span>            
            <span class="text-xs text-purple-800  absolute end-0 -bottom-6">Max ($1500)</span>
        </div>
      </div>
      <div className="auction_type border border-purple-800 m-4 p-2 rounded-lg shadow shadow-md shadow-purple-800/50">
        <h2 className="text-purple-800 font-semibold text-lg border-b border-purple-800">Auction type</h2>
        <div className="space-y-6 pt-1">
          <div className="flex items-center">
            <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-purple-800">Direct Sale</label>
          </div>
          <div className="flex items-center">
            <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-purple-800">Auction</label>
          </div>
        </div>
      </div>
      <div className="categories border border-purple-800 m-4 p-2 rounded-lg shadow shadow-md shadow-purple-800/50">
        <h2 className="text-purple-800 font-semibold text-lg border-b border-purple-800" >Categories</h2>

        <div className="space-y-6 pt-1">
          <div className="flex items-center">
            <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-purple-800">Antiques</label>
          </div>
          <div className="flex items-center">
            <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-purple-800">Sports Memoribilia</label>
          </div>
          <div className="flex items-center">
            <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-purple-800">Currencies</label>
          </div>
          <div className="flex items-center">
            <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-purple-800">Stamps</label>
          </div>
          <div className="flex items-center">
            <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-purple-800">Books</label>
          </div>
          <div className="flex items-center">
            <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-purple-300 text-purple-800 focus:ring-indigo-500" />
            <label for="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-purple-800">Assets</label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
