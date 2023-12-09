import React from 'react';
import Header from './Header';
import FilterSidebar from './FilterSidebar';
import OngoingAuctions from './OngoingAuctions'

function BuyMain() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex flex-row flex-1'>
        <div className='w-64 flex-shrink-0'>
          <FilterSidebar />
        </div>
        <div className='w-full p-4'>

        <div className="relative p-5">
            <div className="fixed w-full max-w-screen-md  right-0">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-purple-600 bg-white-700 border-purple-600 placeholder-gray-400 text-black dark:focus:ring-purple-600 dark:focus:border-purple-600"
                placeholder="Search Items"
                required
              />
              <button
                type="submit"
                className="text-black absolute end-2.5 bottom-2.5 sm:bottom-2 md:bottom-2 lg:bottom-2 xl:bottom-2 bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 bg-purple-600 hover:bg-purple-600 focus:ring-purple-800 hover:text-white"
              >
                Search
              </button>
            </div>
          </div>

          {/* Main content goes here */}
          <OngoingAuctions />
        </div>
      </div>
    </div>
  );
}

export default BuyMain;