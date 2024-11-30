import React from 'react';

const SideNavbar: React.FC = () => {
  return (
    <div className="h-screen w-[230px] bg-white text-white flex flex-col justify-between">
      {/* Top Section */}
      <div className="p-4">
        {/* Logo Heading */}
        {/* <h1 className="text-2xl font-bold mb-6">Logo</h1> */}
        {/* <img> </img> */}

        {/* Main Navigation */}
        <div>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-300  hover:text-white">
              <img src='./trending.svg' className='h-[24px]'></img> Reports 
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Library
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              People
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Activities
            </a>
          </nav>
        </div>

        {/* Support Section */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase mb-4">
            Support
          </h2>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white">
              Get Started
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Settings
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          {/* Account Image */}
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>

          {/* Account Info */}
          <div>
            <p className="text-sm font-semibold">Username</p>
            <p className="text-xs text-gray-400">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;