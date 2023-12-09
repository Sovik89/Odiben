import React,{useState} from 'react';

function FilterSidebar() {
  // State to keep track of the checkbox status
  const [isAuctionChecked, setAuctionChecked] = useState(true);
  const [isDirectsaleChecked, setDirectsaleChecked] = useState(true);

  // Function to toggle the checkbox status
  const toggleAuctionCheckbox = () => {
    setAuctionChecked(!isAuctionChecked);
  };

  const toggleDirectsaleCheckbox = () => {
    setDirectsaleChecked(!isDirectsaleChecked);
  };

  return (
    <div className='sidebar-container bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800 h-full fixed'>
      <div className='flex items-center justify-between mb-3 p-2'>
        <h2 className='text-start text-purple text-lg font-semibold'>FILTERS</h2>
        <button
          type="submit"
          className="text-black bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 bg-purple-600 hover:bg-purple-600 focus:ring-purple-800 hover:text-white"
        >
          Clear All
        </button>
      </div>
      {/* Add your filter components here */}
      <div className='filter-item mb-2'>
        <div class="relative mb-6">
          <h3 className='text-purple font-semibold'>Price</h3>
          <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
          <input id="labels-range-input" type="range" value="1000" min="100" max="2000" className="w-64 h-2 bg-gray-200 rounded-lg appearance cursor-pointer " />
          <span className="text-sm text-gray-500  absolute start-0 -bottom-6">Min ($100)</span>
          <span className="text-sm text-gray-500  absolute end-0 -bottom-6">Max ($1500)</span>
        </div>
      </div>
      <div className='filter-item mb-2'>
        {/* Filter 2 */}
        <h3 className='text-purple font-semibold pt-6'>Auction State</h3>
        <div className="flex items-center me-4 p-4">
          <input checked={!isAuctionChecked} id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-purple-100 border-purple-300 rounded focus:ring-purple-500  focus:ring-2 " onClick={toggleAuctionCheckbox}/>
          <label htmlFor="purple-checkbox" className="ms-2 text-sm font-medium text-purple-900 ">Auction</label>
        </div>
        <div className="flex items-center me-4 p-4">
          <input checked={!isDirectsaleChecked} id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-purple-100 border-purple-300 rounded focus:ring-purple-500  focus:ring-2 " onClick={toggleDirectsaleCheckbox} />
          <label htmlFor="purple-checkbox" className="ms-2 text-sm font-medium text-purple-900 ">Direct Sale</label>
        </div>
      </div>
      {/* Add more filters as needed */}
    </div>
  );
}

export default FilterSidebar;
