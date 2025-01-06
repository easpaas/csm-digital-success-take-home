'use client'
import React, { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode; // ReactNode supports any valid React content
}

import { useState } from 'react';


const AnswerToggle: React.FC<MyComponentProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      {/* Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        {isOpen ? 'Hide Answer' : 'View Answer'}
      </button>

      {/* Drawer Content */}
      <div
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-full' : 'max-h-0'
        }`}
      >
        <div className="p-4 bg-gray-100 rounded shadow text-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnswerToggle;
