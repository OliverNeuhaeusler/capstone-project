import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Book from '../assets/book.png';
import Castle from '../assets/castle.png';
import Fav from '../assets/manuscript.png';
import Med from '../assets/medieval.png';

function BurgerMenu() {
  return (
    <Menu>
      <NavLink exact to="/">
        Home <img src={Castle} alt="Home" />
      </NavLink>
      <NavLink to="/market">
        Märkte
        <img src={Book} alt="Book" />
      </NavLink>
      <NavLink to="/favorites">
        Favoriten <img src={Fav} alt="Favorites" />
      </NavLink>
      <NavLink to="/createmarket">
        Markt erstellen <img src={Med} alt="create festivals" />
      </NavLink>
      <NavLink to="/profile">Profil</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
      <NavLink to="/impressum">Impressum</NavLink>
    </Menu>
  );
}

export default BurgerMenu;

const Menu = styled.section`
  background: hsl(20, 38%, 26%);
  border: groove 0.2rem goldenrod;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  position: absolute;
  padding: 0.625rem 1.25rem;
  right: 99.9%;
  top: 0;
  transition: transform 1.3s ease-in-out;
  width: 15.625rem;
  z-index: 200;
  &:hover {
    transform: translatex(15.625rem);
  }

  a {
    color: hsl(37, 19%, 70%);
    display: flex;
    font-size: 1.5rem;
    opacity: 0.5;
    padding: 0.313rem;
    text-decoration: none;
  }
  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .active {
    opacity: 1;
  }
`;
