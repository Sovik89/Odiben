import React from 'react';

function Blogs() {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const posts = [
    {
      title: 'First Blog Post',
      content: loremIpsum,
    },
    {
      title: 'Second Blog Post',
      content: loremIpsum,
    },
    {
      title: 'Third Blog Post',
      content: loremIpsum,
    },
    {
      title: 'Fourth Blog Post',
      content: loremIpsum,
    },
    // Add more posts as needed
  ];

  return (
    <div className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-5xl">
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-900">Popular Blogs</h1>
      {posts.map((post, index) => (
        <div key={index} className="text-md border-t rounded shadow-md shadow-purple-800/50 mb-6 ">
          <h2 className="font-semibold text-center text-xl text-purple-900 pt-2">{post.title}</h2>
          <img src="/blogs.jpg" className="h-30 w-full items-center" alt="Blogs page" />
          <p className="p-3">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;