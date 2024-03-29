import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">Your Logo</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="https://twitter.com" className="text-white">About</a>
            <a href="#" className="text-white">Services</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
