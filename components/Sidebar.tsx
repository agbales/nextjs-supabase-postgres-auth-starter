'use client';

import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <button onClick={toggleSidebar}>{isOpen ? 'Close' : 'Open'}</button>
      {isOpen && <p>(Sidebar component)</p>}
    </div>
  );
};

export default Sidebar;
