import React, { useState } from 'react';
import MyBoughtItems from './MyBoughtItems';
import MySoldItems from './MySoldItems';
import MyWishlist from './MyWishlist';
import MyCreatedItems from './MyCreatedItems';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//import CreateItem from './CreateItem';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
  const [activeTab, setActiveTab] = useState('Wishlist');
  const navigate=useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTabStyle = (tab) => {
    return activeTab === tab ? {
      backgroundColor: '#B95CF4',
      color: 'white',
      borderRadius: '5px'
    } : {};
  };

  return (
    <div>
      <div className='cards flex flex-row justify-center text-sm font-medium text-center text-purple-500 m-5'>
        <div className="transaction_card w-64 h-48 bg-blue-500 border border-gray-200 rounded-lg shadow flex flex-col items-center mr-7"> 
          
          <h5 className="text-xl font-semibold tracking-tight text-white mt-11">Active Transactions:</h5>          
          <div className="mt-4">
            <span className="text-2xl font-bold text-white">59</span>
          </div>
        </div>
        <div className="creation_card w-64 h-48 bg-green-500 border border-gray-200 rounded-lg shadow flex flex-col items-center">
          
          <h5 className="text-xl font-semibold tracking-tight text-white mt-11">Upload Item</h5>          
          <div className="mt-4">
            <span className="text-2xl font-bold text-white">Click Here:<ArrowForwardIcon
                onClick={()=>{navigate("/create-item")}} /></span>
          </div>
        </div>
      </div>
      <div className='flex justify-center text-sm font-medium text-center text-purple-500'>

        <div className="me-2" style={getTabStyle('Created')}>
          <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-purple-100" onClick={() => handleTabClick('Created')}>Created Items</button>
        </div>
        <div className="me-2" style={getTabStyle('Bought')}>
          <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-purple-100" onClick={() => handleTabClick('Bought')}>Bought</button>
        </div>
        <div className="me-2" style={getTabStyle('Sold')}>
          <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-purple-100" onClick={() => handleTabClick('Sold')}>Sold</button>
        </div>
        <div className="me-2" style={getTabStyle('Wishlist')}>
          <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-purple-100" onClick={() => handleTabClick('Wishlist')}>Wishlist</button>
        </div>
      </div>

      <div>
        {activeTab === 'Created' && <MyCreatedItems />}
        {activeTab === 'Bought' && <MyBoughtItems />}
        {activeTab === 'Sold' && <MySoldItems />}
        {activeTab === 'Wishlist' && <MyWishlist />}
      </div>
    </div>
  );
};

export default MyItems;