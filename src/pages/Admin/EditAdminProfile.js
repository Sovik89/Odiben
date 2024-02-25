import React, { useState } from 'react';
import Modal  from 'react-modal';
import ChangePasswordModal from '../../modals/ChangePasswordModal';
import { useSelector } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',
  },
};

const EditAdminProfile = () => {
  const {user}=useSelector(state=>state.users);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    address: user.address,
    password: '',
    newPassword: '',
    profileImage: null,
  });

  const [isChangePasswordModalOpen, setChangePasswordModalOpen] = useState(false);

  const openChangePasswordModal = () => {
    setChangePasswordModalOpen(true);
  };

  const closeChangePasswordModal = () => {
    setChangePasswordModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // For handling file input
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // assuming only one file is selected
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the user profile using the formData
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        {/* Image Placeholder */}
        <div className="mx-auto mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="mx-auto rounded-full"
          style={{ width: '150px', height: '150px' }}
        />
        </div>
        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-sm font-medium justify-center text-purple-600">
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-purple-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-purple-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-purple-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-purple-600">
             Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-purple-600">
             Address
          </label>
          <input
            type="tel"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <button type="button" onClick={openChangePasswordModal} className="bg-purple-300 text-white px-4 py-2 rounded-md">
            Change Password
          </button>
        </div>        
        <div className="mb-4 w-full">
          <button type="submit" className="bg-purple-800 text-white px-4 py-2 w-full rounded-md">
            Save Changes
          </button>
        </div>
      </form>
      {/* Change Password Modal */}
      <Modal
        isOpen={isChangePasswordModalOpen}
        onRequestClose={closeChangePasswordModal}
        contentLabel="Change Password Modal"
        style={customStyles}
        
      >
        <ChangePasswordModal closeModal={closeChangePasswordModal} />
      </Modal>
    </div>
  );
};

export default EditAdminProfile;