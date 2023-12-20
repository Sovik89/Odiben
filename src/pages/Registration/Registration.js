import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/user';

function Registration() {
   const navigate=useNavigate();
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [address, setAddress] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [passwordMatchError, setPasswordMatchError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   

   const handleSubmit = async (event) => {
      event.preventDefault();

      // Check if passwords match
      if (password !== confirmPassword) {
         setPasswordMatchError(true);
         return; // Don't proceed with form submission if passwords don't match
      }

      // Reset the password match error state if it was previously set
      setPasswordMatchError(false);

      // Check if the email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         setEmailError(true);
         return; // Don't proceed with form submission if the email is not valid
      }

      // Reset the email error state if it was previously set
      setEmailError(false);

      // Handle form submission logic here
      try {
         console.log("I am here");
         const response = await RegisterUser({
            firstName,
            lastName,
            address,
            email,
            password,
            phoneNumber,
         });

         console.log(response);

         if (response.success) {
            window.alert(response.message);
            // You might want to redirect the user to the login page after successful registration
            // Example: history.push("/login");
            navigate("/login")
         } else {
            window.alert(response.message);
            console.log(response.message);
         }
      } catch (err) {
         window.alert(err);
      }
   };

   const handlePhoneNumberChange = (event) => {
      // Remove non-numeric characters from the input value
      const numericValue = event.target.value.replace(/\D/g, '');
      // Update the input value with the numeric value
      event.target.value = numericValue;
      setPhoneNumber(event.target.value);
   };

   return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
         <div className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
            <div className="flex items-center justify-center">
               <img src="/odiben.jpg" className="h-20 w-20" alt="OdiBen Logo" />
            </div>
            <h1 className="text-3xl font-semibold text-center text-purple-700 p-y-4">Sign Up</h1>

            <form className="mt-6" onSubmit={handleSubmit}>
               <div className='flex'>
                  <label htmlFor="firstName" className="self-center w-1/4 text-m text-gray-800 mr-2">
                     First Name
                  </label>
                  <input
                     type="text"
                     id="firstName"
                     value={firstName}
                     required
                     onChange={(e) => { setFirstName(e.target.value) }}
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
                     required
                     value={lastName}
                     onChange={(e) => { setLastName(e.target.value) }}
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
                     required
                     value={address}
                     onChange={(e) => { setAddress(e.target.value) }}
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
                     required
                     inputMode="numeric"
                     id="phoneNumber"
                     value={phoneNumber}
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
                     required
                     value={email}
                     onChange={(e) => { setEmail(e.target.value) }}
                     className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
               </div>
               {emailError && (
                  <p className="text-red-500 mt-2 text-sm">Please enter a valid email address.</p>
               )}
               <div className="flex">
                  <label htmlFor="password" className="self-center w-1/4 text-m text-gray-800">
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     required
                     value={password}
                     onChange={(e) => { setPassword(e.target.value) }}
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
                     value={confirmPassword}
                     required
                     onChange={(e) => { setConfirmPassword(e.target.value) }}
                     className="w-3/5 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {passwordMatchError && (
                     <p className="text-red-500 mt-2 text-sm">Passwords do not match. Please try again.</p>
                  )}
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
