import React from 'react';
import { Link } from 'react-router-dom';

function Registration() {
   const handleSubmit = (event) => {
      // Handle form submission logic here
      event.preventDefault();
      // Add your logic for handling the form data
   };

   const handlePhoneNumberChange = (event) => {
      // Remove non-numeric characters from the input value
      const numericValue = event.target.value.replace(/\D/g, '');
      // Update the input value with the numeric value
      event.target.value = numericValue;
   };

   return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
         <div
            className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
            <div className="flex items-center justify-center ">
               <img src="/odiben.jpg" className="h-20 w-20" alt="OdiBen Logo" />
            </div>
            <h1 className="text-3xl font-semibold text-center text-purple-700 p-y-4">Sign Up</h1>

            <form className="mt-6" onSubmit={handleSubmit}>
               {/* <div className='flex flex-row'>
                  <label htmlFor="firstName" className="block text-m text-gray-800">
                     First Name
                  </label>
                  <input
                     type="text"
                     id="firstName"
                     className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div> */}
               <div className='flex'>
                  <label htmlFor="firstName" className="self-center w-1/4 text-m text-gray-800 mr-2">
                     First Name
                  </label>
                  <input
                     type="text"
                     id="firstName"
                     className="w-3/4 px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="flex">
                  <label htmlFor="lastName" className="self-center w-1/4 text-m text-gray-800">
                     Last Name
                  </label>
                  <input
                     type="text"
                     id="lastName"
                     className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="flex">
                  <label htmlFor="address" className="self-center w-1/4 text-m text-gray-800">
                     Address
                  </label>
                  <input
                     type="text"
                     id="address"
                     className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="flex">
                  <label htmlFor="phoneNumber" className="self-center w-2/5 text-m text-gray-800">
                     Phone Number
                  </label>
                  <input
                     type="tel"
                     maxLength={10}
                     pattern="[0-9]*"  // Only allow numeric input
                     inputMode="numeric"
                     id="phoneNumber"
                     className="w-3/5 px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                     onChange={handlePhoneNumberChange}
                  />
               </div>
               <div className="flex">
                  <label htmlFor="email" className="self-center w-1/4 text-m text-gray-800">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="flex">
                  <label htmlFor="password" className="self-center w-1/4 text-m text-gray-800">
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="flex">
                  <label htmlFor="confirmPassword" className="self-center w-2/5 text-m text-gray-800">
                     Confirm Password
                  </label>
                  <input
                     type="password"
                     id="confirmPassword"
                     className="w-3/5 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               <div className="mt-6">
                  <button
                     type="submit"
                     className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                     Submit
                  </button>
               </div>
            </form>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
               Already have an account?{' '}
               <Link to="/" className="font-medium text-purple-600 hover:underline">
                  Sign in
               </Link>
            </p>
         </div>
      </div>
   );
}



export default Registration;