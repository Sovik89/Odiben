import React,{useState} from 'react';
//import { useNavigate } from 'react-router-dom';
import TotalAuctions from './TotalAuctions';
import TotalUsers from './TotalUsers';
import AllTransactions from './AllTransactions';

function Admin() {
  const [activeTab, setActiveTab] = useState('Total Auctions');
  //const navigate=useNavigate();

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
          
          <h5 className="text-xl font-semibold tracking-tight text-white mt-11">Active Transactions in 24 hrs:</h5>          
          <div className="mt-4">
            <span className="text-2xl font-bold text-white">59</span>
          </div>
        </div>
        <div className="user_card w-64 h-48 bg-green-500 border border-gray-200 rounded-lg shadow flex flex-col items-center mr-7"> 
          
          <h5 className="text-xl font-semibold tracking-tight text-white mt-11">Active Users:</h5>          
          <div className="mt-4">
            <span className="text-2xl font-bold text-white">159</span>
          </div>
        </div>
        <div className="user_card w-64 h-48 bg-orange-500 border border-gray-200 rounded-lg shadow flex flex-col items-center mr-7"> 
          
          <h5 className="text-xl font-semibold tracking-tight text-white mt-11">Active Auctions:</h5>          
          <div className="mt-4">
            <span className="text-2xl font-bold text-white">359</span>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center text-sm font-medium text-center text-purple-500'>

        <div className="me-2" style={getTabStyle('Total Auctions')}>
          <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-purple-100" onClick={() => handleTabClick('Total Auctions')}>Total Auctions</button>
        </div>
        <div className="me-2" style={getTabStyle('Total Users')}>
          <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-purple-100" onClick={() => handleTabClick('Total Users')}>Total Users</button>
        </div>
        <div className="me-2" style={getTabStyle('All Transactions')}>
          <button className="inline-block px-4 py-3 rounded-lg hover:text-white-900 hover:bg-purple-100" onClick={() => handleTabClick('All Transactions')}>All Transactions</button>
        </div>
        
      </div>

      <div>
        {activeTab === 'Total Auctions' && <TotalAuctions />}
        {activeTab === 'Total Users' && <TotalUsers />}
        {activeTab === 'All Transactions' && <AllTransactions />}
        
      </div>
    </div>
  );
}

export default Admin

// import React from 'react'

// function Admin() {
//   return (
//     <div>Admin</div>
//   )
// }

// export default Admin