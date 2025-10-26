import React from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// Layout component to wrap pages with Navbar and optional Sidebar. by defualt here it is declared false.
const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        {showSidebar && <Sidebar />}  {/* Conditionally render Sidebar based on showSidebar prop */}

        <div className="flex-1 flex flex-col">
          <Navbar />

            {/* this children is homepage */}
          <main className="flex-1 overflow-y-auto">{children}</main> 
          
        </div>
      </div>
    </div>
  );
};
export default Layout;

// The Layout component provides a consistent structure for pages, including a Navbar at the top and an optional Sidebar on the side. The main content(homepage) area is scrollable if the content exceeds the viewport height.