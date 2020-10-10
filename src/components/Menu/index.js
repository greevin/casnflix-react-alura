import React from 'react';
import Logo from '../../assets/img/casnflix.png';
import ButtonLink from '../Menu/components/ButtonLink';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
