import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MyProfile = () => {
  const {user}=useSelector(state=>state.users)
  
  return (
    <div className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>
      {/* Image Placeholder */}
      <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="mx-auto rounded-full"
          style={{ width: '150px', height: '150px' }}
        />
       <label htmlFor="firstName" className="block text-sm font-medium m-4 p-4 justify-start text-purple-800">
            First Name : {user.firstName}
        </label>
        <label htmlFor="lastName" className="block text-sm font-medium m-4 p-4 justify-start text-purple-800">
            Last Name : {user.lastName}
        </label>
        <label htmlFor="email" className="block text-sm font-medium  m-4 p-4 justify-start text-purple-800">
            Email /User Name : {user.email}
        </label>
        <label htmlFor="phoneNumber" className="block text-sm font-medium  m-4 p-4 justify-start text-purple-800">
            Phone Number : {user.phoneNumber}
        </label>
        <label htmlFor="address" className="block text-sm font-medium  m-4 p-4 justify-start text-purple-800">
            Address : {user.address}
        </label>
      {/* Display user information here */}

      <Link to="/edit-profile" className="bg-purple-800 text-white px-4 py-2 m-4 rounded-md">
        Edit Profile
      </Link>
    </div>
  );
};

export default MyProfile;