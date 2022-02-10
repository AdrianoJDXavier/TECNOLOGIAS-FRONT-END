import React from 'react';
import './Menu.css';

const Menu = ({logo, DarkTheme, onclick}) => {

  return (
    <section className="top-nav">
      <div>
      <img src={logo} className="Menu-logo" alt="logo" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <button className="btn-theme shadow" onClick={onclick}>
        {DarkTheme ?
          <span aria-label="Light mode" role="img">Tema Claro</span> :
          <span aria-label="Dark mode" role="img">Tema Escuro</span>}
      </button>
    </section>
  );
};

export default Menu;