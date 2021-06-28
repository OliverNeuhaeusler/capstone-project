import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Book from '../assets/catapult.png';
import Castle from '../assets/Home.png';
import Fav from '../assets/manuscriptgrey.png';
import Med from '../assets/swords.png';
import Profile from '../assets/king.png';

function BurgerMenu({ open, setOpen, loggedIn }) {
  return (
    <Menu open={open}>
      <NavLink onClick={() => setOpen(!open)} exact to="/">
        Home <img src={Castle} alt="Home" />
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/market">
        Märkte
        <img src={Book} alt="Book" />
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/favorites">
        Favoriten <img src={Fav} alt="Favorites" />
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/createmarket">
        Markt erstellen <img src={Med} alt="create festivals" />
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/createProfile">
        Profil erstellen <img src={Profile} alt="create profile" />
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/profile">
        {loggedIn ? 'Profil' : 'Login'}{' '}
        <img src={Profile} alt="create profile" />
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/contact">
        Kontakt
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/impressum">
        Impressum
      </NavLink>
    </Menu>
  );
}

export default BurgerMenu;

const Menu = styled.section`
  background: hsl(20, 38%, 26%);
  border: groove 0.2rem var(--PrimaryBorder);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  left: 0;
  padding: 1.25rem 1.25rem 0.625rem;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 200;

  a {
    color: hsl(37, 19%, 70%);
    display: flex;
    font-size: 1.5rem;
    opacity: 0.2;
    padding: 0.313rem;
    text-decoration: none;
  }
  img {
    height: 2rem;
    margin-left: 1rem;
    width: 2rem;
  }

  .active {
    opacity: 1;
  }
`;
