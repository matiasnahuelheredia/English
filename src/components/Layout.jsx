import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, selectedTense, onSelectTense }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar selectedTense={selectedTense} onSelectTense={onSelectTense} />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
