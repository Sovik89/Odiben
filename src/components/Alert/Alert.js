import React from 'react';



const Alert = ({ type, message, onClose }) => {
  // Set a timeout to automatically close the alert after 2 seconds
  setTimeout(() => {
    onClose();
  }, 2000);

  return (
    <div className={`p-4 mb-4 text-sm rounded-lg ${getTypeClasses(type)}`} role="alert">
      <span className="font-medium">{capitalizeFirstLetter(type)} alert!</span> {message}
      {/* You can also add a button to manually close the alert */}
      <button onClick={onClose} className="float-right">
        Close
      </button>
    </div>
  );
};

// Helper function to get the appropriate type-specific classes
const getTypeClasses = (type) => {
  switch (type) {
    case 'info':
      return 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400';
    case 'danger':
      return 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400';
    case 'success':
      return 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400';
    case 'warning':
      return 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300';
    case 'dark':
      return 'text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300';
    default:
      return ''; // Default to empty string if type is not recognized
  }
};

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default Alert;