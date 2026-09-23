import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, selectedTense, onSelectTense }) => {
  return (
    <div className="flex h-screen bg-htb-bg">
      <Sidebar selectedTense={selectedTense} onSelectTense={onSelectTense} />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 pt-16 sm:p-6 sm:pt-16 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
