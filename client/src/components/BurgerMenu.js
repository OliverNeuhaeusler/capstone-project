import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Book from '../assets/catapult.png';
import Castle from '../assets/Home.png';
import Fav from '../assets/manuscriptgrey.png';
import Med from '../assets/swords.png';
import Profile from '../assets/king.png';

function BurgerMenu({ open }) {
  return (
    <Menu open={open}>
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
      <NavLink to="/createProfile">
        Profil erstellen <img src={Profile} alt="create profile" />
      </NavLink>
      <NavLink to="/profile">
        Profil <img src={Profile} alt="create profile" />
      </NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
      <NavLink to="/impressum">Impressum</NavLink>
    </Menu>
  );
}

export default BurgerMenu;

const Menu = styled.section`
  border: groove 0.2rem goldenrod;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: hsl(20, 38%, 26%);
  height: 100vh;
  text-align: left;
  padding: 0.625rem 1.25rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 200;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
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
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }

  .active {
    opacity: 1;
  }
`;

/* const Menu = styled.section`
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
    transform: ${({ open }) =>
      open ? 'translateX(0)' : 'translatex(15.625rem)'};

  a {
    color: hsl(37, 19%, 70%);
    display: flex;
    font-size: 1.5rem;
    opacity: 0.5;
    padding: 0.313rem;
    text-decoration: none;
  }
  img {
    width: 2rem;
    height: 2rem;
  }

  .active {
    opacity: 1;
  }
`; */
