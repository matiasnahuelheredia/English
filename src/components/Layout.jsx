import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, selectedTense, onSelectTense }) => {
  return (
    <div className="flex h-screen bg-htb-dark relative overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline"></div>
      
      <Sidebar selectedTense={selectedTense} onSelectTense={onSelectTense} />
      
      <div className="flex-1 overflow-y-auto bg-htb-darker">
        <div className="p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
