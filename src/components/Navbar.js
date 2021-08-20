import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logoHome.svg';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    maxWidth: '1650px',
    margin: '0 auto',
    alignItems: 'center',
    listStyle: 'none',
    padding: '0.5rem 0',
    fontFamily: 'Righteous, cursive',
    fontSize: '1.1em',
    '& li': {
      padding: '0.5rem 1rem',
    },
    '& img': {
      width: '45px',
    },
  },
  navlinks: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <NavLink to="/">
            <img src={logo} alt="Rent A Home - Go to homepage" />
            <h1>Rent A Home</h1>
          </NavLink>
        </li>
        <li>
          <ul className={classes.navlinks}>
            <li>
              <NavLink exact to="/" activeClassName="activeMenu">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/to-rent" activeClassName="activeMenu">
                Homes to rent
              </NavLink>
            </li>
            <li>
              <NavLink to="/to-host" activeClassName="activeMenu">
                Host your home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="activeMenu">
                About
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/contact-us">
            <Button variant="contained" color="primary">
              Contact Us
            </Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
