'use client'
import { useState } from 'react';
import Head from 'next/head';
import { FaUser, FaShoppingBag, FaHeart, FaCog } from 'react-icons/fa';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <label className="w-1/4 text-gray-700 font-medium">Name:</label>
              <input type="text" className="w-3/4 p-2 border border-gray-300 rounded-lg" placeholder="John Doe" />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/4 text-gray-700 font-medium">Email:</label>
              <input type="email" className="w-3/4 p-2 border border-gray-300 rounded-lg" placeholder="john.doe@example.com" />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/4 text-gray-700 font-medium">Phone:</label>
              <input type="text" className="w-3/4 p-2 border border-gray-300 rounded-lg" placeholder="+1 234 567 890" />
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
              Save Changes
            </button>
          </div>
        );
      case 'Orders':
        return <div>Orders Content</div>;
      case 'Wishlist':
        return <div>Wishlist Content</div>;
      case 'Settings':
        return <div>Settings Content</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-12">
          <div className="flex flex-wrap">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold mb-6">Account</h2>
              <nav className="space-y-4">
                <button
                  onClick={() => setActiveTab('Profile')}
                  className={`flex items-center space-x-2 text-gray-700 hover:text-blue-500 ${activeTab === 'Profile' ? 'font-bold text-blue-500' : ''}`}
                >
                  <FaUser />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('Orders')}
                  className={`flex items-center space-x-2 text-gray-700 hover:text-blue-500 ${activeTab === 'Orders' ? 'font-bold text-blue-500' : ''}`}
                >
                  <FaShoppingBag />
                  <span>Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('Wishlist')}
                  className={`flex items-center space-x-2 text-gray-700 hover:text-blue-500 ${activeTab === 'Wishlist' ? 'font-bold text-blue-500' : ''}`}
                >
                  <FaHeart />
                  <span>Wishlist</span>
                </button>
                <button
                  onClick={() => setActiveTab('Settings')}
                  className={`flex items-center space-x-2 text-gray-700 hover:text-blue-500 ${activeTab === 'Settings' ? 'font-bold text-blue-500' : ''}`}
                >
                  <FaCog />
                  <span>Settings</span>
                </button>
              </nav>
            </aside>
            {/* Right Content */}
            <main className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">{activeTab} Information</h2>
              {renderTabContent()}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
