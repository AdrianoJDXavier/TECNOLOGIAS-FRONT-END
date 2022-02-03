import React from 'react';
import './Menu.css';

const Menu = () => {

  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
    </section>
  );
};

export default Menu;
