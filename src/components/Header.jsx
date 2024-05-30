// src/components/Header.jsx
import React from 'react';

const Header = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="header">
      <h2>Hello, today is {formattedDate}</h2>
    </div>
  );
};

export default Header;
