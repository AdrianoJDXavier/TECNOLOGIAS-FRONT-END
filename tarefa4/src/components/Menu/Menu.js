import React from 'react';
import './Menu.css';

const Menu = ({logo}) => {

  return (
    <section className="top-nav">
      <div>
      <img src={logo} className="Menu-logo" alt="logo" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
    </section>
  );
};

export default Menu;
