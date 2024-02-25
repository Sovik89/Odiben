import React from 'react';

function About() {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className='w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-5xl'>
      <h1 className='text-2xl font-bold mb-4 text-center text-purple-900'>About Us</h1>
      <img src="/aboutus.jpg" className="h-30 w-full items-center" alt="About Us image" />
      <p>
        {loremIpsum}
      </p>
      <p>
        {loremIpsum}
      </p>
      <p>
        {loremIpsum}
      </p>
      <p>
        {loremIpsum}
      </p>
      <p>
        {loremIpsum}
      </p>

    </div>
  );
}

export default About;
