import { Sidebar } from 'lucide-react';
import React, { useState } from 'react';
import ProductList from './ProductList';
import { SearchProduct } from './SearchProduct';
import DashboardNavbar from './DashboardNavbar';
import { Link, Outlet } from 'react-router-dom';


function Dashboard() {
  // State to toggle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 shadow-md p-4 bg-[#a1e2eb]">
          <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
          <nav>
            <ul className="space-y-2 shadow-2xl bg-[#58aeb9] px-4 py-5 pb-96 rounded-lg">
              <li>
                {/* Link to the Products page */}
                <Link to="/dashboard" className="text-white text-lg hover:text-[#0b5b66]">
                  Products
                </Link>
              </li>
              <li>
                {/* Link to the Orders page */}
                <Link to="/dashboard/orders" className="text-white text-lg hover:text-[#0b5b66]">
                  Orders
                </Link>
              </li>
              <li>
                {/* Link to the Stats page */}
                <Link to="/dashboard/stats" className="text-white text-lg hover:text-[#0b5b66]">
                  Stats
                </Link>
              </li>
              <li>
                <a href="#" className="text-white text-lg hover:text-[#0b5b66]">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 p-2 bg-gray-200 rounded-full shadow-md"
        >
          <Sidebar size={24} />
        </button>

        {/* Page Content */}
        
        
        <DashboardNavbar />
        <ProductList />
        {/* You can add your order-related content here */}
      </div>
    </div>
  );
}

export default Dashboard;